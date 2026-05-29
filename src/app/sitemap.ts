/**
 * Sitemap Generation
 * Generates sitemap.xml for all pages across all locales
 * 
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */

import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { locales, type Locale } from '@/lib/i18n/config';
import { getAllTools } from '@/config/tools';
import { TOOL_CATEGORIES } from '@/types/tool';
import { getBasePath } from '@/lib/utils/path';

// Required for static export
export const dynamic = 'force-static';

/**
 * Priority values for different page types
 */
const PRIORITY = {
  home: 1.0,
  tools: 0.9,
  toolPage: 0.8,
  category: 0.7,
  static: 0.6,
} as const;

/**
 * Change frequency for different page types
 */
const CHANGE_FREQUENCY = {
  home: 'daily',
  tools: 'weekly',
  toolPage: 'weekly',
  category: 'weekly',
  static: 'monthly',
} as const;

/**
 * Static pages that exist for all locales
 */
const STATIC_PAGES = [
  { path: '', priority: PRIORITY.home, changeFrequency: CHANGE_FREQUENCY.home },
  { path: '/tools', priority: PRIORITY.tools, changeFrequency: CHANGE_FREQUENCY.tools },
  { path: '/about', priority: PRIORITY.static, changeFrequency: CHANGE_FREQUENCY.static },
  { path: '/faq', priority: PRIORITY.static, changeFrequency: CHANGE_FREQUENCY.static },
  { path: '/privacy', priority: PRIORITY.static, changeFrequency: CHANGE_FREQUENCY.static },
  { path: '/contact', priority: PRIORITY.static, changeFrequency: CHANGE_FREQUENCY.static },
  { path: '/terms', priority: PRIORITY.static, changeFrequency: CHANGE_FREQUENCY.static },
  { path: '/cookies', priority: PRIORITY.static, changeFrequency: CHANGE_FREQUENCY.static },
];

function buildSitemapUrl(locale: Locale, path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const basePath = getBasePath().replace(/\/$/, '');
  return `${siteConfig.url}${basePath}/${locale}${cleanPath}`;
}

function getSitemapAlternates(path: string = ''): Record<string, string> {
  const languages = locales.reduce(
    (acc, locale) => {
      acc[locale] = buildSitemapUrl(locale, path);
      return acc;
    },
    {} as Record<string, string>
  );

  languages['x-default'] = buildSitemapUrl('en', path);
  return languages;
}

/**
 * Generate sitemap entries for a specific locale
 */
function generateLocaleEntries(locale: Locale, lastModified: Date): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  
  // Add static pages
  for (const page of STATIC_PAGES) {
    entries.push({
      url: buildSitemapUrl(locale, page.path),
      lastModified,
      changeFrequency: page.changeFrequency as 'daily' | 'weekly' | 'monthly',
      priority: page.priority,
      alternates: {
        languages: getSitemapAlternates(page.path),
      },
    });
  }

  for (const category of TOOL_CATEGORIES) {
    const path = `/tools/category/${category}`;
    entries.push({
      url: buildSitemapUrl(locale, path),
      lastModified,
      changeFrequency: CHANGE_FREQUENCY.category,
      priority: PRIORITY.category,
      alternates: {
        languages: getSitemapAlternates(path),
      },
    });
  }
  
  // Add tool pages
  const tools = getAllTools();
  for (const tool of tools) {
    const path = `/tools/${tool.slug}`;
    entries.push({
      url: buildSitemapUrl(locale, path),
      lastModified,
      changeFrequency: CHANGE_FREQUENCY.toolPage,
      priority: PRIORITY.toolPage,
      alternates: {
        languages: getSitemapAlternates(path),
      },
    });
  }
  
  return entries;
}

/**
 * Generate the complete sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const allEntries: MetadataRoute.Sitemap = [];
  
  // Generate entries for each locale
  for (const locale of locales) {
    const localeEntries = generateLocaleEntries(locale, lastModified);
    allEntries.push(...localeEntries);
  }
  
  return allEntries;
}

/**
 * Get total number of URLs in sitemap
 * Useful for testing and validation
 */
export function getSitemapUrlCount(): number {
  const tools = getAllTools();
  const staticPagesCount = STATIC_PAGES.length + TOOL_CATEGORIES.length;
  const toolPagesCount = tools.length;
  const localesCount = locales.length;
  
  return (staticPagesCount + toolPagesCount) * localesCount;
}
