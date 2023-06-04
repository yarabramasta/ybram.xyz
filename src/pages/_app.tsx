import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import { type AppProps } from 'next/app';

import Navigation from '~/components/Navigation';
import nextSeoConfig from '~/next-seo.config';
import '../globals.css';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <DefaultSeo {...nextSeoConfig} />
      <div className="safe-h-screen flex flex-col-reverse md:flex-row">
        <Navigation />
        <AnimatePresence initial={false} mode="wait">
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </div>
      <Analytics />
    </>
  );
}
