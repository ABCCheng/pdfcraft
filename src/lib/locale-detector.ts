import { defaultLocale, isValidLocale, locales, type Locale } from '@/lib/i18n/config';

const LOCALE_STORAGE_KEY = 'NEXT_LOCALE';
const LEGACY_LOCALE_STORAGE_KEY = 'pdfcraft-language-preference';

function normalizeLocale(input: string): Locale | null {
  if (isValidLocale(input)) {
    return input;
  }

  const lower = input.toLowerCase();
  const exactMatch = locales.find((locale) => locale.toLowerCase() === lower);
  if (exactMatch) {
    return exactMatch;
  }

  const primary = lower.split('-')[0];
  if (primary === 'zh') {
    return lower.includes('tw') || lower.includes('hk') || lower.includes('mo')
      ? 'zh-Hant'
      : 'zh-Hans';
  }

  const primaryMatch = locales.find((locale) => locale.toLowerCase() === primary);
  return primaryMatch ?? null;
}

export function getClientLocale(): Locale {
  if (typeof window === 'undefined') {
    return defaultLocale;
  }

  const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY)
    ?? localStorage.getItem(LEGACY_LOCALE_STORAGE_KEY);
  if (savedLocale) {
    const normalizedSavedLocale = normalizeLocale(savedLocale);
    if (normalizedSavedLocale) {
      return normalizedSavedLocale;
    }
  }

  const browserLocale = normalizeLocale(navigator.language);
  return browserLocale ?? defaultLocale;
}

export function setClientLocale(locale: string): Locale {
  const resolvedLocale = normalizeLocale(locale) ?? defaultLocale;

  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCALE_STORAGE_KEY, resolvedLocale);
    localStorage.setItem(LEGACY_LOCALE_STORAGE_KEY, resolvedLocale);
    document.cookie = `${LOCALE_STORAGE_KEY}=${resolvedLocale};path=/;max-age=31536000`;
  }

  return resolvedLocale;
}
