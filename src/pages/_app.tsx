import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import { type AppProps } from 'next/app';
import { type PropsWithChildren } from 'react';

import Navigation from '~/components/Navigation';
import XCursor, { XCursorState, useXCursor } from '~/components/XCursor';
import nextSeoConfig from '~/next-seo.config';
import '../globals.css';

function RootLayout({ children }: PropsWithChildren) {
  const { onMouseMove, render } = useXCursor();

  return (
    <div
      onMouseMove={evt => onMouseMove(evt)}
      className="safe-h-screen flex flex-col-reverse md:flex-row"
    >
      <Navigation />
      {render && <XCursor />}
      {children}
    </div>
  );
}

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <DefaultSeo {...nextSeoConfig} />
      <XCursorState>
        <RootLayout>
          <AnimatePresence initial={false} mode="wait">
            <Component key={router.route} {...pageProps} />
          </AnimatePresence>
        </RootLayout>
      </XCursorState>
      <Analytics />
    </>
  );
}
