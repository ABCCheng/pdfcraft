/**
 * Tool content exports for all languages
 * Requirements: 3.1 - Multi-language support
 */

export { toolContentEn } from './en';
export { toolContentJa } from './ja';
export { toolContentKo } from './ko';
export { toolContentEs } from './es';
export { toolContentFr } from './fr';
export { toolContentDe } from './de';
export { toolContentIt } from './it';
export { toolContentZhHans } from './zh-Hans';
export { toolContentZhHant } from './zh-Hant';
export { toolContentPt } from './pt';

import { toolContentEn } from './en';
import { toolContentJa } from './ja';
import { toolContentKo } from './ko';
import { toolContentEs } from './es';
import { toolContentFr } from './fr';
import { toolContentDe } from './de';
import { toolContentIt } from './it';
import { toolContentZhHans } from './zh-Hans';
import { toolContentZhHant } from './zh-Hant';
import { toolContentPt } from './pt';
import { ToolContent } from '@/types/tool';

export type Locale = 'en' | 'zh-Hans' | 'zh-Hant' | 'fr' | 'es' | 'de' | 'it' | 'pt' | 'ja' | 'ko';

/**
 * Get tool content for a specific locale
 * Falls back to English if translation not found
 * Falls back to English if localized content is unavailable.
 */
export function getToolContent(locale: Locale, toolId: string): ToolContent | undefined {
  const contentMap: Record<string, Record<string, ToolContent>> = {
    en: toolContentEn,
    ja: toolContentJa,
    ko: toolContentKo,
    es: toolContentEs,
    fr: toolContentFr,
    de: toolContentDe,
    it: toolContentIt,
    'zh-Hans': toolContentZhHans,
    'zh-Hant': toolContentZhHant,
    pt: toolContentPt,
  };

  const localeContent = contentMap[locale];
  if (localeContent && localeContent[toolId]) {
    return localeContent[toolId];
  }

  // Fallback to English
  return toolContentEn[toolId];
}
