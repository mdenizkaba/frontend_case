import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        hero: {
          '0%': { transform: 'translateY(-35px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(-35px)' },
        },
        horizontal: {
          '0%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '100%': { transform: 'translateX(-5px)' },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'hero': 'hero 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'horizontal': 'horizontal 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      boxShadow: {
        '2xl-white': '0 25px 50px -12px rgba(255, 255, 255, 0.15)',
        'dark': '0 0px 20px -12px rgba(0, 0, 0, 0.7)',
      },
      
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
};
export default config;
