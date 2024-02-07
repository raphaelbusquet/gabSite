import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050608',
        primary: "#7A40FF",
        secondary: "#240767",
        accent: "#FF554C",
        text:  "#EEEDEF",
        textsecondary: "#6B6B6B",
        gradient: "#1B0354", 
        servicebox: "#0F0F0F"
      },
    },
  },
  plugins: [],
};
export default config;
