# American Fortress, Asia Market Strategy Microsite

Single-page proposal microsite for IBC's 90-day Korea and China go-to-market plan for American Fortress.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Recharts
- Vercel Analytics

## Setup

```bash
npm i
```

Create `.env.local`:

```bash
NEXT_PUBLIC_SITE_PASSCODE=fortress
```

If the variable is missing, the app defaults to `fortress`.

## Run

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build and lint

```bash
npm run build
npm run lint
```

## Deploy to Vercel

Zero-config deployment:

```bash
npx vercel --prod
```

If this is your first deploy on this machine:

```bash
npx vercel login
npx vercel link --project <your-project-name>
npx vercel --prod
```

## Content and locales

Strategy content is locale-driven:

- `data/strategy.en.ts`
- `data/strategy.ko.ts`
- `data/strategy.zh.ts`
- `data/strategy.ts` locale map and defaults

Shared typing is in `data/strategy.types.ts`.

## Key components

- `components/StrategyMicrosite.tsx`
- `components/PasscodeGate.tsx`
- `components/TimelineSection.tsx`
- `components/MarketTabs.tsx`
- `components/BudgetOutline.tsx`
- `components/BriefCard.tsx`

## Brand assets

- Wordmark is text-rendered by design.
- Placeholder slot for a future official logo is at `public/brand/logo.svg`.

## PDF export

Use browser print:

1. Open the page.
2. Press print (`Cmd+P` or `Ctrl+P`).
3. Save as PDF.

Print CSS hides motion-heavy UI and keeps sections readable.
