import { scenarios, type Partner, type Scenario } from "@/data/scenarios";

type PartnershipsPrinciple = {
  title: string;
  detail: string;
};

type BrandPartner = {
  slug: string;
  name: string;
  category: string;
  whyThem: string;
  binanceGets: string;
  partnerGets: string;
  mechanic: string;
  complianceNote?: string;
};

type ChannelActivationCard = {
  partnerSlug: string;
  pairedBrand: string;
  campaign: string;
  offer: string;
  target: string;
};

type BudgetCostLine = {
  line: string;
  amountUsd: number;
  note: string;
  total?: boolean;
};

function clonePartner(partner: Partner): Partner {
  return {
    ...partner,
    links: partner.links.map((link) => ({ ...link })),
    reach: partner.reach.map((pill) => ({ ...pill })),
    youtube: partner.youtube
      ? {
          ...partner.youtube,
          featuredVideoIds: [...partner.youtube.featuredVideoIds],
          recentVideoIds: [...partner.youtube.recentVideoIds],
        }
      : undefined,
  };
}

function getExistingPartner(slug: string): Partner {
  const match = scenarios.flatMap((scenario) => scenario.partners).find((partner) => partner.slug === slug);
  if (!match) {
    throw new Error(`Partnership creator source not found for slug: ${slug}`);
  }
  return clonePartner(match);
}

export const partnershipChannelPartners: Partner[] = [
  getExistingPartner("elraenn"),
  getExistingPartner("enis-kirazoglu"),
  getExistingPartner("htalks"),
  getExistingPartner("ugur-karakullukcu"),
  getExistingPartner("serdar-ali-celikler"),
  getExistingPartner("socrates-dergi"),
];

export const partnershipsScenario: Scenario = {
  key: "partnerships",
  accent: "#F59E0B",
  accentLabel: "Partnerships",
  title: "Partnerships: borrowing trust instead of buying attention",
  objective:
    "Events reach people once. Brand partnerships reach them every week, inside services they already use and shows they already watch. The model below pairs one Turkish consumer brand with one creator channel, so the brand brings the reward, the creator brings the audience, and Binance brings the reason to sign up. Every deal is built so that the incentive only unlocks after a verified registration.",
  event: {
    title: "Brand and creator pairing model",
    description:
      "One Turkish consumer brand is paired with one creator channel, with incentives unlocked only after verified registration.",
    links: [],
  },
  formatSteps: [],
  budgetTiers: [],
  budgetLines: [],
  kpis: [],
  partners: [],
  complianceNote:
    "All partner mechanics, creator scripts and reward structures are subject to Binance compliance review, SPK and MASAK guidance. Rewards are issued on verified registration only, never on trading activity.",
};

export const partnershipsData: {
  uiText: {
    tabLabel: string;
    partATitle: string;
    partBTitle: string;
    partCTitle: string;
    partDTitle: string;
    principlesTitle: string;
    pairedBrandLabel: string;
    campaignLabel: string;
    offerLabel: string;
    targetLabel: string;
    whyThemLabel: string;
    binanceGetsLabel: string;
    partnerGetsLabel: string;
    mechanicLabel: string;
    proposedMechanicLabel: string;
    complianceNoteLabel: string;
    latestContentLabel: string;
  };
  intro: {
    title: string;
    lead: string;
    principles: PartnershipsPrinciple[];
  };
  brandPartners: BrandPartner[];
  channelActivations: ChannelActivationCard[];
  credibilityLayer: {
    title: string;
    primarySlug: string;
    secondarySlug: string;
    pairedBrand: string;
    campaign: string;
    offer: string;
    target: string;
  };
  buildSteps: string[];
  costTable: BudgetCostLine[];
  kpis: { label: string; value: string }[];
  closingLine: string;
  complianceNote: string;
} = {
  uiText: {
    tabLabel: "Partnerships",
    partATitle: "Part A: Brand partners",
    partBTitle: "Part B: How the partnerships get pushed",
    partCTitle: "Part C: How a partnership gets built",
    partDTitle: "Part D: What this costs and what it returns",
    principlesTitle: "Principles",
    pairedBrandLabel: "Paired brand",
    campaignLabel: "Campaign",
    offerLabel: "Offer",
    targetLabel: "Target",
    whyThemLabel: "Why them",
    binanceGetsLabel: "What Binance gets",
    partnerGetsLabel: "What the partner gets",
    mechanicLabel: "Mechanic",
    proposedMechanicLabel: "Proposed mechanic",
    complianceNoteLabel: "Compliance note",
    latestContentLabel: "Latest content",
  },
  intro: {
    title: "Partnerships: borrowing trust instead of buying attention",
    lead:
      "Events reach people once. Brand partnerships reach them every week, inside services they already use and shows they already watch. The model below pairs one Turkish consumer brand with one creator channel, so the brand brings the reward, the creator brings the audience, and Binance brings the reason to sign up. Every deal is built so that the incentive only unlocks after a verified registration.",
    principles: [
      {
        title: "Reward, not discount",
        detail:
          "The partner gives something people already want, delivery credit, a match ticket, or a product, so we never compete on fee cuts.",
      },
      {
        title: "Distribution is the deal",
        detail:
          "A partner without a channel is a logo. Each brand deal ships with a named creator who carries it.",
      },
      {
        title: "One code, one funnel",
        detail:
          "Every partnership runs on its own referral code so cost per verified user is measurable from day one.",
      },
    ],
  },
  brandPartners: [
    {
      slug: "trendyol",
      name: "Trendyol",
      category: "E-commerce, Super Lig title sponsor",
      whyThem:
        "The largest e-commerce platform in Turkey and title sponsor of the Super Lig, the national teams and TVF volleyball. Their audience is the exact mainstream, non-crypto user Binance needs next.",
      binanceGets:
        "Reach into tens of millions of shoppers and co-branding inside the biggest sports property in the country.",
      partnerGets:
        "A new-user acquisition channel and a fintech-adjacent story for their own campaigns.",
      mechanic:
        "Every user who completes verification through the campaign code receives a Trendyol voucher. Trendyol Sports customers get a Binance onboarding offer in return. Promoted on the football channels, so both brands hit the same fan base in the same week.",
    },
    {
      slug: "getir",
      name: "Getir",
      category: "Quick commerce, delivery",
      whyThem:
        "Daily-use app with a young urban base and a national brand built on speed. Their users open the app several times a week, which makes them ideal for repeat-touch rewards.",
      binanceGets:
        "A reward that costs little per user but feels immediate, plus in-app and push distribution to a mass audience.",
      partnerGets:
        "New customers from a high-value demographic and a campaign that does not rely on discounting their own basket.",
      mechanic:
        "\"First trade, first delivery.\" New verified users receive Getir credit, delivered in-app. Creator-led versions run on the gaming channels, where late-night ordering is native behaviour.",
    },
    {
      slug: "nesine",
      name: "Nesine",
      category: "Sports betting and match content",
      whyThem:
        "Deep integration into Turkish football culture and an audience that is already comfortable with risk, odds and mobile wallets, which is the shortest possible distance to a first trade.",
      binanceGets:
        "Direct access to the most engaged sports audience in the country, and a credible reason to be in match-day content.",
      partnerGets: "Co-branded match-day activations and reach into a fintech-native user base.",
      mechanic:
        "Derby and national team VIP tickets for verified new users, drawn monthly and announced on the football channels, with the winners hosted by the channel personality.",
      complianceNote:
        "Betting adjacency needs Binance compliance sign-off before any joint creative. If the category is not cleared, the same mechanic runs with a club or a ticketing partner instead.",
    },
    {
      slug: "arkomen",
      name: "Arko Men",
      category: "FMCG, men's grooming",
      whyThem:
        "One of the most recognised mass-market male brands in Turkey, already active in football and gaming sponsorships. Shelf presence in every market in the country means offline reach that digital cannot buy.",
      binanceGets:
        "On-pack and in-store visibility, plus a mainstream signal that Binance is a normal consumer brand, not a niche app.",
      partnerGets: "A young, digital-first campaign and co-branded creator content.",
      mechanic:
        "On-pack codes and a co-branded creator series. Codes unlock a Binance welcome reward after verification, which turns a supermarket shelf into a top-of-funnel channel.",
    },
    {
      slug: "phewphew",
      name: "Enis Kirazoglu's game studio (PhewPhew Games)",
      category: "Gaming studio, creator-owned",
      whyThem:
        "Enis is one of the two biggest gaming creators in Turkey and he owns a game studio, so this is a partnership and a media deal in one. A small investment or a title partnership buys us presence inside the game, inside his videos and inside his community at the same time.",
      binanceGets:
        "Native, long-running placement in gaming content rather than a one-off sponsored video, plus a story about supporting Turkish game development.",
      partnerGets: "Capital, distribution and a brand partner that understands creators.",
      mechanic:
        "Binance as title partner of one title or one in-game season, with Binance branding in-game, in his videos and at GIST. In-game rewards for players who register and verify.",
    },
  ],
  channelActivations: [
    {
      partnerSlug: "elraenn",
      pairedBrand: "Trendyol",
      campaign:
        "A dedicated video and a live stream where the Binance x Trendyol campaign is the format, not an ad read, he sets his audience a challenge, viewers who register and verify through his code enter the prize pool.",
      offer:
        "Trendyol vouchers for the first 1,000 verified sign-ups through his code, plus 10 PlayStation 5 consoles drawn live on stream.",
      target: "1,000 verified sign-ups from the campaign, 3M+ views across video and stream.",
    },
    {
      partnerSlug: "enis-kirazoglu",
      pairedBrand: "PhewPhew Games",
      campaign:
        "Binance becomes title partner of a PhewPhew season. Enis builds the reveal into his own content, so the partnership shows up as a story rather than a sponsorship slot.",
      offer: "In-game rewards and cosmetics for players who register and verify, plus a GTA VI and console pool at GIST.",
      target: "800 verified sign-ups, one evergreen video, permanent in-game branding.",
    },
    {
      partnerSlug: "htalks",
      pairedBrand: "Getir",
      campaign:
        "A Binance segment inside his post-match live streams, where his code is read natively during the show, week after week, rather than once.",
      offer: "Getir credit for every verified new user through his code, with a bigger tier for the first 500.",
      target: "1,200 verified sign-ups across a season, 8M+ monthly impressions.",
    },
    {
      partnerSlug: "ugur-karakullukcu",
      pairedBrand: "Nesine",
      campaign:
        "A match-day segment on his channel built around the ticket draw, with the winners announced and hosted by him, which turns the reward itself into recurring content.",
      offer: "VIP derby and national team tickets, drawn monthly among verified new users from his code.",
      target: "900 verified sign-ups, 20,000+ draw entries, six content pieces per season.",
    },
  ],
  credibilityLayer: {
    title: "Serdar Ali Celikler and Socrates, credibility layer",
    primarySlug: "serdar-ali-celikler",
    secondarySlug: "socrates-dergi",
    pairedBrand: "Credibility layer, VOLE and Socrates distribution",
    campaign:
      "No giveaway, a long-form conversation format on what onchain finance means for ordinary savers, run through VOLE and Socrates.",
    offer: "Trust-led education format, no direct prize mechanic.",
    target: "Brand trust with an older, higher-value audience.",
  },
  buildSteps: [
    "Pick the pain, not the logo. Start from what the audience wants, delivery credit, a match ticket, or a console, and work backwards to the brand that already sells it.",
    "Bring the channel to the first meeting. Every brand pitch includes the named creator and their numbers, so the partner sees distribution before they see a deck.",
    "Make the reward conditional. The partner's cost only triggers after a verified registration, which protects both budgets and makes the funnel measurable.",
    "One code per channel. Separate referral codes per creator and per brand, so we can compare cost per verified user across partnerships within two weeks.",
    "Renew on data, not on goodwill. Every partnership is reviewed at 60 days on cost per verified user, 30-day activation and content output, then scaled, reworked or dropped.",
  ],
  costTable: [
    {
      line: "Creator fees, four channels",
      amountUsd: 55000,
      note: "Season deals, not one-off posts",
    },
    {
      line: "PhewPhew title partnership",
      amountUsd: 40000,
      note: "Includes in-game integration",
    },
    {
      line: "Reward pool, Binance side",
      amountUsd: 35000,
      note: "Vouchers, credits, tickets, consoles",
    },
    {
      line: "Content production",
      amountUsd: 15000,
      note: "Cutdowns, shorts, campaign assets",
    },
    {
      line: "Brand partnership activation",
      amountUsd: 15000,
      note: "Joint creative, in-store and on-pack costs",
    },
    {
      line: "Contingency",
      amountUsd: 10000,
      note: "",
    },
    {
      line: "Total",
      amountUsd: 170000,
      note: "Partner brands contribute rewards in kind on top",
      total: true,
    },
  ],
  kpis: [
    { label: "Verified sign-ups from partnerships in the first season", value: "4,000" },
    {
      label: "Blended cost per verified user before partner in-kind value",
      value: "Under $45",
    },
    { label: "30-day activation", value: "30% or higher" },
    { label: "Monthly impressions across the four channels", value: "25M+" },
    { label: "Brand partnerships signed in year one", value: "5" },
  ],
  closingLine:
    "Events give Binance a moment. Partnerships give Binance a place in people's week: in the app they order from, the show they watch after the match, and the game they play at night.",
  complianceNote:
    "All partner mechanics, creator scripts and reward structures are subject to Binance compliance review, SPK and MASAK guidance. Rewards are issued on verified registration only, never on trading activity.",
};
