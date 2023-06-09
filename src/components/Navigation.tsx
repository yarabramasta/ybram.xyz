import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { type PropsWithChildren } from 'react';
import { useWindowSize } from 'usehooks-ts';
import { useMouseState } from './Mouse';

function NavItem({
  href,
  max = false,
  children
}: PropsWithChildren<{ href: string; max?: boolean }>) {
  const router = useRouter();
  const { width } = useWindowSize();
  const { notifier } = useMouseState();

  return (
    <div
      className={clsx(max && 'md:flex-1', 'w-fit overflow-hidden md:w-full')}
    >
      <Link
        onMouseLeave={() => notifier(router.pathname !== '/')}
        onMouseEnter={() => notifier(false)}
        href={router.pathname === href ? '/' : href}
        className="group relative"
      >
        {width > 768 && (
          <span className="absolute left-0 top-0 z-10 h-[1px] w-full -translate-x-full bg-neutral-50/80 transition duration-300 will-change-transform group-hover:translate-x-0" />
        )}
        <li
          className={clsx(
            'border-t-0 border-t-neutral-50/20 pb-4 pt-1 md:border-t',
            router.pathname === href
              ? "after:content-['-']"
              : "after:content-['+']",
            'after:ml-1'
          )}
        >
          {children}
        </li>
      </Link>
    </div>
  );
}

export default function Navigation() {
  return (
    <nav className="h-14 w-full border-t border-t-neutral-50/20 md:h-full md:max-w-xs md:border-t-0 [&_ul_li]:text-xs">
      <ul className="flex h-full w-full flex-row items-center justify-between px-8 py-2 md:flex-col md:p-16">
        <NavItem href="/author">Author</NavItem>
        <NavItem href="/about" max>
          About
        </NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </ul>
    </nav>
  );
}
