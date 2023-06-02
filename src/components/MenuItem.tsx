import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { useWindowSize } from 'usehooks-ts';

export default function MenuItem({
  max = false,
  border = true,
  children
}: PropsWithChildren<{ max?: boolean; border?: boolean }>) {
  const { width } = useWindowSize();

  const item_container_class = clsx(
    'relative w-fit overflow-hidden border-t-0 border-t-neutral-50/10 pt-1 md:w-full md:border-t',
    !!max && 'flex-0 md:flex-1',
    !max && 'group',
    !border && 'border-t-0'
  );

  const item_class = clsx(
    'overflow-x-hidden',
    width > 768 &&
      !!border &&
      'before:absolute before:left-0 before:top-0 before:z-10 before:h-[1px] before:w-full before:-translate-x-full before:bg-slate-50/80 before:transition before:duration-300 before:will-change-transform before:content-[""] group-hover:before:translate-x-0'
  );

  if (max) {
    return (
      <div className={item_container_class}>
        <a href="" className="group">
          <li className={item_class}>{children}</li>
        </a>
      </div>
    );
  }

  return (
    <a href="" className={item_container_class}>
      <li className={item_class}>{children}</li>
    </a>
  );
}
