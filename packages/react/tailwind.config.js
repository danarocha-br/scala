/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{ts,tsx}', '../../apps/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  presets: [require('./src/styles/tailwindPreset')],
  plugins: [],
  corePlugins: {
    // preflight: false,
  },
};
