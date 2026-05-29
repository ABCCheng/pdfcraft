'use client';

import { useTranslations } from 'next-intl';
import { Shield, Lock, Eye, Server, Trash2 } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { type Locale } from '@/lib/i18n/config';

interface PrivacyPageClientProps {
  locale: Locale;
}

export default function PrivacyPageClient({ locale }: PrivacyPageClientProps) {
  const t = useTranslations();

  const privacyHighlights = [
    {
      icon: Server,
      title: 'No Server Uploads',
      description: 'Your files are never uploaded to any server. All processing happens locally in your browser.',
    },
    {
      icon: Lock,
      title: 'Local Processing',
      description: 'PDF operations are performed using JavaScript and WebAssembly directly on your device.',
    },
    {
      icon: Trash2,
      title: 'Automatic Cleanup',
      description: 'All file data is automatically cleared when you close the browser tab or navigate away.',
    },
    {
      icon: Eye,
      title: 'No Tracking',
      description: 'We don\'t track your file contents or personal information. Your documents remain private.',
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
                Privacy Policy
              </h1>
              <p className="info-description">
                Your privacy is our top priority. {t('common.brand')} is designed from the ground up 
                to protect your data.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Highlights */}
        <section className="info-section info-section-muted">
          <div className="app-container">
            <div className="info-content">
            <div className="info-grid info-grid-2">
              {privacyHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="p-5" hover>
                    <div className="info-icon mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-[hsl(var(--color-foreground))] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                      {item.description}
                    </p>
                  </Card>
                );
              })}
            </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="info-section">
          <div className="app-container">
            <div className="info-content info-article">
              <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-8">
                Last updated: May 2026
              </p>

              <h2>
                1. Introduction
              </h2>
              <p>
                {t('common.brand')} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we handle your information when you use our PDF tools.
              </p>

              <h2>
                2. How Our Service Works
              </h2>
              <p>
                {t('common.brand')} is a client-side application. This means:
              </p>
              <ul>
                <li>All PDF processing happens directly in your web browser</li>
                <li>Your files are never uploaded to our servers or any third-party servers</li>
                <li>We cannot see, access, or store your documents</li>
                <li>Your files remain on your device at all times</li>
              </ul>

              <h2>
                3. Information We Collect
              </h2>
              <h3>
                3.1 Your Files
              </h3>
              <p>
                <strong>We do not collect your files.</strong> When you use our PDF tools, your files 
                are processed entirely within your browser. They are never transmitted to our servers.
              </p>

              <h3>
                3.2 Usage Data
              </h3>
              <p>
                We may collect anonymous usage statistics to improve our service, such as:
              </p>
              <ul>
                <li>Which tools are most popular</li>
                <li>General geographic region (country level)</li>
                <li>Browser type and version</li>
                <li>Device type (desktop, mobile, tablet)</li>
              </ul>
              <p>
                This data is aggregated and anonymized. It cannot be used to identify you personally.
              </p>

              <h2>
                4. Local Storage
              </h2>
              <p>
                {t('common.brand')} may use your browser&apos;s local storage to:
              </p>
              <ul>
                <li>Remember your language preference</li>
                <li>Store your recent tool history</li>
                <li>Save work-in-progress for interrupted sessions</li>
              </ul>
              <p>
                This data is stored only on your device and is not transmitted to us.
              </p>

              <h2>
                5. Cookies
              </h2>
              <p>
                We use minimal cookies for essential functionality:
              </p>
              <ul>
                <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
                <li><strong>Preference cookies:</strong> Remember your settings like language preference</li>
              </ul>
              <p>
                We do not use tracking cookies or advertising cookies.
              </p>

              <h2>
                6. Third-Party Services
              </h2>
              <p>
                {t('common.brand')} does not share your data with third parties. We do not use:
              </p>
              <ul>
                <li>Third-party analytics that track individual users</li>
                <li>Advertising networks</li>
                <li>Social media tracking pixels</li>
                <li>External file processing services</li>
              </ul>

              <h2>
                7. Data Security
              </h2>
              <p>
                Since your files never leave your device, they are protected by your own device&apos;s 
                security measures. We recommend:
              </p>
              <ul>
                <li>Using an up-to-date browser</li>
                <li>Keeping your operating system updated</li>
                <li>Using secure networks when handling sensitive documents</li>
              </ul>

              <h2>
                8. Your Rights
              </h2>
              <p>
                Since we don&apos;t collect personal data, there is no personal data to access, correct, 
                or delete. You can clear your browser&apos;s local storage at any time to remove any 
                preferences stored by {t('common.brand')}.
              </p>

              <h2>
                9. Children&apos;s Privacy
              </h2>
              <p>
                {t('common.brand')} is not directed at children under 13. We do not knowingly collect 
                any information from children.
              </p>

              <h2>
                10. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>

              <h2>
                11. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us through our 
                contact page.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Badge */}
        <section className="info-section info-section-muted">
          <div className="app-container">
            <div className="info-content">
              <div className="flex items-center gap-3 rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-card))] px-5 py-4">
                <div className="info-icon">
                  <Shield className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-[hsl(var(--color-foreground))]">
                    {t('common.footer.privacyBadge')}
                  </p>
                  <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                    Your documents are processed securely in your browser
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}

