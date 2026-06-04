/**
 * PDF Remove Blank Pages Processor
 * Requirements: 5.1
 */

import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib, configurePdfjsWorker } from '../loader';
import { analyzePageBlankness, normalizeBlankPageThreshold } from '../blank-page-detection';

export interface RemoveBlankPagesOptions {
  threshold?: number; // 0-1 content tolerance; legacy 90-100 white-pixel thresholds are also accepted
  checkMargins?: boolean;
  marginSize?: number;
  pagesToRemove?: number[];
}

export class RemoveBlankPagesProcessor extends BasePDFProcessor {
  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const removeOptions: RemoveBlankPagesOptions = {
      threshold: 0.1,
      checkMargins: true,
      marginSize: 20,
      ...options as RemoveBlankPagesOptions,
    };

    if (files.length !== 1) {
      return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Exactly 1 PDF file is required.');
    }

    try {
      this.updateProgress(5, 'Loading libraries...');
      const pdfLib = await loadPdfLib();

      this.updateProgress(15, 'Loading PDF...');
      const file = files[0];
      const arrayBuffer = await file.arrayBuffer();
      const sourcePdf = await pdfLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      const totalPages = sourcePdf.getPageCount();
      let blankPages: number[] = [];

      if (removeOptions.pagesToRemove) {
        blankPages = Array.from(new Set(removeOptions.pagesToRemove))
          .filter(page => Number.isInteger(page) && page >= 1 && page <= totalPages)
          .sort((a, b) => a - b);
      } else {
        const pdfjsLib = await import('pdfjs-dist');
        configurePdfjsWorker(pdfjsLib);

        // Load with pdfjs for rendering
        const pdfDoc = await pdfjsLib.getDocument({ data: arrayBuffer.slice(0) }).promise;

        this.updateProgress(25, 'Analyzing pages...');

        const threshold = normalizeBlankPageThreshold(removeOptions.threshold);

        for (let i = 1; i <= totalPages; i++) {
          if (this.checkCancelled()) {
            return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing was cancelled.');
          }

          const page = await pdfDoc.getPage(i);
          const viewport = page.getViewport({ scale: 0.5 });

          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');

          if (context) {
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            context.fillStyle = '#fff';
            context.fillRect(0, 0, canvas.width, canvas.height);

            await page.render({
              canvasContext: context,
              background: 'white',
              viewport: viewport,
            }).promise;

            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const analysis = analyzePageBlankness(imageData, {
              threshold,
              checkMargins: removeOptions.checkMargins,
              marginSize: removeOptions.marginSize,
            });

            if (analysis.isBlank) {
              blankPages.push(i);
            }
          }

          this.updateProgress(25 + (40 * i / totalPages), `Analyzing page ${i}...`);
        }
      }

      if (blankPages.length === 0) {
        this.updateProgress(100, 'Complete!');
        const blob = new Blob([new Uint8Array(arrayBuffer)], { type: 'application/pdf' });
        return this.createSuccessOutput(blob, file.name, {
          pageCount: totalPages,
          blankPagesRemoved: 0,
          message: 'No blank pages found.',
        });
      }

      if (blankPages.length === totalPages) {
        return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'All pages appear to be blank. Cannot remove all pages.');
      }

      this.updateProgress(70, 'Removing blank pages...');

      const newPdf = await pdfLib.PDFDocument.create();

      const pagesToKeep = Array.from({ length: totalPages }, (_, i) => i)
        .filter(i => !blankPages.includes(i + 1));

      const copiedPages = await newPdf.copyPages(sourcePdf, pagesToKeep);
      copiedPages.forEach(page => newPdf.addPage(page));

      this.updateProgress(95, 'Saving PDF...');
      const pdfBytes = await newPdf.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');
      return this.createSuccessOutput(blob, file.name.replace('.pdf', '_no_blanks.pdf'), {
        originalPageCount: totalPages,
        blankPagesRemoved: blankPages.length,
        newPageCount: pagesToKeep.length,
        removedPages: blankPages,
      });

    } catch (error) {
      return this.createErrorOutput(PDFErrorCode.PROCESSING_FAILED, 'Failed to remove blank pages.', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createRemoveBlankPagesProcessor(): RemoveBlankPagesProcessor {
  return new RemoveBlankPagesProcessor();
}

export async function removeBlankPages(file: File, options: RemoveBlankPagesOptions, onProgress?: ProgressCallback): Promise<ProcessOutput> {
  const processor = createRemoveBlankPagesProcessor();
  return processor.process({ files: [file], options: options as Record<string, unknown> }, onProgress);
}
