import clsx from 'clsx';
import type { MouseEventHandler, PropsWithChildren } from 'react';
import { useWindowSize } from 'usehooks-ts';

import { type ContentType } from './Content/store';
import useContent from './Content/useContent';

export default function MenuItem({
  max = false,
  border = true,
  to,
  children
}: PropsWithChildren<{
  max?: boolean;
  border?: boolean;
  to: ContentType;
}>) {
  const { width } = useWindowSize();
  const { navigate, current } = useContent();

  const item_container_class = clsx(
    'relative w-fit overflow-hidden border-t-0 border-t-neutral-50/20 pt-1 md:w-full md:border-t',
    !!max && 'flex-0 md:flex-1',
    !max && 'group',
    !border && 'border-t-0'
  );

  const item_class = clsx(
    'overflow-x-hidden after:ml-1',
    width > 768 &&
      !!border &&
      'before:absolute before:left-0 before:top-0 before:z-10 before:h-[1px] before:w-full before:-translate-x-full before:bg-slate-50/80 before:transition before:duration-300 before:will-change-transform before:content-[""] group-hover:before:translate-x-0',
    current === to ? 'after:content-["-"]' : 'after:content-["+"]'
  );

  const handleClick: MouseEventHandler = evt => {
    evt.preventDefault();
    navigate(current === to ? 'default' : to);
  };

  if (max) {
    return (
      <div className={item_container_class} data-outside-content="1">
        <a href="" id={to} className="group" onClick={handleClick}>
          <li id={to} className={item_class}>
            {children}
          </li>
        </a>
      </div>
    );
  }

  return (
    <a href="" id={to} className={item_container_class} onClick={handleClick}>
      <li id={to} className={item_class}>
        {children}
      </li>
    </a>
  );
}
