'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getClientLocale } from '@/lib/locale-detector';

// Root page handles client-side redirection based on saved or browser language
export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${getClientLocale()}`);
  }, [router]);

  // Render nothing while redirecting
  return null;
}
