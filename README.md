# IBC x SAAR, $35K Growth Package Proposal Microsite

Single-page proposal microsite for the SAAR team, built as a fast mobile-first pitch from IBC.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- App Router static export (`output: "export"`)

## Setup

```bash
npm i
```

## Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build and lint

```bash
npm run build
npm run lint
```

Static output is generated in `out/`.

## Deploy to Vercel

Zero-config deployment:

```bash
npx vercel --prod
```

## Content and locales

All copy, numbers, and section lists are data-driven:

- `data/offer.ts`
- `data/kols.ts`

## Component map

- `components/SaarProposalPage.tsx`
- `components/Hero.tsx`
- `components/CompareCards.tsx`
- `components/PackageGrid.tsx`
- `components/AllocationChart.tsx`
- `components/Timeline.tsx`
- `components/KpiCards.tsx`
- `components/KolTabs.tsx`
- `components/WhyIbc.tsx`
- `components/Terms.tsx`
- `components/ClosingBand.tsx`

## Brand assets

- TODO slot for SAAR: `public/brand/saar.png`
- TODO slot for IBC: `public/brand/ibc.svg`
- Page currently renders text wordmarks until real files are provided.
