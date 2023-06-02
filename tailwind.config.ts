import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['var(--font-clash-grotesk)', ...fontFamily.sans],
        // serif: ['var(--font-stardom)', ...fontFamily.serif]
        // brand: ['var(--font-brand)', ...fontFamily.sans]
      },
    }
  },
  plugins: []
} satisfies Config;