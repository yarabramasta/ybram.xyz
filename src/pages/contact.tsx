import Link from 'next/link';
import { type PropsWithChildren } from 'react';

import Content from '~/components/Content';
import Layout from '~/components/Layout';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ExternalLink({
  children,
  ...rest
}: PropsWithChildren<{ href: string; rel?: string; target?: string }>) {
  return (
    <div className="group relative max-w-fit overflow-hidden border-b border-b-neutral-50/20">
      <Link
        {...rest}
        className="text-xs before:absolute before:bottom-0 before:left-0 before:z-10 before:h-[1px] before:w-full before:-translate-x-full before:bg-slate-50/80 before:transition before:duration-300 before:will-change-transform before:content-[''] group-hover:before:translate-x-0"
      >
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
        {children}
      </Link>
    </div>
  );
}

export default function Contact() {
  return (
    <Layout>
      <Content.Section title="Business Inquiries" index={0}>
        <p>Contact: Yara Bramasta</p>
        <ExternalLink href="mailto:bramasta.yb@gmail.com">
          bramasta.yb@gmail.com
        </ExternalLink>
      </Content.Section>
      <Content.Section title="Address" index={1}>
        <ul className="[&_li]:text-xs [&_li]:opacity-90">
          <li>Gg. Bombay 11/02, Pandan Landung, Wagir</li>
          <li>Malang, East Java, Indonesia</li>
          <li>65158</li>
        </ul>
      </Content.Section>
      <Content.Section title="Social" index={2}>
        <ul className="flex flex-row gap-2 opacity-90">
          <ExternalLink
            href="https://github.com/yarabramasta"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </ExternalLink>
          <span>/</span>
          <ExternalLink
            href="https://linkedin.com/in/yarabramasta"
            rel="noopener noreferrer"
            target="_blank"
          >
            Linked
          </ExternalLink>
          <span>/</span>
          <ExternalLink
            href="https://twitter.com/yarabram"
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter
          </ExternalLink>
        </ul>
      </Content.Section>
    </Layout>
  );
}
