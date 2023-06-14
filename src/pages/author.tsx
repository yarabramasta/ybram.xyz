import Content from '~/components/Content';

const experiences: Record<string, Array<string>> = {
  '2021': ['Software Developer Intern at PT. Retgoo Sentris Informa'],
  '2022': ['Mobile App Developer at PUSIM Unmer (Present)'],
  '2023': ['UI/UX Mentor for Alzam Creative Project (Present)']
};

const skills = [
  'Node.js',
  'Deno',
  'Next.js',
  'React',
  'Vite',
  'Tailwind',
  'Flutter',
  'Pothos-Yoga',
  'Express',
  'Prisma',
  'Firebase',
  'Git',
  'Docker',
  'Planetscale',
  'Figma'
];

export default function Author() {
  return (
    <Content.Layout>
      <Content.Section title="Background" index={0}>
        <p>
          Hello, my name is Yara Bramasta, but I prefer to be called
          &apos;Bram&apos;. I am a software developer graduate from SMKN 4
          Malang (State Vocational High School 4 of Malang). Currently, I am
          pursuing a Bachelor&apos;s Degree in System Information at the
          University of Merdeka Malang (Unmer).
        </p>
      </Content.Section>
      {/* <Content.Section title="Links" index={1}>
        <ul className="flex flex-row gap-2 opacity-90">
          <ExternalLink href="/resume">Resume</ExternalLink>
        </ul>
      </Content.Section> */}
      <Content.Section title="Experiences" index={1}>
        <div className="space-y-2">
          {Object.keys(experiences)
            .reverse()
            .map(k => (
              <div className="space-y-1" key={`experiences:${k}`}>
                <h3 className="text-xs">{k}</h3>
                <div className="pl-2">
                  <Content.List
                    items={experiences[k] as string[]}
                    column={false}
                  />
                </div>
              </div>
            ))}
        </div>
      </Content.Section>
      <Content.Section title="Skills" index={2}>
        <Content.List items={skills} className="columns-3" column={false} />
      </Content.Section>
    </Content.Layout>
  );
}
