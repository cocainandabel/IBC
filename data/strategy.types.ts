export type LocaleCode = "en" | "ko" | "zh";

export type LinkItem = {
  label: string;
  url: string;
};

export type HeroStat = {
  value: number;
  suffix: string;
  label: string;
};

export type PhaseData = {
  id: string;
  navLabel: string;
  title: string;
  weekRange: string;
  whatHappensTitle: string;
  whatHappens: string[];
  deliverablesTitle: string;
  deliverables: string[];
  doneWhenLabel: string;
  doneWhen: string;
  contentMix?: Array<{
    label: string;
    count: number;
  }>;
};

export type BriefCardData = {
  title: string;
  copyButton: string;
  copiedLabel: string;
  whatAfIsTitle: string;
  whatAfIs: string[];
  threeMessagesTitle: string;
  threeMessages: string[];
  localHookTitle: string;
  localHook: string[];
  referralLinkTitle: string;
  referralLink: string;
  doNotSayTitle: string;
  doNotSay: string[];
};

export type KolStatus = string;

export type KolCardData = {
  name: string;
  handleLabel?: string;
  xUrl?: string;
  fit: string;
  type: string;
  status: KolStatus;
  placeholder?: boolean;
};

export type MarketData = {
  key: string;
  label: string;
  flag: string;
  accent: string;
  positioning: string;
  localPainPoint: string;
  leadMessage: string;
  avoidMessage: string;
  channels: string[];
  mediaPartners: LinkItem[];
  kolTitle: string;
  kolSubline?: string;
  kols: KolCardData[];
};

export type RoleColumn = {
  owner: string;
  responsibilities: string[];
};

export type BudgetLine = {
  line: string;
  sharePercent: number;
};

export type NextStep = {
  text: string;
  week: string;
  owner: string;
};

export type StrategyLocaleData = {
  locale: LocaleCode;
  meta: {
    title: string;
    description: string;
  };
  header: {
    wordmark: string;
    localeLabel: string;
  };
  gate: {
    title: string;
    subtitle: string;
    inputLabel: string;
    inputPlaceholder: string;
    button: string;
    error: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stats: HeroStat[];
    seePlanCta: string;
    downloadCta: string;
    downloadHref: string;
    footer: string;
  };
  objectives: {
    title: string;
    cards: string[];
  };
  timeline: {
    title: string;
    phases: PhaseData[];
    briefCard: BriefCardData;
    highlightBox: string;
  };
  markets: {
    title: string;
    tabs: MarketData[];
    cards: {
      localPainPointLabel: string;
      leadMessageLabel: string;
      avoidLabel: string;
      channelsLabel: string;
      mediaPartnersLabel: string;
      statusLabel: string;
      openOnX: string;
      emptyHandle: string;
    };
  };
  roles: {
    title: string;
    columns: RoleColumn[];
  };
  budget: {
    title: string;
    indicativeBadge: string;
    totalInputLabel: string;
    recommendation: string;
    lineHeader: string;
    shareHeader: string;
    amountHeader: string;
    totalLabel: string;
    chartTitle: string;
    lines: BudgetLine[];
  };
  nextSteps: {
    title: string;
    weekLabel: string;
    ownerLabel: string;
    steps: NextStep[];
  };
  closing: {
    band: string;
    contactPrefix: string;
    preparedBy: string;
    email: string;
    xLabel: string;
    xUrl: string;
  };
};
