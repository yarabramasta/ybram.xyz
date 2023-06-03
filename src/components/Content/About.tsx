import { Widget } from './Widget';

const services = [
  'Handcrafted design',
  'Static or fullstack',
  'Deployment & SEO',
  'Mobile app'
];

export default function About() {
  return (
    <Widget.Container>
      <Widget.Section id="introduction" title="Introduction" index={0}>
        <p>
          Hello, welcome to my little website, which I&apos;ve created to
          showcase my experiences throughout the years as a designer-developer.
          With a focus on delivering quality results, I offer my expertise as a
          designer and developer to help you achieve your goals with innovative
          and user-centric solutions.
        </p>
      </Widget.Section>
      <Widget.Section id="specialties" title="Specialties" index={1}>
        <p>
          I primarily specialize in website development, covering the entire
          process from planning and design to development and production.
          However, I also offer support for mobile app development as an
          additional service.
        </p>
      </Widget.Section>
      <Widget.Section id="services" title="Services" index={2}>
        <Widget.List items={services} />
      </Widget.Section>
    </Widget.Container>
  );
}
