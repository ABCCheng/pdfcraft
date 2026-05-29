'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { type Locale } from '@/lib/i18n/config';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageSelector } from './LanguageSelector';

export interface HeaderProps {
  locale: Locale;
}

export const Header: React.FC<HeaderProps> = ({ locale }) => {
  const t = useTranslations('common');

  return (
    <header
      className="fixed top-0 z-50 w-full border-b border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))]/95 backdrop-blur"
      role="banner"
    >
      <div className="app-container">
        <div className="flex h-16 items-center justify-between">
          <Link
            href={`/${locale}`}
            className="group flex items-center gap-2 text-lg font-bold text-[hsl(var(--color-foreground))] hover:opacity-90 transition-opacity"
            aria-label={`${t('brand')} - ${t('navigation.home')}`}
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(var(--color-primary))] text-white transition-transform group-hover:scale-105">
              <svg
                className="h-4 w-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <span className="text-lg" data-testid="brand-name">
              {t('brand')}
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSelector currentLocale={locale} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

