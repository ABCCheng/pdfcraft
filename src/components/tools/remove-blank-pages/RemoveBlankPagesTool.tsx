'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { removeBlankPages } from '@/lib/pdf/processors/remove-blank-pages';
import { configurePdfjsWorker } from '@/lib/pdf/loader';
import { analyzePageBlankness } from '@/lib/pdf/blank-page-detection';
import type { ProcessOutput } from '@/types/pdf';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

export interface RemoveBlankPagesToolProps { className?: string; }

const DETECTION_MODES = [
  { value: 0.05, labelKey: 'conservativeMode', descriptionKey: 'conservativeModeHint' },
  { value: 0.1, labelKey: 'standardMode', descriptionKey: 'standardModeHint' },
  { value: 0.3, labelKey: 'looseMode', descriptionKey: 'looseModeHint' },
  { value: 1, labelKey: 'aggressiveMode', descriptionKey: 'aggressiveModeHint' },
] as const;

interface PagePreview {
  pageNumber: number;
  thumbnail?: string;
  isBlank: boolean;
  contentPercentage: number;
}

export function RemoveBlankPagesTool({ className = '' }: RemoveBlankPagesToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');
  const [file, setFile] = useState<File | null>(null);
  const [totalPages, setTotalPages] = useState(0);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [threshold, setThreshold] = useState(0.1);
  const [removedCount, setRemovedCount] = useState(0);
  const [pagePreviews, setPagePreviews] = useState<PagePreview[]>([]);
  const [selectedPages, setSelectedPages] = useState<Set<number>>(new Set());
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [needsAnalysis, setNeedsAnalysis] = useState(false);
  const [previewPageNumber, setPreviewPageNumber] = useState<number | null>(null);
  const [largePreview, setLargePreview] = useState<string | null>(null);
  const [isLoadingLargePreview, setIsLoadingLargePreview] = useState(false);
  const cancelledRef = useRef(false);
  const analysisRunRef = useRef(0);
  const largePreviewRunRef = useRef(0);

  const loadPdfAnalysis = useCallback(async (pdfFile: File, detectionThreshold: number) => {
    const runId = analysisRunRef.current + 1;
    analysisRunRef.current = runId;
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    setNeedsAnalysis(false);
    setError(null);
    setResult(null);
    setPagePreviews([]);
    setSelectedPages(new Set());

    try {
      const pdfjsLib = await import('pdfjs-dist');
      configurePdfjsWorker(pdfjsLib);

      const arrayBuffer = await pdfFile.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const previews: PagePreview[] = [];
      const detectedPages: number[] = [];

      setTotalPages(pdf.numPages);

      for (let i = 1; i <= pdf.numPages; i++) {
        if (analysisRunRef.current !== runId) {
          return;
        }

        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 0.5 });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        if (!context) {
          previews.push({ pageNumber: i, isBlank: false, contentPercentage: 100 });
          setAnalysisProgress(Math.round((i / pdf.numPages) * 100));
          continue;
        }

        canvas.width = viewport.width;
        canvas.height = viewport.height;
        context.fillStyle = '#fff';
        context.fillRect(0, 0, canvas.width, canvas.height);

        await page.render({
          canvasContext: context,
          background: 'white',
          viewport,
        }).promise;

        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const analysis = analyzePageBlankness(imageData, { threshold: detectionThreshold });

        if (analysis.isBlank) {
          detectedPages.push(i);
        }

        previews.push({
          pageNumber: i,
          thumbnail: canvas.toDataURL('image/jpeg', 0.65),
          isBlank: analysis.isBlank,
          contentPercentage: analysis.contentPercentage,
        });

        setAnalysisProgress(Math.round((i / pdf.numPages) * 100));
      }

      if (analysisRunRef.current !== runId) {
        return;
      }

      setPagePreviews(previews);
      setSelectedPages(new Set(detectedPages));
    } catch (err) {
      console.error('Failed to analyze PDF pages:', err);
      setError('Failed to analyze PDF preview. The file may be corrupted or encrypted.');
    } finally {
      if (analysisRunRef.current === runId) {
        setAnalysisProgress(100);
        setIsAnalyzing(false);
      }
    }
  }, []);

  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length === 0) return;

    const selectedFile = files[0];
    setFile(selectedFile);
    setTotalPages(0);
    setError(null);
    setResult(null);
    setStatus('idle');
    setRemovedCount(0);
    loadPdfAnalysis(selectedFile, threshold);
  }, [loadPdfAnalysis, threshold]);

  const handleClearFile = useCallback(() => {
    analysisRunRef.current += 1;
    setFile(null);
    setTotalPages(0);
    setPagePreviews([]);
    setSelectedPages(new Set());
    setResult(null);
    setError(null);
    setStatus('idle');
    setProgress(0);
    setRemovedCount(0);
    setNeedsAnalysis(false);
    setIsAnalyzing(false);
    setAnalysisProgress(0);
    setPreviewPageNumber(null);
    setLargePreview(null);
    setIsLoadingLargePreview(false);
  }, []);

  useEffect(() => {
    if (!file || !previewPageNumber) {
      setLargePreview(null);
      setIsLoadingLargePreview(false);
      return;
    }

    const runId = largePreviewRunRef.current + 1;
    largePreviewRunRef.current = runId;
    setIsLoadingLargePreview(true);
    setLargePreview(null);

    const renderLargePreview = async () => {
      try {
        const pdfjsLib = await import('pdfjs-dist');
        configurePdfjsWorker(pdfjsLib);

        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        const page = await pdf.getPage(previewPageNumber);
        const viewport = page.getViewport({ scale: 1.25 });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        if (!context) {
          return;
        }

        canvas.width = viewport.width;
        canvas.height = viewport.height;
        context.fillStyle = '#fff';
        context.fillRect(0, 0, canvas.width, canvas.height);

        await page.render({
          canvasContext: context,
          background: 'white',
          viewport,
        }).promise;

        if (largePreviewRunRef.current === runId) {
          setLargePreview(canvas.toDataURL('image/jpeg', 0.9));
        }
      } catch (err) {
        console.error('Failed to render enlarged PDF preview:', err);
      } finally {
        if (largePreviewRunRef.current === runId) {
          setIsLoadingLargePreview(false);
        }
      }
    };

    renderLargePreview();
  }, [file, previewPageNumber]);

  const handleThresholdChange = useCallback((value: number) => {
    setThreshold(value);
    setResult(null);
    if (file) {
      setNeedsAnalysis(true);
    }
  }, [file]);

  const handleAnalyze = useCallback(() => {
    if (file) {
      loadPdfAnalysis(file, threshold);
    }
  }, [file, loadPdfAnalysis, threshold]);

  const handleTogglePage = useCallback((pageNumber: number) => {
    setSelectedPages(prev => {
      const next = new Set(prev);
      if (next.has(pageNumber)) {
        next.delete(pageNumber);
      } else {
        next.add(pageNumber);
      }
      return next;
    });
    setResult(null);
  }, []);

  const handleSelectDetected = useCallback(() => {
    setSelectedPages(new Set(pagePreviews.filter(page => page.isBlank).map(page => page.pageNumber)));
    setResult(null);
  }, [pagePreviews]);

  const handleClearSelection = useCallback(() => {
    setSelectedPages(new Set());
    setResult(null);
  }, []);

  const handlePreviewPrevious = useCallback(() => {
    setPreviewPageNumber(current => current ? Math.max(1, current - 1) : current);
  }, []);

  const handlePreviewNext = useCallback(() => {
    setPreviewPageNumber(current => current ? Math.min(totalPages, current + 1) : current);
  }, [totalPages]);

  const handleProcess = useCallback(async () => {
    if (!file) return;
    cancelledRef.current = false;
    setStatus('processing'); setProgress(0); setError(null); setResult(null); setRemovedCount(0);
    try {
      const output: ProcessOutput = await removeBlankPages(file, { threshold, pagesToRemove: Array.from(selectedPages) }, (prog) => { if (!cancelledRef.current) setProgress(prog); });
      if (output.success && output.result) {
        setResult(output.result as Blob);
        setRemovedCount(output.metadata?.blankPagesRemoved as number || 0);
        setStatus('complete');
      } else { setError(output.error?.message || 'Failed.'); setStatus('error'); }
    } catch (err) { setError(err instanceof Error ? err.message : 'Error'); setStatus('error'); }
  }, [file, selectedPages, threshold]);

  const isProcessing = status === 'processing';
  const detectedCount = pagePreviews.filter(page => page.isBlank).length;
  const selectedCount = selectedPages.size;
  const canProcess = Boolean(file) && !isProcessing && !isAnalyzing && selectedCount > 0 && selectedCount < totalPages && !needsAnalysis;
  const previewPage = previewPageNumber ? pagePreviews.find(page => page.pageNumber === previewPageNumber) : null;

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {!file && <FileUploader accept={['application/pdf', '.pdf']} multiple={false} maxFiles={1} onFilesSelected={handleFilesSelected} onError={setError} disabled={isProcessing || isAnalyzing} label={tTools('removeBlankPages.uploadLabel') || t('buttons.upload')} description={tTools('removeBlankPages.uploadDescription')} />}
      {error && <div className="p-4 rounded bg-red-50 border border-red-200 text-red-700"><p className="text-sm">{error}</p></div>}
      {file && (
        <>
          <Card variant="outlined"><div className="flex items-center justify-between"><p className="font-medium">{file.name}</p><Button variant="ghost" size="sm" onClick={handleClearFile} disabled={isProcessing}>{t('buttons.remove')}</Button></div></Card>
          <Card variant="outlined" size="lg">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-medium">{tTools('removeBlankPages.optionsTitle') || 'Options'}</h3>
                <p className="text-sm text-gray-500">{tTools('removeBlankPages.detectionModeHint')}</p>
              </div>
              <div className="flex items-center gap-3">
                {isAnalyzing && (
                  <div className="min-w-[140px]">
                    <div className="mb-1 flex items-center justify-between text-xs text-[hsl(var(--color-muted-foreground))]">
                      <span>{tTools('removeBlankPages.analyzing')}</span>
                      <span>{analysisProgress}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-[hsl(var(--color-muted))]">
                      <div className="h-full rounded-full bg-[hsl(var(--color-primary))] transition-all" style={{ width: `${analysisProgress}%` }} />
                    </div>
                  </div>
                )}
                <Button variant="secondary" size="sm" onClick={handleAnalyze} disabled={isProcessing || isAnalyzing}>
                  {tTools('removeBlankPages.analyzeButton')}
                </Button>
              </div>
            </div>
            <div className="mt-3">
              <label className="sr-only">{tTools('removeBlankPages.detectionModeLabel')}</label>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                {DETECTION_MODES.map((mode) => {
                  const isActive = threshold === mode.value;

                  return (
                    <button
                      key={mode.value}
                      type="button"
                      onClick={() => handleThresholdChange(mode.value)}
                      disabled={isProcessing || isAnalyzing}
                      className={`rounded-[var(--radius-md)] border px-3 py-2 text-left transition-colors ${
                        isActive
                          ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary))]/10 text-[hsl(var(--color-primary))]'
                          : 'border-[hsl(var(--color-border))] hover:border-[hsl(var(--color-primary))]/60'
                      }`}
                    >
                      <span className="block text-sm font-medium">{tTools(`removeBlankPages.${mode.labelKey}`)}</span>
                      <span className="block text-xs text-[hsl(var(--color-muted-foreground))]">{tTools(`removeBlankPages.${mode.descriptionKey}`)}</span>
                    </button>
                  );
                })}
              </div>
              {needsAnalysis && <p className="mt-2 text-sm text-amber-700">{tTools('removeBlankPages.needsAnalysis')}</p>}
            </div>
          </Card>

          <Card variant="outlined" size="lg">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-medium">{tTools('removeBlankPages.previewTitle')}</h3>
                <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                  {tTools('removeBlankPages.previewSummary', { detected: detectedCount, selected: selectedCount, total: totalPages })}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="secondary" size="sm" onClick={handleSelectDetected} disabled={isProcessing || isAnalyzing || detectedCount === 0}>
                  {tTools('removeBlankPages.selectDetected')}
                </Button>
                <Button variant="ghost" size="sm" onClick={handleClearSelection} disabled={isProcessing || isAnalyzing || selectedCount === 0}>
                  {tTools('removeBlankPages.clearSelection')}
                </Button>
              </div>
            </div>

            {selectedCount >= totalPages && totalPages > 0 && (
              <div className="mb-4 rounded border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
                {tTools('removeBlankPages.allPagesSelectedWarning')}
              </div>
            )}

            {isAnalyzing ? (
              <div className="flex items-center justify-center py-12">
                <div className="flex w-full max-w-sm flex-col items-center gap-3">
                  <div className="w-8 h-8 border-2 border-[hsl(var(--color-primary))] border-t-transparent rounded-full animate-spin" />
                  <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                    {tTools('removeBlankPages.analysisProgress', { progress: analysisProgress })}
                  </p>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-[hsl(var(--color-muted))]">
                    <div className="h-full rounded-full bg-[hsl(var(--color-primary))] transition-all" style={{ width: `${analysisProgress}%` }} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 max-h-[420px] overflow-y-auto p-1">
                {pagePreviews.map((preview) => {
                  const isSelected = selectedPages.has(preview.pageNumber);
                  const isManual = isSelected && !preview.isBlank;

                  return (
                    <div
                      key={preview.pageNumber}
                      onClick={() => {
                        if (!isProcessing && !isAnalyzing) {
                          handleTogglePage(preview.pageNumber);
                        }
                      }}
                      onKeyDown={(event) => {
                        if (isProcessing || isAnalyzing) {
                          return;
                        }
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          handleTogglePage(preview.pageNumber);
                        }
                      }}
                      role="button"
                      tabIndex={isProcessing || isAnalyzing ? -1 : 0}
                      aria-disabled={isProcessing || isAnalyzing}
                      title={tTools('removeBlankPages.contentAmount', { amount: preview.contentPercentage.toFixed(2) })}
                      className={`relative aspect-[3/4] rounded-[var(--radius-md)] border-2 overflow-hidden transition-all ${
                        isSelected
                          ? 'border-red-500 ring-2 ring-red-300 opacity-70'
                          : preview.isBlank
                            ? 'border-amber-400 hover:border-red-400'
                            : 'border-[hsl(var(--color-border))] hover:border-amber-300'
                      }`}
                      aria-label={`Page ${preview.pageNumber}${isSelected ? ' selected for deletion' : ''}`}
                    >
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          setPreviewPageNumber(preview.pageNumber);
                        }}
                        disabled={isProcessing || isAnalyzing}
                        className="absolute right-1 top-1 z-10 rounded bg-black/65 p-1 text-white transition-colors hover:bg-black/85"
                        aria-label={tTools('removeBlankPages.viewPage', { page: preview.pageNumber })}
                      >
                        <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                      {preview.thumbnail ? (
                        <img
                          src={preview.thumbnail}
                          alt={`Page ${preview.pageNumber}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-[hsl(var(--color-muted))] flex items-center justify-center">
                          <span className="text-xs text-[hsl(var(--color-muted-foreground))]">
                            {preview.pageNumber}
                          </span>
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 bg-black/65 text-white text-xs py-0.5 text-center">
                        {preview.pageNumber}
                      </div>
                      <div className={`absolute left-1 top-1 rounded px-1.5 py-0.5 text-[10px] font-medium ${
                        isSelected
                          ? 'bg-red-600 text-white'
                          : preview.isBlank
                            ? 'bg-amber-500 text-white'
                            : 'bg-black/60 text-white'
                      }`}>
                        {isSelected ? tTools('removeBlankPages.deleteBadge') : preview.isBlank ? tTools('removeBlankPages.detectedBadge') : tTools('removeBlankPages.keepBadge')}
                      </div>
                      {isManual && (
                        <div className="absolute bottom-6 right-1 rounded bg-blue-600 px-1.5 py-0.5 text-[10px] font-medium text-white">
                          {tTools('removeBlankPages.manualBadge')}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </Card>
        </>
      )}
      {isProcessing && <ProcessingProgress progress={progress} status={status} onCancel={() => { cancelledRef.current = true; setStatus('idle'); }} showPercentage />}
      {file && <div className="flex flex-wrap items-center gap-4"><Button variant="primary" size="lg" onClick={handleProcess} disabled={!canProcess} loading={isProcessing}>{isProcessing ? t('status.processing') : tTools('removeBlankPages.removeButton')}</Button>{result && <DownloadButton file={result} filename={file.name.replace('.pdf', '_no_blanks.pdf')} variant="secondary" size="lg" showFileSize />}</div>}
      {status === 'complete' && result && <div className="p-4 rounded bg-green-50 border border-green-200 text-green-700"><p className="text-sm font-medium">{removedCount > 0 ? tTools('removeBlankPages.successMessage') : tTools('removeBlankPages.noBlankPages')}</p></div>}
      {previewPage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={tTools('removeBlankPages.previewDialogTitle', { page: previewPage.pageNumber })}
          onClick={() => setPreviewPageNumber(null)}
        >
          <div className="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-[var(--radius-lg)] bg-[hsl(var(--color-background))] shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between gap-3 border-b border-[hsl(var(--color-border))] px-4 py-3">
              <div>
                <h3 className="font-medium">{tTools('removeBlankPages.previewDialogTitle', { page: previewPage.pageNumber })}</h3>
                <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                  {tTools('removeBlankPages.contentAmount', { amount: previewPage.contentPercentage.toFixed(2) })}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPreviewPageNumber(null)}
                className="rounded-[var(--radius-md)] p-2 hover:bg-[hsl(var(--color-muted))]"
                aria-label={tTools('removeBlankPages.closePreview')}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid min-h-0 flex-1 grid-cols-[auto_1fr_auto] items-center gap-3 p-4">
              <button
                type="button"
                onClick={handlePreviewPrevious}
                disabled={previewPage.pageNumber <= 1}
                className="rounded-[var(--radius-md)] p-2 hover:bg-[hsl(var(--color-muted))] disabled:opacity-40"
                aria-label={tTools('removeBlankPages.previousPage')}
              >
                <ChevronLeft className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="flex min-h-0 justify-center overflow-auto rounded bg-[hsl(var(--color-muted))] p-3">
                {largePreview || previewPage.thumbnail ? (
                  <div className="relative">
                    <img
                      src={largePreview || previewPage.thumbnail}
                      alt={`Page ${previewPage.pageNumber}`}
                      className="max-h-[70vh] max-w-full object-contain shadow"
                    />
                    {isLoadingLargePreview && (
                      <div className="absolute inset-x-0 top-0 bg-black/65 px-3 py-1 text-center text-xs text-white">
                        {tTools('removeBlankPages.renderingPreview')}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex h-[60vh] w-full items-center justify-center text-[hsl(var(--color-muted-foreground))]">
                    {previewPage.pageNumber}
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={handlePreviewNext}
                disabled={previewPage.pageNumber >= totalPages}
                className="rounded-[var(--radius-md)] p-2 hover:bg-[hsl(var(--color-muted))] disabled:opacity-40"
                aria-label={tTools('removeBlankPages.nextPage')}
              >
                <ChevronRight className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[hsl(var(--color-border))] px-4 py-3">
              <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                {tTools('removeBlankPages.previewSummary', { detected: detectedCount, selected: selectedCount, total: totalPages })}
              </p>
              <Button variant={selectedPages.has(previewPage.pageNumber) ? 'ghost' : 'secondary'} size="sm" onClick={() => handleTogglePage(previewPage.pageNumber)}>
                {selectedPages.has(previewPage.pageNumber) ? tTools('removeBlankPages.unselectPage') : tTools('removeBlankPages.selectPage')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RemoveBlankPagesTool;
