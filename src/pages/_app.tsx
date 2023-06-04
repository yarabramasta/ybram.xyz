import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import { type AppProps } from 'next/app';
import { type PropsWithChildren } from 'react';
import { useWindowSize } from 'usehooks-ts';

import Mouse, { MouseState, useMouseState } from '~/components/Mouse';
import Navigation from '~/components/Navigation';
import nextSeoConfig from '~/next-seo.config';
import '../globals.css';

function RootLayout({ children }: PropsWithChildren) {
  const { height } = useWindowSize();
  const { mounted } = useMouseState();

  return (
    <div className="flex flex-col-reverse md:flex-row" style={{ height }}>
      <Navigation />
      {mounted && <Mouse />}
      {children}
    </div>
  );
}

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <DefaultSeo {...nextSeoConfig} />
      <MouseState>
        <RootLayout>
          <AnimatePresence initial={false} mode="wait">
            <Component key={router.route} {...pageProps} />
          </AnimatePresence>
        </RootLayout>
      </MouseState>
      <Analytics />
    </>
  );
}
