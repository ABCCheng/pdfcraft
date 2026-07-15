'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
              <Image
                src="/favicon.svg"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg object-contain transition-transform group-hover:scale-105"
                aria-hidden="true"
              />

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
                © {currentYear} ABCCheng. Powered by {t('brand')}.
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
