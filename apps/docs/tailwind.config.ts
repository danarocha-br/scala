import type { Config } from "tailwindcss";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { scalaPreset } = require("../../packages/react/dist");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/react/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [scalaPreset],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
