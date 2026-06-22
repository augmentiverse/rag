import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#121417",
        muted: "#5d6673",
        paper: "#f7f8f6",
        line: "#d9ded8",
        spruce: "#0f3d3e",
        moss: "#657a3f",
        clay: "#a65335",
        sky: "#2d6f9f"
      },
      boxShadow: {
        soft: "0 18px 48px rgba(18, 20, 23, 0.10)"
      }
    },
  },
  plugins: [],
};

export default config;
