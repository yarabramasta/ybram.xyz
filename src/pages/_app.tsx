import { Analytics } from '@vercel/analytics/react';
import { getAnalytics } from 'firebase/analytics';
import { getPerformance } from 'firebase/performance';
import { AnimatePresence } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import { type AppProps } from 'next/app';
import { type PropsWithChildren } from 'react';
import { useWindowSize } from 'usehooks-ts';

import Mouse, { MouseState, useMouseState } from '~/components/Mouse';
import Navigation from '~/components/Navigation';
import { app } from '~/lib/firebase';
import nextSeoConfig from '~/next-seo.config';
import '../globals.css';

function RootLayout({ children }: PropsWithChildren) {
  const { height } = useWindowSize();
  const { mounted, x, y } = useMouseState();

  return (
    <div
      className="flex flex-col-reverse md:flex-row"
      style={{ height }}
      onMouseMove={evt => {
        x.set(evt.clientX - 16);
        y.set(evt.clientY - 8);
      }}
    >
      <Navigation />
      {mounted && <Mouse />}
      {children}
    </div>
  );
}

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
      <MouseState>
        <RootLayout>
          <AnimatePresence initial={router.pathname === '/'} mode="wait">
            <Component key={router.route} {...pageProps} />
          </AnimatePresence>
        </RootLayout>
      </MouseState>
      <Analytics />
    </>
  );
}
