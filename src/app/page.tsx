import type { Metadata } from 'next';
import { Suspense } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import ToolsPageClient from './[locale]/tools/ToolsPageClient';
import { tools } from '@/config/tools';
import { getToolContent } from '@/config/tool-content';
import { siteConfig } from '@/config/site';
import { locales, type Locale } from '@/lib/i18n/config';
import enMessages from '../../messages/en.json';

const locale: Locale = 'en';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: enMessages.metadata.home.title,
  description: enMessages.metadata.home.description,
  alternates: {
    canonical: siteConfig.url,
    languages: {
      ...Object.fromEntries(locales.map((language) => [language, `${siteConfig.url}/${language}`])),
      'x-default': siteConfig.url,
    },
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: enMessages.metadata.home.title,
    description: enMessages.metadata.home.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: enMessages.metadata.home.title,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: enMessages.metadata.home.title,
    description: enMessages.metadata.home.description,
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
    creator: siteConfig.creator,
  },
};

function HomePageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-[hsl(var(--color-muted-foreground))]">
        Loading...
      </div>
    </div>
  );
}

export default function RootPage() {
  const localizedToolContent = tools.reduce((acc, tool) => {
    const content = getToolContent(locale, tool.id);
    if (content) {
      acc[tool.id] = {
        title: content.title,
        description: content.metaDescription,
      };
    }
    return acc;
  }, {} as Record<string, { title: string; description: string }>);

  return (
    <NextIntlClientProvider locale={locale} messages={enMessages}>
      <Suspense fallback={<HomePageFallback />}>
        <ToolsPageClient locale={locale} localizedToolContent={localizedToolContent} />
      </Suspense>
    </NextIntlClientProvider>
  );
}
