import Content from '~/components/Content';
import ExternalLink from '~/components/ExternalLink';

export default function Contact() {
  return (
    <Content.Layout>
      <Content.Section title="Business Inquiries" index={0}>
        <div>
          <p>Contact: Yara Bramasta</p>
          <ExternalLink href="mailto:bramasta.yb@gmail.com">
            bramasta.yb@gmail.com
          </ExternalLink>
        </div>
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
          <ExternalLink href="https://github.com/yarabramasta">
            Github
          </ExternalLink>
          <span>/</span>
          <ExternalLink href="https://linkedin.com/in/yarabramasta">
            Linked
          </ExternalLink>
          <span>/</span>
          <ExternalLink href="https://twitter.com/yarabram">
            Twitter
          </ExternalLink>
        </ul>
      </Content.Section>
    </Content.Layout>
  );
}
