import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { locales, type Locale } from '@/lib/i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Cookie Notice | PDFCraft',
  description: 'Cookie and local storage notice for PDFCraft.',
};

interface CookiesPageProps {
  params: Promise<{ locale: string }>;
}

export default async function CookiesPage({ params }: CookiesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale as Locale} />
      <main className="flex-1">
        <section className="info-hero">
          <div className="app-container">
            <div className="info-hero-inner flex flex-col app-container items-center justify-center">
              <h1 className="info-title">Cookie Notice</h1>
              <p className="info-description">
                How PDFCraft uses browser storage for preferences, recent files, and local state.
              </p>
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="app-container">
            <article className="info-content info-article">
              <p>
                PDFCraft does not require account cookies for its core PDF tools. Some preferences,
                such as theme, language, favorite tools, recent files, or saved project state, may be
                stored locally in your browser.
              </p>
              <p>
                Local browser storage helps keep the experience convenient while avoiding server-side
                file uploads. You can clear this data at any time through your browser settings.
              </p>
              <p>
                If analytics or third-party services are added in the future, this notice should be
                updated before those services are enabled.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer locale={locale as Locale} />
    </div>
  );
}

