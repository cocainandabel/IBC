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

const kolHandles = [
  "artuntan",
  "cometcalls",
  "BagCalls",
  "dazzlercoin",
  "Kaffchad",
  "Hercules_Defi",
  "HYPEconomist",
  "Eli5defi",
  "StarPlatinum_",
  "stacy_muur",
  "corgil",
  "arndxt_xo",
  "Mojojojoppg",
  "kirbyongeo",
  "Sakrexer",
  "0xfrigg",
  "Usoppu",
  "Sychype",
  "greenytrades",
  "walsxbt",
  "Tanaka_L2",
  "sjdedic",
  "sheikhakash69",
  "lianshangpixiu",
  "Credib1eGuy",
  "0xAltKing",
  "ZKSgu",
  "gusik4ever",
  "grebby",
  "eeelistar",
  "Jai0xCrypto",
  "polydao",
  "MSBIntel",
  "cryptoxiaoxiang",
  "the_smart_ape",
  "VaveylaCrypto",
  "amit0xic",
  "nics_off",
  "FabiusDefi",
  "0xdogacan",
  "Jackkk",
  "zaimiri",
  "DrEinstein9999",
  "congge918",
  "0xKingsKuan",
  "lordsgood",
  "NiftyNoon",
  "jexybtc",
  "0xValmir",
  "KierianV",
  "ripchillpill",
  "Gyokeres_eth",
  "0xEthan",
  "Ajwritescrypto",
  "0xWassie",
  "BitmanTW",
  "jade_defi",
  "NicoleXBT",
  "AzFlin",
  "serpinxbt",
  "0xDeployer",
  "jussy_world",
  "DidiTrading",
  "aadvark89",
  "aaronjmars",
  "ika_xbt",
  "Alvin0617",
  "0xSammy",
  "zoomerfied",
  "eth_taco",
  "LQP2021",
  "TyrelleAB",
  "ScarlettWeb3",
  "memewizd",
  "nineteen_888",
  "feibo03",
  "0xyukaz",
  "qkl2058",
  "cfm_sol",
  "OrdzWorld",
  "sol_jingou",
  "Bullrun_Gravano",
  "EricCryptoman",
  "shahh",
  "KadunaBull",
  "notdecu",
  "fuelkek",
] as const;

const typeCycle: KolType[] = ["Caller", "Trader", "Meme", "Educator"];

export const kols: Kol[] = Array.from(new Set(kolHandles)).map((handle, index) => ({
  name: handle,
  handle,
  xUrl: `https://x.com/${handle}`,
  followers: "TBD",
  why: "Included in the SAAR creator activation list for campaign rollout.",
  type: typeCycle[index % typeCycle.length],
}));

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
