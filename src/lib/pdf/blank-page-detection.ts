export interface BlankPageAnalysis {
  isBlank: boolean;
  contentPercentage: number;
}

export interface BlankPageDetectionOptions {
  threshold?: number;
  checkMargins?: boolean;
  marginSize?: number;
}

export function normalizeBlankPageThreshold(threshold = 0.1): number {
  if (threshold > 1) {
    return Math.max(0, Math.min(1, 100 - threshold));
  }

  return Math.max(0, Math.min(1, threshold));
}

export function analyzePageBlankness(
  imageData: ImageData,
  options: BlankPageDetectionOptions = {}
): BlankPageAnalysis {
  const threshold = normalizeBlankPageThreshold(options.threshold);
  const checkMargins = options.checkMargins ?? true;
  const marginSize = options.marginSize ?? 20;
  const data = imageData.data;
  const { width, height } = imageData;
  const margin = checkMargins ? Math.max(0, Math.floor(marginSize)) : 0;
  const startX = Math.min(margin, Math.max(0, width - 1));
  const startY = Math.min(margin, Math.max(0, height - 1));
  const endX = Math.max(startX + 1, width - margin);
  const endY = Math.max(startY + 1, height - margin);
  let contentPixels = 0;
  let totalPixels = 0;

  for (let y = startY; y < endY; y++) {
    for (let x = startX; x < endX; x++) {
      const i = (y * width + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];

      if (a <= 8) {
        continue;
      }

      totalPixels++;

      if (r < 248 || g < 248 || b < 248) {
        contentPixels++;
      }
    }
  }

  if (totalPixels === 0) {
    return {
      isBlank: true,
      contentPercentage: 0,
    };
  }

  const contentPercentage = (contentPixels / totalPixels) * 100;

  return {
    isBlank: contentPercentage <= threshold,
    contentPercentage,
  };
}
