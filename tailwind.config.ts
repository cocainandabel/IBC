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
        card: "0 4px 24px rgba(0, 0, 0, 0.25)",
        "card-hover":
          "inset 0 0 0 1px rgba(240, 185, 11, 0.28), 0 8px 30px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "soft-grid":
          "linear-gradient(rgba(43,49,57,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(43,49,57,0.25) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "30px 30px",
      },
    },
  },
  plugins: [],
};

export default config;
