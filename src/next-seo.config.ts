import { type DefaultSeoProps } from 'next-seo';

const NAME = 'Yara Bramasta';
const BASE_URL = 'https://ybram.xyz';
const KEYWORDS =
  'ybram,yarabramasta,bramasta,ybram xyz,ybram.xyz,personal website,personal portfolio,ui/ux,design,designer,website,web developer,frontend engineer,mobile app developer,mobile,github,github yarabramasta,vite,reactjs,vercel,linkedin yarabramasta,twitter yarabramasta,linkedin bram,twitter bram,instagram _ybr';
const DESCRIPTION =
  "Welcome to Yara Bramasta's website. With a strong emphasis on delivering quality results, Bram offers innovative and user-centric solutions to assist clients in achieving their goals. Specializing primarily in website development, the entire process from planning and design to development and production is covered. Additionally, Bram provides support for mobile app development.";

export default {
  title: NAME,
  description: DESCRIPTION,
  canonical: BASE_URL,
  openGraph: {
    type: 'website',
    title: NAME,
    siteName: NAME,
    description: DESCRIPTION,
    locale: 'en'
  },
  twitter: {
    cardType: 'summary_large_image',
    site: BASE_URL,
    handle: '@yarabramasta'
  },
  robotsProps: {
    maxSnippet: -1,
    maxVideoPreview: -1,
    maxImagePreview: 'large'
  },
  additionalMetaTags: [
    { name: 'author', content: 'Yara Bramasta' },
    { name: 'me', content: 'bramasta.yb@gmail.com' },
    { name: 'color-scheme', content: 'dark' },
    { name: 'keywords', content: KEYWORDS },
    {
      name: 'viewport',
      content: 'initial-scale=1, viewport-fit=cover, user-scalable=no'
    },
    {
      name: 'google-site-verification',
      content: 'ZI5hf8_xKw9w7aQ7QN_N6tEx0x-6W44QimkMO67CX1Q'
    }
  ],
  additionalLinkTags: [
    { rel: 'author', href: 'https://github.com/yarabramasta' },
    { rel: 'icon', href: '/apple-icon.png', type: 'image/png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    {
      rel: 'apple-touch-icon',
      href: '/apple-icon.png',
      type: 'image/png',
      sizes: '180x180'
    }
  ]
} satisfies DefaultSeoProps;
