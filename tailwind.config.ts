import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        muted: "#64748b",
        paper: "#f8fafc",
        line: "#d8e1ee",
        spruce: "#1d4ed8",
        moss: "#2563eb",
        clay: "#b45309",
        sky: "#2563eb"
      },
      boxShadow: {
        soft: "0 18px 48px rgba(15, 23, 42, 0.10)"
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
