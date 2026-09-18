export type KolType = "Caller" | "Trader" | "Meme" | "Educator";

export type Kol = {
  name: string;
  handle: string;
  xUrl: string;
  followers: string;
  why: string;
  type: KolType;
  placeholder?: boolean;
};

export type Wallet = {
  walletOrHandle: string;
  knownFor: string;
  chain: string;
  link: string;
};

const kolSlots = Array.from({ length: 12 }, (_, index) => {
  const num = index + 1;
  return {
    name: `KOL slot ${num}`,
    handle: "pending",
    xUrl: "https://x.com/originalsaar",
    followers: "TBD",
    why: "To be confirmed on kickoff with campaign angle and posting rhythm.",
    type: (["Caller", "Trader", "Meme", "Educator"][
      index % 4
    ] ?? "Caller") as KolType,
    placeholder: true,
  } satisfies Kol;
});

export const kols: Kol[] = kolSlots;

export const wallets: Wallet[] = [
  {
    walletOrHandle: "Wallet slot 1",
    knownFor: "High-frequency meme rotations",
    chain: "Solana",
    link: "https://x.com/originalsaar",
  },
  {
    walletOrHandle: "Wallet slot 2",
    knownFor: "Early entries in community meme launches",
    chain: "Ethereum",
    link: "https://x.com/originalsaar",
  },
  {
    walletOrHandle: "Wallet slot 3",
    knownFor: "Public callouts with onchain receipts",
    chain: "Base",
    link: "https://x.com/originalsaar",
  },
  {
    walletOrHandle: "Wallet slot 4",
    knownFor: "Smart money copy-trading magnet",
    chain: "Solana",
    link: "https://x.com/originalsaar",
  },
  {
    walletOrHandle: "Wallet slot 5",
    knownFor: "Meme treasury swing trader",
    chain: "Ethereum",
    link: "https://x.com/originalsaar",
  },
  {
    walletOrHandle: "Wallet slot 6",
    knownFor: "Trend detection on fresh launches",
    chain: "Arbitrum",
    link: "https://x.com/originalsaar",
  },
  {
    walletOrHandle: "Wallet slot 7",
    knownFor: "Community wallet with visible conviction holds",
    chain: "Solana",
    link: "https://x.com/originalsaar",
  },
  {
    walletOrHandle: "Wallet slot 8",
    knownFor: "Cross-chain momentum plays",
    chain: "Base",
    link: "https://x.com/originalsaar",
  },
];
