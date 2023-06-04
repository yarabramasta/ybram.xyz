import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { type PropsWithChildren } from 'react';

function NavItem({
  href,
  max = false,
  children
}: PropsWithChildren<{ href: string; max?: boolean }>) {
  const router = useRouter();

  return (
    <div className={clsx(max && 'md:flex-1', 'w-full overflow-hidden')}>
      <Link
        href={router.pathname === href ? '/' : href}
        className={clsx('group relative')}
      >
        <span className="absolute left-0 top-0 z-10 h-[1px] w-full -translate-x-full bg-neutral-50/80 transition duration-300 will-change-transform group-hover:translate-x-0" />
        <li
          className={clsx(
            'border-t-0 border-t-neutral-50/20 pt-1 md:border-t',
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
    <nav className="h-10 w-full border-t border-t-neutral-50/20 md:h-full md:max-w-xs md:border-t-0 [&_ul_li]:text-xs">
      <ul className="flex h-full w-full flex-row items-center justify-between gap-4 px-8 py-2 md:flex-col md:p-16">
        <NavItem href="/author">Author</NavItem>
        <NavItem href="/about" max>
          About
        </NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </ul>
    </nav>
  );
}
