/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Wix Madefor Text"',
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          ...require('tailwindcss/defaultTheme').fontFamily.sans
        ],
        serif: [
          '"Stardom"',
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          ...require('tailwindcss/defaultTheme').fontFamily.sans
        ]
      }
    }
  },
  plugins: []
};

module.exports = config;
