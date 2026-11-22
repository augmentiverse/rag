import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#193B55",
        muted: "#60798A",
        paper: "#f5f8fa",
        line: "#d8e3eb",
        spruce: "#2D5876",
        moss: "#3D7497",
        clay: "#977847",
        sky: "#3D7497"
      },
      boxShadow: {
        soft: "0 18px 48px rgba(25, 59, 85, 0.10)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "Consolas", "monospace"]
      }
    },
  },
  plugins: [],
};

export default config;
