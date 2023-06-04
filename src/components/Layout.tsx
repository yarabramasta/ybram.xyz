import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useEffect, useRef, type PropsWithChildren } from 'react';
import { useHover, useOnClickOutside, useWindowSize } from 'usehooks-ts';
import { useMouseState } from './Mouse';

export default function Layout({
  children,
  max = false
}: PropsWithChildren<{ max?: boolean }>) {
  const { width } = useWindowSize();
  const container = useRef(null);
  const router = useRouter();
  const { notifier, x, y } = useMouseState();

  useOnClickOutside(container, ({ target }) => {
    if (width > 768) {
      if ((target as HTMLElement).tagName !== 'LI') {
        notifier(false);
        void router.push('/');
      }
    }
  });

  const hovered = useHover(container);
  const onMouseMove = (evt: MouseEvent) => {
    if (router.pathname !== '/') {
      x.set(evt.clientX - 16);
      y.set(evt.clientY - 8);
      notifier(!hovered || (evt.target as HTMLElement).tagName !== 'LI');
    } else {
      notifier(false);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={container}
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
