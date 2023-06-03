import { motion, type Variants } from 'framer-motion';
import { useRef, type PropsWithChildren } from 'react';
import { useOnClickOutside, useWindowSize } from 'usehooks-ts';

import useContent from './useContent';

function Container({ children }: PropsWithChildren) {
  const { width } = useWindowSize();
  const { navigate } = useContent();
  const container = useRef<HTMLDivElement>(null);

  useOnClickOutside(container, evt => {
    if (width > 768) {
      const attr = (evt.target as HTMLElement).getAttribute(
        'data-outside-content'
      );

      const isOutside = parseInt(attr ?? '0') === 1;
      if (isOutside) {
        navigate('default');
      }
    }
  });

  return (
    <div
      ref={container}
      className="absolute left-0 top-0 h-full w-full max-w-xs cursor-default space-y-6 overflow-y-scroll p-8 text-xs md:py-16"
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
      className="w-full space-y-2 border-t border-t-neutral-50/20 pt-2 [&_p]:leading-tight"
    >
      <h3>{title}</h3>
      {children}
    </motion.section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <div className="flex max-h-60 flex-row gap-6 [&_ul_li]:before:mr-1 [&_ul_li]:before:content-['-']">
      <ul className="columns-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
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
