/**
 * Web App Manifest Generation
 * Configures PWA settings for the application
 * 
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest
 */

import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

// Required for static export
export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'PDFCraft',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#d8252c',
    orientation: 'portrait-primary',
    categories: ['productivity', 'utilities'],
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
    shortcuts: [
      {
        name: 'Merge PDF',
        short_name: 'Merge',
        description: 'Combine multiple PDF files',
        url: '/en/tools/merge-pdf',
      },
      {
        name: 'Split PDF',
        short_name: 'Split',
        description: 'Split PDF into multiple files',
        url: '/en/tools/split-pdf',
      },
      {
        name: 'Compress PDF',
        short_name: 'Compress',
        description: 'Reduce PDF file size',
        url: '/en/tools/compress-pdf',
      },
    ],
  };
}
