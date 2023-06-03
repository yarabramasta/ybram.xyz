import type { AnchorHTMLAttributes } from 'react';
import { Widget } from './Widget';

function Link(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <div className="group relative max-w-fit overflow-hidden border-b border-b-neutral-50/20">
      <a
        {...props}
        className="before:absolute before:bottom-0 before:left-0 before:z-10 before:h-[1px] before:w-full before:-translate-x-full before:bg-slate-50/80 before:transition before:duration-300 before:will-change-transform before:content-[''] group-hover:before:translate-x-0"
      >
        {props.children}
      </a>
    </div>
  );
}

export default function Contact() {
  return (
    <Widget.Container>
      <Widget.Section id="business" title="Business Inquiries" index={0}>
        <div>
          <p>Contact: Yara Bramasta</p>
          <Link href="mailto:bramasta.yb@gmail.com">bramasta.yb@gmail.com</Link>
        </div>
      </Widget.Section>
      <Widget.Section id="address" title="Address" index={1}>
        <ul className="[&_li]:opacity-90">
          <li>Gg. Bombay 11/02, Pandan Landung, Wagir</li>
          <li>Malang, East Java, Indonesia</li>
          <li>65158</li>
        </ul>
      </Widget.Section>
      <Widget.Section id="social" title="Social" index={2}>
        <ul className="flex flex-row gap-2 opacity-90">
          <Link
            href="https://github.com/yarabramasta"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </Link>
          <span>/</span>
          <Link
            href="https://linkedin.com/in/yarabramasta"
            rel="noopener noreferrer"
            target="_blank"
          >
            Linked
          </Link>
          <span>/</span>
          <Link
            href="https://twitter.com/yarabram"
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter
          </Link>
        </ul>
      </Widget.Section>
    </Widget.Container>
  );
}
