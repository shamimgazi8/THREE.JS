// tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}", // if using src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate"), // if shadcn used animations
  ],
};

export default config;
