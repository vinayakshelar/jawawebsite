import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NeueHaasDisplayLight: ["NeueHaasDisplayLight"],
        SourceSerifProRegular: ["SourceSerifProRegular"],
        // body: ['New Hero', 'sans-serif'],
        // bodyMedium: ['New Hero Medium', 'sans-serif'],
        // lufga: ['Lufga', 'sans-serif'],
        // oscar: ['FHOscar', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
