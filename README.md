# Web3 Twitter Intelligence Platform

Production-ready foundation for analyzing Web3 client Twitter/X accounts around KOL posts.

## Features

- Before vs after KOL comparison graph
- Indicators:
  - CoinMarketCap token price movement
  - Twitter follower growth
  - Engagement rate delta
  - Top posts (before/after)
  - ROI calculation and breakdown
- Timeline chart with KOL post marker

## Stack

- Frontend: HTML/CSS/Vanilla JS
- Backend: Node.js + Express
- Database: PostgreSQL
- External market data: CoinMarketCap API

## Project structure

- `index.html`, `style.css`, `app.js` - dashboard UI
- `src/server.js` - API server
- `src/routes/*` - API routes
- `src/services/*` - analytics and CoinMarketCap integration
- `src/lib/db.js` - PostgreSQL pool + helpers
- `db/migrations/001_init.sql` - schema
- `db/seeds/001_seed.sql` - initial seed data
- `src/scripts/*` - migration, seed, CMC sync scripts

## 1) Environment setup

Copy the environment example:

```bash
cp .env.example .env
```

Required variables:

- `PORT` (default `8080`)
- `DATABASE_URL` (PostgreSQL connection string)
- `CMC_API_KEY` (for live CoinMarketCap sync)
- `CMC_BASE_URL` (default `https://pro-api.coinmarketcap.com`)

## 2) Install dependencies

```bash
npm install
```

## 3) Prepare database

Run migrations and seed:

```bash
npm run db:migrate
npm run db:seed
```

## 4) Start the platform

```bash
npm run start
```

Open `http://localhost:8080`.

For development with auto-reload:

```bash
npm run dev
```

## 5) Sync live CoinMarketCap prices

```bash
npm run sync:cmc
```

This updates latest token prices for all projects in the database and stores them in `price_snapshots`.

## API overview

- `GET /api/health`
- `GET /api/projects`
- `GET /api/projects/:projectId/campaigns`
- `GET /api/projects/:projectId/campaigns/:campaignId/analytics`

The frontend consumes these APIs and falls back to local seeded demo data if the API is unavailable.

## ROI formula

```txt
ROI % = ((token_return_value - campaign_spend) / campaign_spend) * 100
```

Where:

```txt
token_return_value = (price_after - price_before) * tokens_allocated_to_campaign
```

## Deploy

### Vercel

- `vercel.json` is included to serve static frontend files.
- For full backend + database runtime, deploy API/server on a Node host (Render/Fly/Railway) and point frontend API base URL to that host.

### Suggested production topology

- Frontend: Vercel/Netlify
- API: Render/Fly/Railway
- Database: managed PostgreSQL (Neon/Supabase/RDS)

