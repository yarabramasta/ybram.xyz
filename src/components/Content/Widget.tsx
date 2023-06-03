import { motion, type Variants } from 'framer-motion';
import { useRef, type PropsWithChildren } from 'react';
import { useOnClickOutside, useWindowSize } from 'usehooks-ts';

import clsx from 'clsx';
import useContent from './useContent';

function Container({ children }: PropsWithChildren) {
  const { width } = useWindowSize();
  const { navigate } = useContent();
  const container = useRef<HTMLDivElement>(null);

  useOnClickOutside(container, evt => {
    if (width > 768) {
      const target = evt.target as HTMLElement;
      const attr = target.getAttribute('data-outside-content');
      const isOutside = parseInt(attr ?? '0') === 1;

      if (isOutside) {
        navigate('default');
      }
    }
  });

  return (
    <div
      ref={container}
      className="absolute left-0 top-0 h-full w-full max-w-screen-md cursor-default space-y-6 overflow-y-scroll p-8 text-xs md:max-w-sm md:py-16"
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

export default function Section({
  id,
  title,
  children,
  index
}: PropsWithChildren<{ id: string; title: string; index: number }>) {
  return (
    <motion.section
      id={id}
      variants={section_vars}
      custom={index}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full space-y-2 border-t border-t-neutral-50/20 pt-1 [&_p]:leading-tight [&_p]:opacity-90"
    >
      <h3 className="font-medium">{title}</h3>
      {children}
    </motion.section>
  );
}

function List({ items, column = true }: { items: string[]; column?: boolean }) {
  return (
    <div className={clsx('flex flex-row gap-6')}>
      <ul className={clsx(column && 'columns-2 gap-6')}>
        {items.map((item, index) => (
          <li
            key={index}
            className={clsx(
              'opacity-90 before:mr-1',
              item.length > 0 ? 'before:content-["-"]' : 'before:content-[""]'
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export const Widget = {
  Container,
  Section,
  List
};
