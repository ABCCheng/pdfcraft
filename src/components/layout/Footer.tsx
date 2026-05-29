'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Github, Mail } from 'lucide-react';
import { type Locale } from '@/lib/i18n/config';
import packageJson from '../../../package.json';

const appVersion = packageJson.version;

export interface FooterProps {
  locale: Locale;
}

export const Footer: React.FC<FooterProps> = ({ locale }) => {
  const t = useTranslations('common');
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: `/${locale}/about`, label: t('navigation.about') },
    { href: `/${locale}/faq`, label: t('navigation.faq') },
    { href: `/${locale}/contact`, label: t('navigation.contact') },
    { href: `/${locale}/privacy`, label: t('navigation.privacy') },
    { href: `/${locale}/terms`, label: 'Terms' },
    { href: `/${locale}/cookies`, label: 'Cookies' },
  ];

  return (
    <footer
      className="w-full border-t border-[hsl(var(--color-border))] bg-[hsl(var(--color-muted)/0.25)] py-6"
      role="contentinfo"
    >
      <div className="app-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">

          {/* Left */}
          <div className="max-w-xl">
            <Link
              href={`/${locale}`}
              className="group flex items-center gap-2 text-lg font-bold text-[hsl(var(--color-foreground))]"
              aria-label={`${t('brand')} - ${t('navigation.home')}`}
            >
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(var(--color-primary))] text-white transition-transform group-hover:scale-105">
                <svg
                  className="h-4 w-4"
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

              <span data-testid="footer-brand-name">
                {t('brand')}
              </span>
            </Link>

            <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--color-muted-foreground))]">
              {t('tagline')} · {appVersion}
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 lg:items-end">

            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 lg:justify-end">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[hsl(var(--color-muted-foreground))] transition-colors hover:text-[hsl(var(--color-foreground))]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center">
              <p className="text-sm text-[hsl(var(--color-muted-foreground))] pr-1">
                © {currentYear} EffortGo. Powered by {t('brand')}.
              </p>

              <a
                href="https://github.com/ABCCheng/pdfcraft"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md text-[hsl(var(--color-primary))] transition-all hover:bg-[hsl(var(--color-muted))] hover:text-[hsl(var(--color-primary))]"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>

              <a
                href="mailto:pdfcraft@effortgo.xyz"
                className="flex h-8 w-8 items-center justify-center rounded-md text-[hsl(var(--color-primary))] transition-all hover:bg-[hsl(var(--color-muted))] hover:text-[hsl(var(--color-primary))]"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
