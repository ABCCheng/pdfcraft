/**
 * Site configuration
 */
export const siteConfig = {
  name: 'PDFCraft',
  description: 'Professional PDF Tools - Free, Private & Browser-Based. Merge, split, compress, convert, and edit PDF files online without uploading to servers.',
  url: 'https://pdfcraft.effortgo.xyz',
  ogImage: '/images/logo.png',
  links: {
    github: 'https://github.com/ABCCheng/pdfcraft',
  },
  creator: 'ABCCheng',
  keywords: [
    'PDF tools',
    'PDF editor',
    'merge PDF',
    'split PDF',
    'compress PDF',
    'convert PDF',
    'free PDF tools',
    'online PDF editor',
    'browser-based PDF',
    'private PDF processing',
  ],
  // SEO-related settings
  seo: {
    titleTemplate: '%s | PDFCraft',
    defaultTitle: 'PDFCraft - Professional PDF Tools',
    locale: 'en_US',
  },
  analytics: {
    googleMeasurementId: 'G-JP3Q4MYZYM',
  },
};

/**
 * Navigation configuration
 */
export const navConfig = {
  mainNav: [
    { title: 'Home', href: '/' },
    { title: 'Tools', href: '/tools' },
    { title: 'About', href: '/about' },
    { title: 'FAQ', href: '/faq' },
  ],
  footerNav: [
    { title: 'Privacy', href: '/privacy' },
    { title: 'Terms', href: '/terms' },
    { title: 'Contact', href: '/contact' },
  ],
};
