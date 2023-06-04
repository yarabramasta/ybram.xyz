import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useRef, type PropsWithChildren } from 'react';
import { useOnClickOutside, useWindowSize } from 'usehooks-ts';

export default function Layout({
  children,
  max = false
}: PropsWithChildren<{ max?: boolean }>) {
  const { width } = useWindowSize();
  const container = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useOnClickOutside(container, ({ target }) => {
    if (width > 768) {
      if ((target as HTMLElement).tagName !== 'LI') {
        void router.replace('/');
      }
    }
  });

  return (
    <motion.div
      ref={container}
      className={clsx(
        'w-full flex-1 space-y-8 overflow-y-scroll p-8 md:pt-16',
        'cursor-default',
        !max && 'md:max-w-sm',
        width > 768 && !max ? 'h-fit' : 'h-full'
      )}
    >
      {children}
    </motion.div>
  );
}
