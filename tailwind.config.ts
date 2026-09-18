import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/Hero.tsx",
    "./components/CompareCards.tsx",
    "./components/PackageGrid.tsx",
    "./components/AllocationChart.tsx",
    "./components/Timeline.tsx",
    "./components/KpiCards.tsx",
    "./components/KolTabs.tsx",
    "./components/WhyIbc.tsx",
    "./components/Terms.tsx",
    "./components/ClosingBand.tsx",
    "./components/PasscodeGate.tsx",
    "./components/Counter.tsx",
    "./components/ExternalLink.tsx",
    "./components/RevealObserver.tsx",
    "./components/SaarProposalPage.tsx",
  ],
  theme: {
    extend: {
      colors: {
        saar: {
          base: "#0A0A0F",
          panel: "#12121A",
          surface: "#1A1A24",
          border: "#262633",
          text: "#F2F2F5",
          muted: "#8B8B9E",
          lime: "#C6FF3D",
          magenta: "#FF3DA6",
        },
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
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "saar-card": "0 10px 32px rgba(0,0,0,0.38)",
        "saar-hover": "inset 0 0 0 1px rgba(198,255,61,0.36), 0 10px 34px rgba(0,0,0,0.45)",
        "fortress-card": "0 10px 30px rgba(0, 0, 0, 0.35)",
        "fortress-hover":
          "inset 0 0 0 1px rgba(212,166,74,0.32), 0 10px 32px rgba(0, 0, 0, 0.45)",
        card: "0 4px 24px rgba(0, 0, 0, 0.25)",
        "card-hover":
          "inset 0 0 0 1px rgba(240, 185, 11, 0.28), 0 8px 30px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "saar-noise":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
        "fortress-grid":
          "linear-gradient(rgba(31,42,64,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(31,42,64,0.35) 1px, transparent 1px)",
        "soft-grid":
          "linear-gradient(rgba(43,49,57,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(43,49,57,0.25) 1px, transparent 1px)",
      },
      backgroundSize: {
        "saar-noise": "3px 3px",
        "fortress-grid-size": "34px 34px",
        grid: "30px 30px",
      },
    },
  },
  plugins: [],
};

export default config;
