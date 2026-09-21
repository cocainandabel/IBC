export type ScenarioKey = "gaming" | "sports" | "devconnect" | "partnerships";

export type ReachPill = {
  label: string;
  value: string;
};

export type PartnerLink = {
  label: string;
  url: string;
};

export type Partner = {
  slug: string;
  name: string;
  role: string;
  audience: string;
  why: string;
  imageUrl?: string;
  links: PartnerLink[];
  reach: ReachPill[];
  youtube?: {
    handle?: string;
    channelId?: string;
    channelUrl: string;
    subscribers: string;
    featuredVideoIds: string[]; // TODO: paste video IDs
    recentVideoIds: string[]; // TODO: paste video IDs
  };
};

export type BudgetTier = {
  id: string;
  label: string;
  totalUsd: number;
};

export type BudgetLine = {
  item: string;
  allocations: number[];
};

export type Scenario = {
  key: ScenarioKey;
  title: string;
  objective: string;
  accent: string;
  accentLabel: string;
  event: {
    title: string;
    description: string;
    links: PartnerLink[];
  };
  startingPoint?: string;
  formatSteps: string[];
  timelineSteps?: string[];
  budgetTiers: BudgetTier[];
  budgetLines: BudgetLine[];
  kpis: {
    label: string;
    value: string;
  }[];
  partners: Partner[];
  complianceNote: string;
};

export const micrositeData = {
  hero: {
    eyebrow: "Binance Turkey, Community and Events",
    title: "Three ways to own Turkey's attention",
    subtitle:
      "Gaming, sports and Devconnect: named partners, real budgets, measurable return.",
    statChips: [
      { value: 50000, suffix: "+", label: "gaming visitors at GIST" },
      { value: 5600000, suffix: "+", label: "combined gaming YouTube subscribers" },
      { value: 25000000, suffix: "+", label: "monthly sports impressions" },
    ],
    primaryCta: "See the scenarios",
    secondaryCta: "Download PDF",
    secondaryHref: "/Binance-Turkey-Scenarios.pdf",
    footer:
      "Prepared by Alpay Aktug, September 2026. Illustrative budgets, to be validated with Binance compliance and finance.",
  },
  roi: {
    title: "How I measure ROI",
    cards: [
      {
        metric: "Cost per attendee",
        target: "Under $40 flagship, under $15 campus",
        why: "Keeps live activation efficient while scaling top-of-funnel reach.",
      },
      {
        metric: "Cost per new verified user",
        target: "Below Turkey paid-acquisition CAC",
        why: "Benchmarks channel efficiency against paid growth alternatives.",
      },
      {
        metric: "30-day activation",
        target: "35% or more trade within 30 days",
        why: "Measures whether sign-ups become active users, not vanity numbers.",
      },
      {
        metric: "LTV / CAC at 12 months",
        target: "2x to 3x",
        why: "Shows if acquisition quality compounds into durable revenue.",
      },
      {
        metric: "Creator output",
        target: "Reach, content pieces, referral-code traffic per creator",
        why: "Tracks contribution by partner, then informs renewal decisions.",
      },
      {
        metric: "Sentiment",
        target: "Post-event survey, NPS, community growth",
        why: "Captures trust and brand strength that performance metrics miss.",
      },
    ],
    note:
      "Flagship and brand events are reported separately: their return is media reach, creator content and partner relationships.",
  },
  closing: {
    band:
      "All three scenarios run on the same machine: trusted partners, a native incentive, on-site verification, and content that outlives the event.",
    contactName: "Alpay Aktug",
    contactEmail: "aktuh14@gmail.com",
  },
};

export const scenarios: Scenario[] = [
  {
    key: "gaming",
    title: "Scenario 1: Gaming. Activating Binance at Gaming Istanbul",
    objective:
      "Reach the youngest, most online audience in Turkey through the creators they already follow, and convert attention into verified sign-ups with a gaming-native incentive.",
    accent: "#8B5CF6",
    accentLabel: "Gaming",
    event: {
      title: "Gaming Istanbul (GIST), 18 to 20 September 2026",
      description:
        "Istanbul Congress Center. 50,000+ B2C visitors over three days, 2,500 B2B professionals, two conference stages. Organised by GL events (Paris Games Week).",
      links: [
        { label: "GIST Site", url: "https://www.gamingistanbul.com" },
        {
          label: "Sponsorship Packages",
          url: "https://www.gamingistanbul.com/sponsorships",
        },
      ],
    },
    startingPoint:
      "Binance TR is already listed as Super App Sponsor of GIST 2026. This plan is the activation layer that turns a logo into sign-ups and content, and the template for GIST 2027.",
    formatSteps: [
      "Binance zone on the festival floor: booth, gaming lounge, live sign-up desk with on-site KYC, creator corner where Elraenn and Enis stream.",
      "Main stage segment on day two: 45-minute \"Binance x Gaming\" session hosted by the two creators with a Binance speaker.",
      "Giveaway: every verified new sign-up enters the draw. 10 PlayStation 5 consoles, 50 copies of GTA VI on release, daily merch drops.",
      "Content: one hero video, two creator vlogs, ten short-form clips, one highlight reel.",
      "Campus extension: Binance Angels run a \"road to GIST\" campaign at five Istanbul universities the week before.",
    ],
    budgetTiers: [
      { id: "tier-100k", label: "$100K", totalUsd: 100000 },
      { id: "tier-150k", label: "$150K", totalUsd: 150000 },
    ],
    budgetLines: [
      { item: "Booth, build and floor space", allocations: [25000, 35000] },
      { item: "Creator partnership (Elraenn, Enis)", allocations: [30000, 45000] },
      { item: "Giveaways (10 PS5, 50 GTA VI)", allocations: [9000, 12000] },
      { item: "Content production", allocations: [10000, 15000] },
      { item: "Campus pre-campaign with Angels", allocations: [6000, 10000] },
      { item: "SWAG and merch", allocations: [8000, 12000] },
      { item: "Staff, logistics, on-site KYC", allocations: [7000, 11000] },
      { item: "Contingency", allocations: [5000, 10000] },
    ],
    kpis: [
      { label: "Booth visitors", value: "15,000+" },
      { label: "Verified sign-ups", value: "3,000" },
      { label: "Estimated cost per verified user", value: "$33 at $100K tier" },
      { label: "30-day activation", value: "35%+" },
      { label: "Creator content reach", value: "10M+" },
      { label: "Evergreen creator videos", value: "2 within two weeks" },
    ],
    partners: [
      {
        slug: "elraenn",
        name: "Elraenn (Tugkan Gonultas)",
        role: "Turkey's no. 1 live streamer, gaming, variety and IRL",
        audience: "Male 16 to 30",
        why: "The largest live audience in the country, his presence alone fills the zone.",
        links: [
          { label: "YouTube", url: "https://www.youtube.com/@Elraenn" },
          { label: "Kick", url: "https://kick.com/elraenn" },
          { label: "X", url: "https://x.com/elraenn" },
        ],
        reach: [
          { label: "YouTube", value: "3.86M" },
          { label: "Kick", value: "1.1M" },
          { label: "X", value: "177K" },
        ],
        youtube: {
          handle: "@Elraenn",
          channelUrl: "https://www.youtube.com/@Elraenn",
          subscribers: "3.86M",
          featuredVideoIds: [], // TODO: paste video IDs
          recentVideoIds: [], // TODO: paste video IDs
        },
      },
      {
        slug: "enis-kirazoglu",
        name: "Enis Kirazoglu",
        role: "Gaming and comedy YouTuber, long-form vlogs, group content",
        audience: "Gaming-first Turkish audience, 16 to 34",
        why: "Highest video view counts in the segment, perfect for the post-event vlog.",
        links: [
          { label: "YouTube", url: "https://www.youtube.com/@EnisKirazogluvideolar" },
          { label: "X", url: "https://x.com/EnisKirazoglu" },
        ],
        reach: [
          { label: "YouTube", value: "1.77M" },
          { label: "X", value: "317K" },
          { label: "Typical video views", value: "4M to 5M" },
        ],
        youtube: {
          handle: "@EnisKirazogluvideolar",
          channelUrl: "https://www.youtube.com/@EnisKirazogluvideolar",
          subscribers: "1.77M",
          featuredVideoIds: [], // TODO: paste video IDs
          recentVideoIds: [], // TODO: paste video IDs
        },
      },
    ],
    complianceNote:
      "Compliance note: giveaway mechanics, creator scripts and sign-up flows approved three weeks ahead, the draw rewards verified registration only, no trading incentives.",
  },
  {
    key: "sports",
    title: "Scenario 2: Sports. Football channel partnerships and fan activation",
    objective:
      "Reach the largest non-crypto audience in Turkey, football fans, through the commentators they trust, and give new users a reason to register that no competitor offers: access to the match.",
    accent: "#22C55E",
    accentLabel: "Sports",
    event: {
      title: "Season-long football activation, four-month horizon",
      description:
        "Six personalities across four production houses. Socrates Dergi covers Emre Ozcan and Erman Yasar under one counterparty, plus NOW Spor and Sports Digitale as broadcast partners.",
      links: [],
    },
    formatSteps: [
      "Season-long channel sponsorship: a Binance segment on each channel, host reads the offer natively.",
      "VIP match ticket programme: monthly draw for derby and national team VIP tickets among new verified users who registered via a channel code, hosted and announced by the personality.",
      "Street segment: recurring on-the-street format around stadiums on match day, fans talk money, savings and crypto.",
      "Trendyol partnership: new Binance users get Trendyol vouchers, Trendyol Sports customers get Binance onboarding, promoted through the same channels. Trendyol is title sponsor of the Super Lig and the national teams.",
      "Flagship: closed Binance football night before a major derby, personalities, former players, 150 top community members, streamed.",
    ],
    budgetTiers: [{ id: "tier-160k", label: "$160K", totalUsd: 160000 }],
    budgetLines: [
      { item: "Channel sponsorships (six personalities)", allocations: [60000] },
      { item: "VIP match ticket programme", allocations: [25000] },
      { item: "Street segment production", allocations: [12000] },
      { item: "Content production and editing", allocations: [15000] },
      { item: "Trendyol co-campaign activation", allocations: [10000] },
      { item: "Football night flagship", allocations: [20000] },
      { item: "SWAG and fan merch", allocations: [8000] },
      { item: "Contingency", allocations: [10000] },
    ],
    kpis: [
      { label: "Monthly impressions", value: "25M+" },
      { label: "Verified sign-ups over season", value: "8,000" },
      { label: "Estimated cost per verified user", value: "$20" },
      { label: "30-day activation", value: "30%" },
      { label: "Ticket draw participants", value: "20,000+" },
      { label: "Trendyol cross-registrations", value: "3,000" },
    ],
    partners: [
      {
        slug: "ugur-karakullukcu",
        name: "Ugur Karakullukcu",
        role: "Football commentary and entertainment, live streams. Also on NOW Spor and NEO Spor.",
        audience: "Super Lig fans",
        why: "Daily football relevance, strong conversion to recurring sponsor segments.",
        links: [
          { label: "YouTube", url: "https://www.youtube.com/@UKarakullukcu" },
          { label: "X", url: "https://x.com/ukarakullukcu" },
          { label: "Instagram", url: "https://www.instagram.com/ukarakullukcu/" },
        ],
        reach: [
          { label: "YouTube", value: "502K" },
          { label: "X", value: "617K" },
          { label: "Instagram", value: "Profile active" },
        ],
        youtube: {
          handle: "@UKarakullukcu",
          channelUrl: "https://www.youtube.com/@UKarakullukcu",
          subscribers: "502K",
          featuredVideoIds: [], // TODO: paste video IDs
          recentVideoIds: [], // TODO: paste video IDs
        },
      },
      {
        slug: "serdar-ali-celikler",
        name: "Serdar Ali Celikler",
        role: "Veteran pundit and journalist, broad mainstream reach. No personal channel, reach via VOLE and NEO Spor.",
        audience: "Mainstream sports audience",
        why: "High credibility among mature football viewers and strong sponsor recall.",
        links: [
          { label: "VOLE", url: "https://www.youtube.com/@VOLEapp" },
          { label: "NEO Spor", url: "https://www.youtube.com/@Neo_Spor" },
          { label: "Instagram", url: "https://www.instagram.com/serdarcelikler/" },
        ],
        reach: [
          { label: "VOLE YouTube", value: "778K" },
          { label: "NEO Spor YouTube", value: "370K" },
          { label: "Instagram", value: "240K" },
        ],
      },
      {
        slug: "socrates-dergi",
        name: "Socrates Dergi",
        role: "Sports culture magazine and studio, sponsorship-ready format",
        audience: "Culture and analysis heavy sports audience",
        why: "One studio counterparty that covers multiple partner voices and formats.",
        links: [
          { label: "YouTube", url: "https://www.youtube.com/@SocratesDergi" },
          { label: "Second channel", url: "https://www.youtube.com/@socratesclub" },
          { label: "X", url: "https://x.com/socratesdergi" },
        ],
        reach: [
          { label: "YouTube", value: "1.01M" },
          { label: "X", value: "350K" },
          { label: "Series history", value: "Socrates x Samsung" },
        ],
        youtube: {
          handle: "@SocratesDergi",
          channelUrl: "https://www.youtube.com/@SocratesDergi",
          subscribers: "1.01M",
          featuredVideoIds: [], // TODO: paste video IDs
          recentVideoIds: [], // TODO: paste video IDs
        },
      },
      {
        slug: "emre-ozcan",
        name: "Emre Ozcan",
        role: "Tactical analyst, also appears on S Sport, NOW Spor and Exxen",
        audience: "Tactical and analysis focused football fans",
        why: "Strong authority for educational football formats and long-view content.",
        links: [
          { label: "YouTube", url: "https://www.youtube.com/@EmreOzcanSocrates" },
          { label: "X", url: "https://x.com/parmamaniac" },
        ],
        reach: [
          { label: "YouTube", value: "140K" },
          { label: "X", value: "267K" },
          { label: "Managed by", value: "Socrates Dergi" },
        ],
        youtube: {
          handle: "@EmreOzcanSocrates",
          channelUrl: "https://www.youtube.com/@EmreOzcanSocrates",
          subscribers: "140K",
          featuredVideoIds: [], // TODO: paste video IDs
          recentVideoIds: [], // TODO: paste video IDs
        },
      },
      {
        slug: "erman-yasar",
        name: "Erman Yasar",
        role: "Commentator and broadcaster, comedy-inflected sports talk, co-hosts Harman with HTalks.",
        audience: "Fast-moving football social audience",
        why: "Live and social tone lifts participation in referral and draw mechanics.",
        links: [
          { label: "X", url: "https://x.com/ermanyasar" },
          { label: "Mantra YouTube", url: "https://www.youtube.com/@mantrast" },
          { label: "Instagram", url: "https://www.instagram.com/ermanyasar/" },
        ],
        reach: [
          { label: "X", value: "209K" },
          { label: "YouTube (Mantra)", value: "261K" },
          { label: "Instagram", value: "Active profile" },
        ],
      },
      {
        slug: "htalks",
        name: "HTalks (Hasan Arda Kasikci)",
        role: "Football talk, live post-match streams, fastest-growing profile",
        audience: "Young Super Lig fan base",
        why: "Fast growth and high posting cadence make it ideal for conversion testing.",
        links: [
          { label: "YouTube", url: "https://www.youtube.com/@HTalksYoutube" },
          { label: "X Moments", url: "https://x.com/HTalksMoments" },
          { label: "Founder X", url: "https://x.com/hakasikci" },
        ],
        reach: [
          { label: "YouTube", value: "779K" },
          { label: "X Moments", value: "226K" },
          { label: "Founder X", value: "212K" },
        ],
        youtube: {
          handle: "@HTalksYoutube",
          channelUrl: "https://www.youtube.com/@HTalksYoutube",
          subscribers: "779K",
          featuredVideoIds: [], // TODO: paste video IDs
          recentVideoIds: [], // TODO: paste video IDs
        },
      },
    ],
    complianceNote:
      "Compliance note: scripts approved per episode, no return promises or trading calls on air, draws reward verified registration only, SPK and MASAK guidance reviewed before launch.",
  },
  {
    key: "devconnect",
    title: "Scenario 3: If Devconnect returns to Istanbul",
    objective: "If it returns, it is the biggest week for Binance to own in Turkey.",
    accent: "#3B82F6",
    accentLabel: "Devconnect",
    event: {
      title: "Devconnect return scenario, illustrative budget $500K",
      description:
        "Devconnect Istanbul 2023 drew the global Ethereum ecosystem for a week, zkDay Istanbul alone had 1,277 attendees. If it returns, it is the biggest week for Binance to own in Turkey.",
      links: [
        { label: "Devconnect", url: "https://devconnect.org" },
        {
          label: "Ciragan Palace",
          url: "https://www.kempinski.com/en/ciragan-palace/overview/offers/suite-indulgence-offer?source=S46992213&utm_source=google&utm_medium=cpc&utm_source_platform=google_ads&utm_campaign=KEMPINSKI_KIIST_SEA_PER_BRA_TR_EN_AON&utm_campaignid=24166881025&utm_adgroup=BRA_TR_EN_KWS_Exact&gad_source=1&gad_campaignid=24166881025&gbraid=0AAAAAosvjVfKP56q0dlz1J8sHaYE1psUh&gclid=Cj0KCQjwzY7VBhDwARIsAFtPvBRdQITBuLhH7eAocfi6hRbjLA68KvWhSO7O00rd-ocLWIyrCQWPuKkaAl77EALw_wcB",
        },
      ],
    },
    formatSteps: [
      "Secure the main stage: business case for Diamond sponsorship to leadership, then negotiate the package: speaking slot, branding, delegate passes, side-event listing and creator access.",
      "The Binance night at Ciragan Palace: invite-only, 600 to 800 guests, Devconnect delegates, Turkish crypto community, the football personalities and gaming creators, Binance global team. Crypto creators attend unpaid, sports personalities are paid appearances.",
      "New-user campaign around the week: register with the event code, verify, receive a welcome reward and entry to the Ciragan guest-list draw. Promoted through sports channels, gaming creators, Angels on campus. Trendyol co-promotion the same week.",
      "Content: exit interviews at Ciragan, a TikTok-first series across the week, a hero film from the main stage and the palace night.",
      "Timeline: month minus 6 business case and negotiation, minus 4 Ciragan booked and contracts signed, minus 3 compliance approvals, minus 2 promotion starts, event week execution, week plus 1 reporting and content rollout.",
    ],
    timelineSteps: [
      "Month minus 6: business case and negotiation.",
      "Month minus 4: Ciragan booked and contracts signed.",
      "Month minus 3: compliance approvals.",
      "Month minus 2: promotion starts.",
      "Event week: execution.",
      "Week plus 1: reporting and content rollout.",
    ],
    budgetTiers: [{ id: "tier-500k", label: "$500K", totalUsd: 500000 }],
    budgetLines: [
      { item: "Diamond sponsorship, Devconnect", allocations: [200000] },
      { item: "Ciragan Palace night", allocations: [100000] },
      { item: "Sports personality appearances", allocations: [50000] },
      { item: "New-user campaign incentives", allocations: [50000] },
      { item: "Content production", allocations: [30000] },
      { item: "SWAG and guest gifts", allocations: [20000] },
      { item: "Trendyol co-campaign", allocations: [20000] },
      { item: "Contingency", allocations: [30000] },
    ],
    kpis: [
      { label: "Main stage reach", value: "Primary objective metric" },
      { label: "Palace guests", value: "800, with 30% non-crypto" },
      { label: "Verified sign-ups during week", value: "15,000" },
      { label: "30-day activation", value: "35%" },
      { label: "Content reach", value: "30M+" },
      { label: "Cross-audience mixing", value: "Crypto + gaming + sports" },
    ],
    partners: [
      {
        slug: "devconnect",
        name: "Devconnect",
        role: "Ethereum ecosystem flagship week",
        audience: "Global builders, founders, community leaders",
        why: "High concentration of crypto-native influence, strongest strategic week for thought leadership in Turkey.",
        imageUrl: "/partners/devconnect-istanbul.png",
        links: [{ label: "Website", url: "https://devconnect.org" }],
        reach: [
          { label: "Signal", value: "Global Ethereum audience" },
          { label: "Istanbul precedent", value: "Week-long ecosystem draw" },
          { label: "zkDay Istanbul", value: "1,277 attendees" },
        ],
      },
      {
        slug: "ciragan-palace",
        name: "Ciragan Palace Kempinski",
        role: "Premium flagship venue for Binance night",
        audience: "Invite-only leadership and community guest list",
        why: "Creates a high-prestige anchor event with strong content outcomes and partner hospitality value.",
        links: [
          {
            label: "Venue",
            url: "https://www.kempinski.com/en/ciragan-palace/overview/offers/suite-indulgence-offer?source=S46992213&utm_source=google&utm_medium=cpc&utm_source_platform=google_ads&utm_campaign=KEMPINSKI_KIIST_SEA_PER_BRA_TR_EN_AON&utm_campaignid=24166881025&utm_adgroup=BRA_TR_EN_KWS_Exact&gad_source=1&gad_campaignid=24166881025&gbraid=0AAAAAosvjVfKP56q0dlz1J8sHaYE1psUh&gclid=Cj0KCQjwzY7VBhDwARIsAFtPvBRdQITBuLhH7eAocfi6hRbjLA68KvWhSO7O00rd-ocLWIyrCQWPuKkaAl77EALw_wcB",
          },
        ],
        reach: [
          { label: "Guest capacity", value: "600 to 800" },
          { label: "Format", value: "Invite-only premium night" },
          { label: "Outcome", value: "Content and relationship depth" },
        ],
      },
    ],
    complianceNote:
      "Compliance note: reward flows, creator talking points and registration mechanics approved before launch, no return claims and no trading calls attached to incentives.",
  },
];

export const scenarioOrder: ScenarioKey[] = ["gaming", "sports", "devconnect", "partnerships"];
