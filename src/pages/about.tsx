import Content from '~/components/Content';
import Layout from '~/components/Layout';

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
    <Layout>
      <Content.Section index={0} title="Introduction">
        <p>
          Hello, welcome to my little website, which I&apos;ve created to
          showcase my experiences throughout the years as a designer-developer.
          With a focus on delivering quality results, I offer my expertise as a
          designer and developer to help you achieve your goals with innovative
          and user-centric solutions.
        </p>
      </Content.Section>
      <Content.Section index={1} title="Specialties">
        <p>
          I primarily specialize in website development, covering the entire
          process from planning and design to development and production.
          However, I also offer support for mobile app development as an
          additional service.
        </p>
      </Content.Section>
      <Content.Section index={2} title="Services">
        <Content.List items={services} />
      </Content.Section>
      <Content.Section index={3} title="Tech Stack">
        <div className="columns-4">
          {Object.keys(tech_stack).map(k => (
            <div className="space-y-1" key={`tech-stack:${k}`}>
              <h3 className="text-xs">{k}</h3>
              <Content.List items={tech_stack[k] as string[]} column={false} />
            </div>
          ))}
        </div>
      </Content.Section>
    </Layout>
  );
}
