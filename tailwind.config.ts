import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F172A",
          50: "#F1F4F9",
          100: "#E2E8F2",
          200: "#C3CEE0",
          300: "#93A6C4",
          400: "#5D74A1",
          500: "#3B4F7D",
          600: "#293A61",
          700: "#1C2842",
          800: "#141D30",
          900: "#0F172A",
          950: "#080D18",
        },
        freight: {
          DEFAULT: "#2563EB",
          50: "#EEF3FE",
          100: "#DAE6FD",
          200: "#B5CDFB",
          300: "#8FB3F8",
          400: "#5D91F3",
          500: "#2563EB",
          600: "#1D4FC4",
          700: "#173D97",
          800: "#122C6E",
          900: "#0C1D49",
        },
        emerald: {
          DEFAULT: "#16A34A",
          50: "#EAFBF1",
          100: "#CFF5DE",
          200: "#9FEBBE",
          300: "#65D896",
          400: "#33C176",
          500: "#16A34A",
          600: "#11813B",
          700: "#0E652F",
          800: "#0B4C24",
          900: "#08381B",
        },
        accent: {
          DEFAULT: "#F97316",
          50: "#FFF3EA",
          100: "#FFE2C7",
          200: "#FFC48C",
          300: "#FFA34F",
          400: "#FC8A28",
          500: "#F97316",
          600: "#D8590A",
          700: "#AC4508",
          800: "#823508",
          900: "#5C2707",
        },
        charcoal: {
          DEFAULT: "#1C1F26",
          light: "#4B5162",
          muted: "#6B7284",
        },
        slate: {
          canvas: "#F5F7FA",
          panel: "#EEF1F6",
          line: "#E2E6EE",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",
        "hero-radial":
          "radial-gradient(circle at 15% 10%, rgba(22,163,74,0.10), transparent 45%), radial-gradient(circle at 85% 0%, rgba(249,115,22,0.08), transparent 40%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(15, 23, 42, 0.06)",
        card: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -8px rgba(15,23,42,0.12)",
        "card-hover":
          "0 1px 2px rgba(15,23,42,0.06), 0 16px 40px -12px rgba(15,23,42,0.22)",
        glow: "0 1px 2px rgba(15,23,42,0.05), 0 10px 28px -8px rgba(15,23,42,0.18)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      keyframes: {
        "dash-flow": {
          to: { strokeDashoffset: "-200" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "0.4", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "dash-flow": "dash-flow 8s linear infinite",
        "pulse-dot": "pulse-dot 2.2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
