'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 480);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-lg
        border border-[hsl(var(--color-border))]
        bg-[hsl(var(--color-card))]
        text-[hsl(var(--color-primary))]
        shadow-[var(--shadow-lg)]
        transition-all duration-200
        hover:-translate-y-0.5 hover:bg-[hsl(var(--color-primary))] hover:text-[hsl(var(--color-primary-foreground))]
        focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-ring))]
        md:bottom-6 md:right-6
        ${isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'}
      `}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}

export default BackToTopButton;
