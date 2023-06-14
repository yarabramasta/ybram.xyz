import clsx from 'clsx';
import { motion, type Variants } from 'framer-motion';
import { useRouter } from 'next/router';
import { useRef, type PropsWithChildren } from 'react';
import { useOnClickOutside, useWindowSize } from 'usehooks-ts';

import { useMouseState } from './Mouse';

function Layout({
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

const section_vars: Variants = {
  initial: { y: -5, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      delay: i * 0.075,
      duration: 0.3,
      mass: 2,
      bounce: 0,
      damping: 10,
      stiffness: 90
    }
  }),
  exit: (i: number) => ({ y: -5, opacity: 0, transition: { delay: i * 0.025 } })
};

function Section({
  children,
  index,
  title
}: PropsWithChildren<{ index: number; title: string }>) {
  return (
    <motion.section
      variants={section_vars}
      custom={index}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full space-y-2 border-t border-t-neutral-50/20 pt-1 [&_p]:text-xs [&_p]:leading-tight [&_p]:opacity-90"
    >
      <h3 className="text-xs font-medium">{title}</h3>
      {children}
    </motion.section>
  );
}

function List({ items, column = true }: { items: string[]; column?: boolean }) {
  return (
    <div className="flex flex-row gap-6">
      <ul className={clsx(column && 'columns-2 gap-6')}>
        {items.map((item, index) => (
          <li
            key={index}
            className={clsx(
              'text-xs opacity-90 before:mr-1',
              item.length > 1 ? 'before:content-["-"]' : 'before:content-[""]'
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

const Content = {
  Section,
  List,
  Layout
};

export default Content;
