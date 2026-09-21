export type OfferStat = {
  prefix: string;
  countTo: number;
  suffix: string;
  label: string;
};

export type CompareColumn = {
  title: string;
  points: string[];
};

export type PackageBlock = {
  icon: string;
  title: string;
  included: string;
  deliverables: string[];
};

export type AllocationLine = {
  line: string;
  amount: number;
};

export type TimelinePhase = {
  label: string;
  points: string[];
};

export type KpiItem = {
  value: string;
  label: string;
  note: string;
};

export type WhyIbcItem = {
  title: string;
};

export type Offer = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stats: OfferStat[];
    packageButtonLabel: string;
    bookCallButtonLabel: string;
    bookCallUrl: string;
    footerLine: string;
    ibcWordmark: string;
    saarWordmark: string;
  };
  compare: {
    title: string;
    left: CompareColumn;
    right: CompareColumn;
    sequenceLine: string;
  };
  packageSection: {
    title: string;
    indicativeLabel: string;
    blocks: PackageBlock[];
    allocationTitle: string;
    allocationLines: AllocationLine[];
    totalLabel: string;
    lineHeader: string;
    amountHeader: string;
  };
  timeline: {
    title: string;
    phases: TimelinePhase[];
  };
  kpis: {
    title: string;
    items: KpiItem[];
  };
  kolTabs: {
    title: string;
    tabs: {
      kols: string;
      wallets: string;
    };
    subtitle: string;
    walletTableHeaders: {
      wallet: string;
      knownFor: string;
      chain: string;
      link: string;
    };
    openLabel: string;
  };
  whyIbc: {
    title: string;
    cards: WhyIbcItem[];
    footerLine: string;
  };
  terms: {
    title: string;
    points: string[];
  };
  closing: {
    line: string;
    nameLine: string;
    telegramLabel: string;
    telegramUrl: string;
    emailLabel: string;
    email: string;
    bookCallButtonLabel: string;
    bookCallUrl: string;
  };
};

export const offer: Offer = {
  meta: {
    title: "IBC x SAAR, $35K Growth Package",
    description:
      "IBC growth proposal for SAAR, a $35K attention-first package as the strategic alternative to a $50K MEXC spot listing.",
  },
  hero: {
    eyebrow: "IBC x SAAR",
    title: "Attention first. Listings follow.",
    subtitle:
      "A $35K growth package that puts SAAR in front of Mario Nawfal's audience, 50 to 200 KOLs and the wallets that actually move meme markets.",
    stats: [
      {
        prefix: "3 to ",
        countTo: 5,
        suffix: "B",
        label: "impressions on Mario's X",
      },
      {
        prefix: "50 to ",
        countTo: 200,
        suffix: "",
        label: "KOLs activated",
      },
      {
        prefix: "",
        countTo: 3,
        suffix: "",
        label: "posts a day, every day",
      },
    ],
    packageButtonLabel: "See the package",
    bookCallButtonLabel: "Book a call",
    bookCallUrl: "https://t.me/your_telegram",
    footerLine: "Prepared by Alpay Aktuğ, Growth Lead, IBC. September 2026.",
    ibcWordmark: "IBC",
    saarWordmark: "SAAR",
  },
  compare: {
    title: "Why not the $50K listing",
    left: {
      title: "MEXC spot listing, $50K",
      points: [
        "One-time visibility on listing day, then the order book is on its own.",
        "Spot listings on memes have become a sell event: holders and early buyers use the CEX liquidity to exit, and the chart bleeds after the announcement.",
        "No community built, no content, no creators, no new holders after day one.",
        "$50K spent, and the token still needs marketing to hold the price.",
      ],
    },
    right: {
      title: "IBC growth package, $35K",
      points: [
        "30 days of continuous attention instead of one day.",
        "Mario Nawfal and the Roundtable reach mainstream crypto, not just listing hunters.",
        "50 to 200 creators and smart wallets brought in as holders and amplifiers.",
        "A community machine, content, design, moderation, that keeps running after the campaign.",
        "$15K left in the SAAR treasury, which can fund the listing later from a position of strength.",
      ],
    },
    sequenceLine: "Best sequence: build the audience first, list when the chart can absorb it.",
  },
  packageSection: {
    title: "The package, $35,000",
    indicativeLabel: "Indicative",
    blocks: [
      {
        icon: "01",
        title: "Mario Nawfal post",
        included:
          "One dedicated post from Mario Nawfal's X account about SAAR. Angle, timing and creative agreed with the SAAR team.",
        deliverables: [
          "1 post",
          "Draft for approval 48 hours before",
          "Performance report after 72 hours",
        ],
      },
      {
        icon: "02",
        title: "Roundtable post",
        included: "One dedicated post from the Roundtable account.",
        deliverables: [
          "1 post",
          "Coordinated within 24 hours of Mario's post for a two-wave effect",
        ],
      },
      {
        icon: "03",
        title: "Social media operations, 30 days",
        included:
          "Full account management: 3 posts per day plus active replies and engagement across CT. Dedicated graphic designer for daily visuals and memes, moderator team for X replies and community channels. Content calendar shared weekly. AI-assisted content pipeline with human editing, so volume and quality both hold.",
        deliverables: [
          "90+ posts",
          "Daily visuals",
          "Reply coverage",
          "Weekly calendar",
          "Weekly analytics",
        ],
      },
      {
        icon: "04",
        title: "KOL activation, 50 to 200 creators",
        included:
          "Access to IBC's KOL network. We brief, coordinate and track creators posting about SAAR. Minimum 50 creators, up to 200 depending on angle and traction. Mix of paid posts and holder-aligned creators.",
        deliverables: ["Creator list", "Tracked links", "Post schedule", "Results sheet"],
      },
      {
        icon: "05",
        title: "Smart wallets and onchain traders",
        included:
          "Direct outreach to high-signal wallets and onchain traders who move meme markets, bringing them in as holders and public supporters.",
        deliverables: ["Target list", "Outreach log", "Wallets onboarded"],
      },
    ],
    allocationTitle: "Allocation",
    allocationLines: [
      { line: "Mario Nawfal post", amount: 10000 },
      { line: "Roundtable post", amount: 4000 },
      {
        line: "Social media operations, 30 days (content, design, moderation)",
        amount: 8000,
      },
      { line: "KOL activation, 50 to 200 creators", amount: 10000 },
      { line: "Smart wallet and trader outreach", amount: 3000 },
    ],
    totalLabel: "Total",
    lineHeader: "Line",
    amountHeader: "Amount",
  },
  timeline: {
    title: "Timeline, 30 days",
    phases: [
      {
        label: "Days 1 to 3",
        points: [
          "Onboarding",
          "Brand kit",
          "Content calendar",
          "KOL shortlist",
          "Target wallet list",
        ],
      },
      {
        label: "Days 4 to 10",
        points: [
          "Social engine live, 3 posts a day",
          "First wave of KOLs",
          "Smart wallet outreach begins",
        ],
      },
      {
        label: "Days 11 to 17",
        points: [
          "Mario Nawfal post",
          "Roundtable post within 24 hours",
          "Full KOL wave around the posts",
        ],
      },
      {
        label: "Days 18 to 30",
        points: [
          "Sustain",
          "Second KOL wave",
          "Community growth",
          "Results report and next-phase plan",
        ],
      },
    ],
  },
  kpis: {
    title: "What SAAR gets, KPIs",
    items: [
      { value: "1", label: "Mario post", note: "target" },
      { value: "1", label: "Roundtable post", note: "target" },
      { value: "90+", label: "posts in 30 days", note: "target" },
      { value: "50 to 200", label: "KOLs", note: "target" },
      { value: "12", label: "smart wallets onboarded", note: "target" },
      { value: "4", label: "weekly reports", note: "target" },
    ],
  },
  kolTabs: {
    title: "KOLs and smart wallets",
    tabs: {
      kols: "KOLs",
      wallets: "Smart wallets",
    },
    subtitle: "Minimum 50 creators. Sample below, full list shared on kickoff.",
    walletTableHeaders: {
      wallet: "Wallet or handle",
      knownFor: "Known for",
      chain: "Chain",
      link: "Link",
    },
    openLabel: "Open",
  },
  whyIbc: {
    title: "Why IBC",
    cards: [
      { title: "Mario Nawfal's agency, active since 2017" },
      { title: "3 to 5B impressions across Mario's X" },
      { title: "$200M+ capital deployed across the ecosystem" },
      { title: "100+ projects worked with" },
    ],
    footerLine:
      "We build the whole funnel: narrative, distribution, community, then the listing push, measured on holders and volume, not just views.",
  },
  terms: {
    title: "Terms",
    points: [
      "Full payment is required upfront if SAAR wants to start with IBC.",
      "Package runs 30 days from kickoff.",
      "KOL management is handled by IBC, but KOL payment terms and settlements are executed by the SAAR side.",
      "All paid posts follow the account owners' editorial guidelines and disclosure rules.",
      "Content and creator scripts approved by SAAR before posting.",
      "KPIs are targets, not guarantees, markets are markets.",
    ],
  },
  closing: {
    line: "Build the crowd first. List when the crowd is already there.",
    nameLine: "Alpay Aktuğ, Growth Lead, IBC",
    telegramLabel: "Telegram",
    telegramUrl: "https://t.me/your_telegram",
    emailLabel: "Email",
    email: "alpay@ibc.agency",
    bookCallButtonLabel: "Book a call",
    bookCallUrl: "https://t.me/your_telegram",
  },
};
