/** @type {import("prettier").Config} */
const config = {
  // eslint-disable-next-line no-undef
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  arrowParens: 'avoid',
  printWidth: 80,
  singleQuote: true,
  semi: true,
  trailingComma: 'none'
};

// eslint-disable-next-line no-undef
module.exports = config;
