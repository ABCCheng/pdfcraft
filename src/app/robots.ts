/**
 * Robots.txt Generation
 * Configures crawling rules for search engines
 * 
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */

import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { getBasePath } from '@/lib/utils/path';

// Required for static export
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const basePath = getBasePath().replace(/\/$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/static/',
        ],
      },
    ],
    sitemap: `${siteConfig.url}${basePath}/sitemap.xml`,
  };
}
