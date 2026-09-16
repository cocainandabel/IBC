import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fortress: {
          base: "#070B14",
          panel: "#0E1524",
          surface: "#141C2E",
          border: "#1F2A40",
          text: "#E6EAF2",
          muted: "#8A94A8",
          gold: "#D4A64A",
          blue: "#4F8BFF",
          red: "#E5484D",
        },
        binance: {
          yellow: "#F0B90B",
          charcoal: "#0B0E11",
          slate: "#181A20",
          panel: "#1E2329",
          text: "#EAECEF",
          muted: "#848E9C",
          border: "#2B3139",
          gaming: "#8B5CF6",
          sports: "#22C55E",
          devconnect: "#3B82F6",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "fortress-card": "0 10px 30px rgba(0, 0, 0, 0.35)",
        "fortress-hover":
          "inset 0 0 0 1px rgba(212,166,74,0.32), 0 10px 32px rgba(0, 0, 0, 0.45)",
        card: "0 4px 24px rgba(0, 0, 0, 0.25)",
        "card-hover":
          "inset 0 0 0 1px rgba(240, 185, 11, 0.28), 0 8px 30px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "fortress-grid":
          "linear-gradient(rgba(31,42,64,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(31,42,64,0.35) 1px, transparent 1px)",
        "soft-grid":
          "linear-gradient(rgba(43,49,57,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(43,49,57,0.25) 1px, transparent 1px)",
      },
      backgroundSize: {
        "fortress-grid-size": "34px 34px",
        grid: "30px 30px",
      },
    },
  },
  plugins: [],
};

export default config;
