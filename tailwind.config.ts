import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        glow: "0 0px 15px rgba(255, 20, 189, 0.35), 0 0px 65px rgba(255, 20, 189, 0.2), inset 0 0px 15px rgba(255, 20, 189, 0.35), inset 0 0px 65px rgba(255, 20, 189, 0.2)",
      },
      colors: {
        "neon-pink": "#ff14bd",
        "neon-pink-dark": "#800a5f",
        "neon-purple": "#3a2870",
        "neon-purple-dark": "#1d1438",
      },
    },
  },
  plugins: [],
};
export default config;
