import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import { type AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { type MouseEventHandler, type PropsWithChildren } from 'react';
import { useWindowSize } from 'usehooks-ts';

import Mouse, { MouseState, useMouseState } from '~/components/Mouse';
import Navigation from '~/components/Navigation';
import nextSeoConfig from '~/next-seo.config';
import '../globals.css';

function RootLayout({ children }: PropsWithChildren) {
  const { height } = useWindowSize();
  const { notifier, mounted, x, y } = useMouseState();
  const router = useRouter();

  const onMouseMove: MouseEventHandler = evt => {
    if (router.pathname !== '/') {
      x.set(evt.clientX - 16);
      y.set(evt.clientY - 8);

      notifier(true);
    } else {
      notifier(false);
    }
  };

  return (
    <div
      className="flex flex-col-reverse md:flex-row"
      style={{ height }}
      onMouseMove={onMouseMove}
    >
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
