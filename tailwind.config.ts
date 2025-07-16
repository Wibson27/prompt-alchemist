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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#22d3ee",
        secondary: "var(--secondary)",

        'primary-accent': 'var(--primary-accent)',
        "foreground-accent": "var(--foreground-accent)",
        "hero-background": "var(--hero-background)",

      },
      boxShadow: {
        'neon': '0px 4px 25px rgba(91, 255, 236, 1), 4px 0px 25px rgba(89, 252, 233, 1)',

      },
      dropShadow: {
        'neon': '0px 0px 70px rgba(2, 208, 210, 1), 0px 0px 13.3px rgba(89, 252, 233, 1), 0px 2px 82.2px rgba(89, 252, 233, 1)',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(90deg, #23DBFE 0%, #DF20FF 100%)',
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
