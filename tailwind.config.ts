import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/CONTRIBUTOR/**/*.{js,ts,jsx,tsx,mdx,json}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ED7D31",
        secondary: "#6C5F5B",
        third: "#4F4A45",
        hitam: "#193153",
        abu: "#CECECE",
      },
      backgroundColor: {
        primary: "#ED7D31",
        secondary: "#6C5F5B",
        third: "#4F4A45",
        hitam: "#193153",
        abu: "#CECECE",
      },
      boxShadow: {
        primary: "0px 7px 0px #ED7D31",
        secondary: "0px 7px 0px #6c5f5b",
      },
    },
  },
  plugins: [],
};
export default config;
