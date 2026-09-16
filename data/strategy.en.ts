import type { StrategyLocaleData } from "@/data/strategy.types";

export const strategyEn: StrategyLocaleData = {
  locale: "en",
  meta: {
    title: "American Fortress, Asia Market Strategy",
    description:
      "IBC 90-day Korea and China go-to-market strategy for American Fortress ($AF).",
  },
  header: {
    wordmark: "AMERICAN FORTRESS",
    localeLabel: "Language",
  },
  gate: {
    title: "Access strategy draft",
    subtitle:
      "This page uses a simple passcode gate. It is only to keep the proposal out of crawlers.",
    inputLabel: "Passcode",
    inputPlaceholder: "Enter passcode",
    button: "Unlock",
    error: "Passcode is not correct, try again.",
  },
  hero: {
    eyebrow: "American Fortress, Asia go-to-market",
    title: "Korea and China, in 90 days",
    subtitle:
      "Two localized accounts, two communities, one agency per market, and 5 to 8 KOLs ready for the $AF listing.",
    stats: [
      { value: 2, suffix: "", label: "localized X accounts" },
      { value: 5, suffix: " to 8", label: "KOLs across both markets" },
      { value: 90, suffix: "", label: "days to listing-ready communities" },
    ],
    seePlanCta: "See the plan",
    downloadCta: "Download PDF",
    downloadHref: "/AF-Asia-Strategy.pdf",
    footer:
      "Prepared by IBC for American Fortress, September 2026. Budgets indicative, to be confirmed with the AF team.",
  },
  objectives: {
    title: "Objectives, first 90 days",
    cards: [
      "Two live localized accounts on X, Korean and Chinese, posting daily, plus one community channel per market.",
      "One agency contracted per market, 5 to 8 KOLs activated across both markets.",
      "Korean and Chinese communities ready to absorb the $AF listing announcement.",
    ],
  },
  timeline: {
    title: "Timeline, three phases",
    phases: [
      {
        id: "phase-1",
        navLabel: "Phase 1, Foundation",
        title: "Phase 1, Foundation",
        weekRange: "Weeks 1 to 2",
        whatHappensTitle: "What happens",
        whatHappens: [
          "Accounts: open one Korean and one Chinese X account under the AF brand, for example @AmericanFort_KR and @AmericanFort_CN. Add localized banner, bio, and pinned post. Bios link to the main account and a localized landing page.",
          "Community channels: Korea uses KakaoTalk open chat as primary, plus a Korean Telegram as secondary. China uses a Telegram group as primary for overseas Chinese crypto, plus a WeChat group managed by the agency.",
          "Localized landing page: publish one page per language on americanfortress.io explaining FortressName, the loyalty program, and how to reserve a name. Translation is done by a native crypto writer, not machine translation.",
          "Translation phase: for the first 2 to 3 weeks the local accounts only translate and repost content from the main account on the same day. Translate within 2 hours, adapt idioms, and add local context when useful, for example Upbit Travel Rule references in Korea.",
        ],
        deliverablesTitle: "Deliverables",
        deliverables: [
          "Korean X account live with profile and pinned post.",
          "Chinese X account live with profile and pinned post.",
          "KakaoTalk, Telegram KR, Telegram CN, and WeChat channels open.",
          "Localized landing pages published in Korean and Chinese.",
        ],
        doneWhenLabel: "Done when",
        doneWhen:
          "Both accounts are live with 14 days of history, both community channels are open, and localized landing pages are published.",
      },
      {
        id: "phase-2",
        navLabel: "Phase 2, Agency and KOLs",
        title: "Phase 2, Agency and KOLs",
        weekRange: "Weeks 3 to 6",
        whatHappensTitle: "What happens",
        whatHappens: [
          "Agency selection: one agency per market, or one covering both. Criteria: native team on the ground, existing KOL roster with verified engagement data, privacy and infrastructure experience, KakaoTalk and WeChat operations, transparent per-KOL pricing.",
          "Process: shortlist three agencies and run a paid pilot with one.",
          "KOL selection per market: one educator, two to three traders or callers, one infrastructure or research voice. Avoid pure memecoin callers, conversion quality drops.",
          "Briefing: every KOL gets one brief card with AF message pillars, local hooks, referral links, and compliance language.",
        ],
        deliverablesTitle: "Deliverables",
        deliverables: [
          "Agency pilot signed with scope and reporting template.",
          "KOL shortlist finalized, with role per market.",
          "Brief cards sent with tracked referral code format.",
          "First KOL posts scheduled with draft copy.",
        ],
        doneWhenLabel: "Done when",
        doneWhen: "Agency pilot is signed, briefs are sent, and first KOL posts are scheduled.",
      },
      {
        id: "phase-3",
        navLabel: "Phase 3, Original content and activation",
        title: "Phase 3, Original content and activation",
        weekRange: "Weeks 6 to 12",
        whatHappensTitle: "What happens",
        whatHappens: [
          "Weekly content mix per local account: 5 translated posts, 3 original local posts, 1 educational thread, and 1 KOL repost or collaboration. Target two posts per weekday.",
          "Korea formats: YouTube explainer with a Korean educator, KakaoTalk AMA with live translation, and Naver blog article for search.",
          "China formats: Chinese Twitter Space with 2 to 3 KOLs, Bilibili explainer, Binance Square article, and Telegram AMA.",
          "FortressName campaign: localized loyalty program on Galxe with Korean and Chinese quests. First 500 reservations per market get a tier bonus.",
          "Exchange communities: Binance Square Korean and Chinese, OKX and Bybit community channels, and Upbit and Bithumb community boards through agency contacts.",
        ],
        deliverablesTitle: "Deliverables",
        deliverables: [
          "4 weeks of original local content shipped in both markets.",
          "Galxe quests launched in Korean and Chinese.",
          "At least one AMA completed in each market.",
          "Listing window reserve plan ready with KOL and media slots.",
        ],
        doneWhenLabel: "Done when",
        doneWhen:
          "Four weeks of original content are shipped, Galxe quests are live, and at least one AMA per market is completed.",
        contentMix: [
          { label: "Translated posts", count: 5 },
          { label: "Original local posts", count: 3 },
          { label: "Educational thread", count: 1 },
          { label: "KOL repost or collab", count: 1 },
        ],
      },
    ],
    briefCard: {
      title: "KOL brief card, phase 2",
      copyButton: "Copy brief",
      copiedLabel: "Brief copied",
      whatAfIsTitle: "What AF is",
      whatAfIs: [
        "American Fortress is privacy-first transfer infrastructure for real users.",
        "It enables send-by-name and private transfer flows without custody risk.",
        "It is built for compliant usage, with selective disclosure design.",
      ],
      threeMessagesTitle: "Three messages",
      threeMessages: [
        "Send by name, not by long wallet strings.",
        "Private without mixing, user-level privacy controls.",
        "Compliant and non-custodial, designed for real market use.",
      ],
      localHookTitle: "Local hook",
      localHook: [
        "Korea: mention Travel Rule and exchange surveillance pressure.",
        "China: mention address tracking, doxxing risk, and OTC trust issues.",
      ],
      referralLinkTitle: "Referral link",
      referralLink: "https://americanfortress.io/reserve?ref=<market>_<kol>",
      doNotSayTitle: "Do not say",
      doNotSay: [
        "No price talk.",
        "No listing dates.",
        "No anonymous claims, use private instead.",
      ],
    },
    highlightBox:
      "Consider allowing Hangul and Chinese characters in FortressNames as a launch feature for these markets, if the product allows it. This alone can become a story.",
  },
  markets: {
    title: "Market switcher, Korea and China",
    cards: {
      localPainPointLabel: "Local pain point",
      leadMessageLabel: "Lead message",
      avoidLabel: "Avoid",
      channelsLabel: "Channels",
      mediaPartnersLabel: "Media partners",
      statusLabel: "Status",
      openOnX: "Open on X",
      emptyHandle: "Agency fill slot",
    },
    tabs: [
      {
        key: "korea",
        label: "Korea",
        flag: "🇰🇷",
        accent: "#4F8BFF",
        positioning: "Research-first retail market, long-form trust and local context matter.",
        localPainPoint:
          "Travel Rule friction, exchange surveillance, and on-chain visibility of salary and holdings.",
        leadMessage:
          "Privacy that exchanges and regulators can live with. Send by @name, no mixer.",
        avoidMessage:
          "Avoid anonymity framing, KYC evasion hints, or language that sounds like Monero.",
        channels: [
          "X",
          "KakaoTalk open chat, primary",
          "Telegram, secondary",
          "YouTube",
          "Naver blog",
        ],
        mediaPartners: [
          { label: "Block Media", url: "https://www.blockmedia.co.kr" },
          { label: "Coinness", url: "https://coinness.com" },
          { label: "Tokenpost", url: "https://www.tokenpost.kr" },
          { label: "Xangle", url: "https://xangle.io" },
        ],
        kolTitle: "KOL candidates",
        kolSubline:
          "Sourced through the Korean agency in week 3. Priority: YouTube crypto educators, Naver blog writers, X accounts active in Korean DeFi and Arbitrum communities.",
        kols: [
          {
            name: "YouTube educator",
            fit: "Long-form explainer profile for trust-first conversion.",
            type: "Educator",
            status: "Candidate",
            placeholder: true,
          },
          {
            name: "YouTube educator",
            fit: "Second educator for repetition and comparison framing.",
            type: "Educator",
            status: "Candidate",
            placeholder: true,
          },
          {
            name: "Naver blog writer",
            fit: "Search-native content and evergreen discovery.",
            type: "Research",
            status: "Candidate",
            placeholder: true,
          },
          {
            name: "Korean DeFi or Arbitrum X account",
            fit: "Technical audience bridge with daily market cadence.",
            type: "Trader",
            status: "Candidate",
            placeholder: true,
          },
          {
            name: "Korean DeFi or Arbitrum X account",
            fit: "Second technical lane for cross-post rhythm.",
            type: "Trader",
            status: "Candidate",
            placeholder: true,
          },
          {
            name: "Agency pick",
            fit: "Fast replacement slot after pilot performance review.",
            type: "Commentator",
            status: "Candidate",
            placeholder: true,
          },
        ],
      },
      {
        key: "china",
        label: "China",
        flag: "🇨🇳",
        accent: "#E5484D",
        positioning: "Fast-moving overseas Chinese crypto audience, Spaces and threads drive action.",
        localPainPoint:
          "Address tracking, capital control anxiety, wallet doxxing, and OTC risk exposure.",
        leadMessage:
          "Your address is your dox. Fresh address per sender, selective disclosure when you choose.",
        avoidMessage:
          "Avoid mainland-facing content, political framing, and any VPN talk.",
        channels: [
          "X",
          "Telegram, primary",
          "WeChat, agency-run",
          "Bilibili",
          "Binance Square",
        ],
        mediaPartners: [
          { label: "PANews", url: "https://www.panewslab.com" },
          { label: "Odaily", url: "https://www.odaily.news" },
          { label: "ChainCatcher", url: "https://www.chaincatcher.com" },
          { label: "Foresight News", url: "https://foresightnews.pro" },
          {
            label: "Binance Square Chinese",
            url: "https://www.binance.com/zh-CN/square",
          },
        ],
        kolTitle: "KOL candidates, China research set",
        kols: [
          {
            name: "0xSun (孙哥)",
            handleLabel: "@0xSunNFT",
            xUrl: "https://x.com/0xSunNFT",
            fit: "Onchain trader with public wallet behavior and high reach.",
            type: "Trader",
            status: "Candidate",
          },
          {
            name: "杀破狼 WolfyXBT",
            handleLabel: "@Wolfy_XBT",
            xUrl: "https://x.com/Wolfy_XBT",
            fit: "Data and chart style voice, good for research credibility.",
            type: "Research",
            status: "Candidate",
          },
          {
            name: "0xTodd",
            handleLabel: "@0x_Todd",
            xUrl: "https://x.com/0x_Todd",
            fit: "DeFi and infrastructure educator profile for message depth.",
            type: "Educator",
            status: "Candidate",
          },
          {
            name: "加密韋馱 Skanda",
            handleLabel: "@thecryptoskanda",
            xUrl: "https://x.com/thecryptoskanda",
            fit: "Commentator lane with AC Capital alignment.",
            type: "Commentator",
            status: "Candidate",
          },
          {
            name: "Trader or caller",
            fit: "Agency-selected speed lane for listing week attention.",
            type: "Trader",
            status: "Candidate",
            placeholder: true,
          },
          {
            name: "Educator",
            fit: "Agency-selected deep explainer profile.",
            type: "Educator",
            status: "Candidate",
            placeholder: true,
          },
          {
            name: "Research voice",
            fit: "Agency-selected data credibility profile.",
            type: "Research",
            status: "Candidate",
            placeholder: true,
          },
          {
            name: "Agency pick",
            fit: "Flexible reserve slot after first campaign data.",
            type: "Commentator",
            status: "Candidate",
            placeholder: true,
          },
        ],
      },
    ],
  },
  roles: {
    title: "Team and roles",
    columns: [
      {
        owner: "IBC",
        responsibilities: [
          "Strategy ownership and timeline control.",
          "Main-account content and localization oversight.",
          "Agency management and reporting workflow.",
          "Weekly report to AF founders.",
        ],
      },
      {
        owner: "Agency KR",
        responsibilities: [
          "Korean account operation and daily posting.",
          "KakaoTalk community management.",
          "Korean KOL sourcing and activation.",
          "Korean media placement support.",
        ],
      },
      {
        owner: "Agency CN",
        responsibilities: [
          "Chinese account operation and daily posting.",
          "Telegram and WeChat community management.",
          "Chinese KOL sourcing and activation.",
          "Chinese media placement support.",
        ],
      },
      {
        owner: "AF team",
        responsibilities: [
          "Product answers for AMAs and technical Q&A.",
          "Localized landing page deployment.",
          "Referral tracking implementation.",
          "Approval on all paid content before publish.",
        ],
      },
    ],
  },
  budget: {
    title: "Budget outline",
    indicativeBadge: "Indicative",
    totalInputLabel: "Total budget input",
    recommendation:
      "Recommendation: keep 30% unallocated for the listing window, when Asian attention peaks.",
    lineHeader: "Line",
    shareHeader: "Share",
    amountHeader: "Amount",
    totalLabel: "Total",
    chartTitle: "Allocation split",
    lines: [
      { line: "Agency retainers (KR + CN)", sharePercent: 25 },
      { line: "KOL fees (paid posts + referral rewards)", sharePercent: 20 },
      { line: "Media placements", sharePercent: 10 },
      { line: "Translation and localization", sharePercent: 5 },
      { line: "Community incentives (FortressName tier bonuses, AMA rewards)", sharePercent: 10 },
      { line: "Reserve for the $AF listing window", sharePercent: 30 },
    ],
  },
  nextSteps: {
    title: "Next steps",
    weekLabel: "Week",
    ownerLabel: "Owner",
    steps: [
      {
        text: "AF approves account handles and localized brand assets.",
        week: "Week 1",
        owner: "AF",
      },
      {
        text: "IBC shortlists three agencies per market and shares pricing.",
        week: "Week 1",
        owner: "IBC",
      },
      {
        text: "Accounts go live, translation phase starts.",
        week: "Week 2",
        owner: "IBC + Agencies",
      },
      {
        text: "Agency pilot signed, KOL briefs sent.",
        week: "Week 3",
        owner: "IBC",
      },
      {
        text: "First localized Galxe quests go live.",
        week: "Week 4",
        owner: "AF + IBC",
      },
    ],
  },
  closing: {
    band: "Korea researches before it acts. China moves on Spaces and threads. The plan meets each market where it already is.",
    contactPrefix: "Contact",
    preparedBy: "IBC, prepared by Alpay Aktuğ",
    email: "contact@ibc.agency",
    xLabel: "American Fortress on X",
    xUrl: "https://x.com/Americanfort_io",
  },
};
