import Link from 'next/link';
import { type PropsWithChildren } from 'react';

export default function ExternalLink({
  children,
  href,
  blank = true
}: PropsWithChildren<{ href: string; blank?: boolean }>) {
  return (
    <div className="group relative max-w-fit overflow-hidden border-b border-b-neutral-50/20">
      <Link
        {...(blank
          ? { rel: 'noopener noreferrer', target: '_blank', href }
          : { href })}
        className="text-xs before:absolute before:bottom-0 before:left-0 before:z-10 before:h-[1px] before:w-full before:-translate-x-full before:bg-slate-50/80 before:transition before:duration-300 before:will-change-transform before:content-[''] group-hover:before:translate-x-0"
      >
        {children}
      </Link>
    </div>
  );
}
