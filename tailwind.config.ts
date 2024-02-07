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
        primary: "#2A7FFF",
        secondary: "#c2dbff",
        lightGrey: "#f2f4f6",
      },
    },
    screens: {
      hd: "1366px",
      lineMax: "1600px",
      fhd: "1920px",
    },
    fontFamily: {
      body: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
