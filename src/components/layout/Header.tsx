'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
            <Image
              src="/favicon.svg"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg object-contain transition-transform group-hover:scale-105"
              aria-hidden="true"
            />
            <span className="text-lg" data-testid="brand-name">
              {t('brand')}
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <a
              href="https://www.effortgo.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-[hsl(var(--color-muted-foreground))] transition-all hover:scale-105 hover:bg-[hsl(var(--color-muted))/0.5] hover:text-[hsl(var(--color-foreground))]"
              aria-label="EffortGo official website"
              title="EffortGo official website"
            >
              <span
                className="h-5 w-5 bg-[hsl(var(--color-muted-foreground))] transition-colors group-hover:bg-[hsl(var(--color-foreground))]"
                style={{
                  maskImage: "url('/logo-effortgo.svg')",
                  WebkitMaskImage: "url('/logo-effortgo.svg')",
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                }}
                aria-hidden="true"
              />
              <span className="sr-only">EffortGo</span>
            </a>
            <ThemeToggle />
            <LanguageSelector currentLocale={locale} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
