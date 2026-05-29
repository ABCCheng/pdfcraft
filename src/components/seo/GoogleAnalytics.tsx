'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  measurementId: string;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!measurementId) {
      return;
    }

    ensureGtag();

    const queryString = window.location.search.replace(/^\?/, '');
    const pagePath = queryString ? `${pathname}?${queryString}` : pathname;

    window.gtag?.('event', 'page_view', {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
      send_to: measurementId,
    });
  }, [measurementId, pathname]);

  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
