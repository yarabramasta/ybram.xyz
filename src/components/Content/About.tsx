import { Widget } from './Widget';

const services = [
  'Handcrafted design',
  'Static or fullstack',
  'Deployment & SEO',
  'Mobile app'
];

const tech_stack: Record<string, Array<string>> = {
  Frontend: ['React.js', 'Next.js', 'Flutter'],
  Backend: ['GraphQL', 'Firebase', 'RESTful'],
  Platform: ['Vercel', 'GCP', ''],
  Design: ['Figma', 'Rive', '']
};

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
      <Widget.Section id="tech-stack" title="Tech Stack" index={2}>
        <div className="columns-4">
          {Object.keys(tech_stack).map(k => (
            <div className="space-y-1" key={`tech-stack:${k}`}>
              <h3>{k}</h3>
              <Widget.List items={tech_stack[k]} column={false} />
            </div>
          ))}
        </div>
      </Widget.Section>
    </Widget.Container>
  );
}
