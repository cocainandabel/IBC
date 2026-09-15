# Binance Turkey Event Scenarios Microsite

Production-grade single-page microsite built for pitching three event activation routes for Binance Turkey.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Recharts

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

The project is deployable to Vercel with zero config.

## Project structure

- `app/page.tsx`: page composition
- `data/scenarios.ts`: all copy, numbers and scenario content
- `components/*`: small UI blocks
- `lib/partnerMedia.ts`: YouTube and fallback media resolver
- `scripts/fetch-partners.ts`: partner media generation script

## YouTube API key setup

Create `.env.local`:

```bash
YOUTUBE_API_KEY=your_key_here
```

If this key exists, partner cards fetch latest channel media at build/render time.

## Generate static partner media

To make the site fully static after one data pull:

```bash
npm run fetch:partners
```

This script writes:

- `data/partners.generated.json` with avatar path and recent video IDs
- `public/partners/<slug>.jpg` avatar images

## No API key fallback

Without `YOUTUBE_API_KEY`:

- The app reads `featuredVideoIds` and `recentVideoIds` from `data/scenarios.ts`.
- If arrays are empty, it shows tasteful placeholders instead of broken images.
- Avatar fallback expects local files in `public/partners/<slug>.jpg`.

Partner video IDs are left with clear TODO comments in `data/scenarios.ts`.

## Swap partner images

Replace any fallback image by copying your file to:

```bash
public/partners/<slug>.jpg
```

Examples:

- `public/partners/elraenn.jpg`
- `public/partners/socrates-dergi.jpg`
- `public/partners/htalks.jpg`

## Export as PDF

Use browser print:

1. Open the deployed page.
2. Press print (`Cmd+P` or `Ctrl+P`).
3. Save as PDF.

A dedicated `@media print` stylesheet is included:

- hides sticky nav, motion-heavy elements and iframes
- keeps layout readable on paper
- keeps charts visible in print output

## Content editing

Edit all scenario content from one file:

```bash
data/scenarios.ts
```

This includes:

- hero copy and stat chips
- ROI strip cards
- scenario objectives, steps, budgets and KPIs
- partner metadata and fallback video IDs
