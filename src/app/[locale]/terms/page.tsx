import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { locales, type Locale } from '@/lib/i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Terms of Use | PDFCraft',
  description: 'Terms of use for PDFCraft.',
};

interface TermsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale as Locale} />
      <main className="flex-1">
        <section className="info-hero">
          <div className="app-container">
            <div className="info-hero-inner flex flex-col app-container items-center justify-center">
              <h1 className="info-title">Terms of Use</h1>
              <p className="info-description">
                The basic terms for using PDFCraft and its browser-based PDF tools.
              </p>
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="app-container">
            <article className="info-content info-article">
              <p>
                PDFCraft is provided as a browser-based PDF utility. You are responsible for
                ensuring that you have the right to process, modify, convert, or distribute any
                files you use with this site.
              </p>
              <p>
                Files are processed locally in your browser where supported. The service is provided
                without warranties of any kind, and you should verify important results before using
                them in legal, business, or archival contexts.
              </p>
              <p>
                This site is maintained by EffortGo and is powered by PDFCraft. The project is based
                on open-source software and is licensed under AGPL-3.0.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer locale={locale as Locale} />
    </div>
  );
}

