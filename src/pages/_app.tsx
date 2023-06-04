import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import { type AppProps } from 'next/app';

import nextSeoConfig from '~/next-seo.config';
import '../globals.css';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <DefaultSeo {...nextSeoConfig} />
      <AnimatePresence initial={false} mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
      <Analytics />
    </>
  );
}
