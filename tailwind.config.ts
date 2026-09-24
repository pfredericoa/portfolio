import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#000000",
        cardBg: "#27196C",
        accentPrimary: "#392378",
        lilacGlow: "#BAABFF",
      },
    },
  },
  plugins: [],
};
export default config;