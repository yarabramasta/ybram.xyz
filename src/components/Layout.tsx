import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useRef, type PropsWithChildren } from 'react';
import { useOnClickOutside, useWindowSize } from 'usehooks-ts';

import { useXCursor } from './XCursor';

export default function Layout({ children }: PropsWithChildren) {
  const { height, width } = useWindowSize();
  const container = useRef<HTMLDivElement>(null);
  const { notifier, render: xcursor } = useXCursor();
  const router = useRouter();

  useOnClickOutside(container, () => {
    if (width > 768) {
      if (xcursor) {
        notifier(false);
        void router.push('/');
      }
    }
  });

  useEffect(() => {
    if (width < 768) notifier(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  return (
    <motion.div
      ref={container}
      id="content:layout"
      className="w-full flex-1 overflow-y-scroll md:max-w-screen-sm"
      style={{ height: width > 768 ? height : height - 2.5 * 16 }}
    >
      {children}
    </motion.div>
  );
}
