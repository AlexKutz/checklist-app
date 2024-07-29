/** @type {import("prettier").Config} */
module.exports = {
  semi: false,
  tabWidth: 2,
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: false,
  bracketSameLine: false,
  plugins: ['prettier-plugin-tailwindcss'],
}
