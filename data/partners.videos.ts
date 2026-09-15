export const partnerVideos: Record<string, { featured: string; recent: string[] }> = {
  elraenn: {
    featured: "Xw54AeqFCQU",
    recent: ["Xw54AeqFCQU", "XhgXZQ-DWoA", "hCEX3SlOxDE", "nDSjnm5ppuI"],
  },
  "enis-kirazoglu": {
    featured: "ugQ3-akW2WM",
    recent: ["ugQ3-akW2WM", "9n4itdBuyY8", "tazkYjYLU9I", "Be8Jwg2i718"],
  },
  "ugur-karakullukcu": {
    featured: "M6I-ZZJtL6U",
    recent: ["M6I-ZZJtL6U", "5GvzDyTztHI", "jQDpshrwQBs", "NjLNjFGN3ng"],
  },
  "socrates-dergi": {
    featured: "VTa4cKomERM",
    recent: ["VTa4cKomERM", "JhrDqCTrCQU", "BKxzZz_JQNk", "tLlsYyGWgDk"],
  },
  "emre-ozcan": {
    featured: "R_bKL8S88tQ",
    recent: ["R_bKL8S88tQ", "wT6BpEdT-wE", "_1xVEh9F2FI", "fsepIRTJjJg"],
  },
  "erman-yasar": {
    featured: "ya-usFINjQI",
    recent: ["ya-usFINjQI", "HsbZz0qMsSA", "bJEivi7kUvw", "SoFxNJZaYg0"],
  },
  htalks: {
    featured: "jCLGiuXTnco",
    recent: ["jCLGiuXTnco", "uIiDUm9Iwc4", "nLwTRFTPvy8", "6EvTo1EtpmE"],
  },
  "serdar-ali-celikler": {
    featured: "RI8JDkg8bbs",
    recent: ["RI8JDkg8bbs", "_J-VoA-7YsM", "JWvK5cxNNBY", "O3_a5JD1Nh4"],
  },
};

export const thumb = (id: string, q: "hqdefault" | "maxresdefault" = "hqdefault") =>
  `https://img.youtube.com/vi/${id}/${q}.jpg`;
