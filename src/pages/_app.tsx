import { Analytics } from '@vercel/analytics/react';
import { getAnalytics } from 'firebase/analytics';
import { getPerformance } from 'firebase/performance';
import { AnimatePresence } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import { type AppProps } from 'next/app';

import RootLayout from '~/components/RootLayout';
import { app } from '~/lib/firebase';
import nextSeoConfig from '~/next-seo.config';

import '../globals.css';

export default function App({ Component, pageProps, router }: AppProps) {
  if (process.env.NODE_ENV === 'production') {
    if (typeof window !== 'undefined') {
      getAnalytics(app);
      getPerformance(app);
    }
  }

  return (
    <>
      <DefaultSeo {...nextSeoConfig} />
      <RootLayout>
        <AnimatePresence initial={router.pathname === '/'} mode="wait">
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </RootLayout>
      <Analytics />
    </>
  );
}
