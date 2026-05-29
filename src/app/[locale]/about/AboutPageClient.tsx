'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Shield, Zap, Globe, Heart, Code, Users, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { type Locale } from '@/lib/i18n/config';
import { getAllTools } from '@/config/tools';

interface AboutPageClientProps {
  locale: Locale;
}

export default function AboutPageClient({ locale }: AboutPageClientProps) {
  const t = useTranslations('aboutPage');
  const tCommon = useTranslations('common');
  const allTools = getAllTools();

  const values = [
    {
      icon: Shield,
      title: t('values.privacy.title'),
      description: t('values.privacy.description'),
    },
    {
      icon: Zap,
      title: t('values.fast.title'),
      description: t('values.fast.description'),
    },
    {
      icon: Globe,
      title: t('values.accessible.title'),
      description: t('values.accessible.description'),
    },
    {
      icon: Heart,
      title: t('values.free.title'),
      description: t('values.free.description'),
    },
    {
      icon: Code,
      title: t('values.openSource.title'),
      description: t('values.openSource.description'),
    },
    {
      icon: Users,
      title: t('values.community.title'),
      description: t('values.community.description'),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="info-hero">
          <div className="app-container">
            <div className="info-hero-inner flex flex-col app-container items-center justify-center">
              <h1 className="info-title">
                {t('title', { brand: tCommon('brand') })}
              </h1>
              <p className="info-description">
                {t('description', { brand: tCommon('brand'), count: allTools.length })}
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="info-section">
          <div className="app-container">
            <div className="info-content">
              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-5">
                {t('mission.title')}
              </h2>
              <div className="info-article">
                <p className="mb-3">
                  {t('mission.p1', { brand: tCommon('brand') })}
                </p>
                <p className="mb-3">
                  {t('mission.p2', { brand: tCommon('brand') })}
                </p>
                <p>
                  {t('mission.p3', { brand: tCommon('brand') })}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="info-section info-section-muted">
          <div className="app-container">
            <div className="info-content">
              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-8">
                {t('values.title')}
              </h2>
              <div className="info-grid info-grid-2">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                      <Card key={index} className="p-5" hover>
                        <div className="flex items-start gap-4">
                          <div className="info-icon">
                            <Icon className="h-5 w-5 text-[hsl(var(--color-primary))]" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-[hsl(var(--color-foreground))] mb-2">
                              {value.title}
                            </h3>
                            <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                  );
                })}
            </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="info-section">
          <div className="app-container">
            <div className="info-content">
              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-5">
                {t('technology.title')}
              </h2>
              <div className="info-article">
                <p className="mb-3">
                  {t('technology.description', { brand: tCommon('brand') })}
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li>{t.rich('technology.list.nextjs', { strong1: (chunks) => <strong>{chunks}</strong> })}</li>
                  <li>{t.rich('technology.list.wasm', { strong1: (chunks) => <strong>{chunks}</strong> })}</li>
                  <li>{t.rich('technology.list.workers', { strong1: (chunks) => <strong>{chunks}</strong> })}</li>
                  <li>{t.rich('technology.list.pdflib', { strong1: (chunks) => <strong>{chunks}</strong> })}</li>
                  <li>{t.rich('technology.list.indexeddb', { strong1: (chunks) => <strong>{chunks}</strong> })}</li>
                </ul>
                <p>
                  {t('technology.summary')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Attribution Section */}
        <section className="info-section info-section-muted">
          <div className="app-container">
            <div className="info-content">
              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-5">
                {t('acknowledgements.title')}
              </h2>
              <div className="info-article">
                <p className="mb-3">
                  {t.rich('acknowledgements.p1', {
                    repo: (chunks) => (
                      <a
                        href="https://github.com/PDFCraftTool/pdfcraft"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[hsl(var(--color-primary))] hover:underline"
                      >
                        {chunks}
                      </a>
                    ),
                  })}
                </p>
                <p>
                  {t('acknowledgements.p2', { brand: tCommon('brand') })}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="info-section">
          <div className="app-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                {t('cta.title')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-8">
                {t('cta.description', { brand: tCommon('brand'), count: allTools.length })}
              </p>
              <Link href={`/${locale}/tools`}>
                <Button variant="primary" size="lg">
                  {t('cta.button')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}

