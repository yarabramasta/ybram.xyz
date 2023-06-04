import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useRef, type PropsWithChildren } from 'react';
import { useOnClickOutside, useWindowSize } from 'usehooks-ts';
import { useMouseState } from './Mouse';

export default function Layout({
  children,
  max = false
}: PropsWithChildren<{ max?: boolean }>) {
  const { width } = useWindowSize();
  const container = useRef(null);
  const router = useRouter();
  const { notifier } = useMouseState();

  useOnClickOutside(container, ({ target }) => {
    if (width > 768) {
      if ((target as HTMLElement).tagName !== 'LI') {
        notifier(false);
        void router.push('/');
      }
    }
  });

  return (
    <div
      ref={container}
      onMouseLeave={() => notifier(router.pathname !== '/')}
      onMouseEnter={() => notifier(false)}
      className={clsx(
        'w-full flex-1 space-y-8 overflow-y-scroll p-8 md:pt-16',
        'visible relative cursor-default',
        !max && 'md:max-w-sm',
        width > 768 && !max ? 'h-fit' : 'h-full'
      )}
    >
      {children}
    </div>
  );
}
