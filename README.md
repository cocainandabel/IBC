# Web3 Twitter Intelligence Platform

A lightweight platform to analyze Twitter performance for Web3 clients, focused on **before vs after KOL post impact**.

## What this MVP includes

- Client and campaign selector (project + KOL post)
- Comparison graph for pre/post metrics:
  - Followers
  - Engagement rate
  - Average engagement per post
  - Token price
- Timeline graph around KOL post:
  - Token price trend (CoinMarketCap-style indicator)
  - Twitter follower trend
- KPI cards:
  - Current token price and % change
  - Current followers and growth
  - Engagement rate and delta
  - ROI
- Top posts tables:
  - Top pre-KOL posts
  - Top post-KOL posts
- ROI breakdown:
  - Campaign spend
  - Token return value
  - Net value
  - Cost per new follower
  - Cost per engagement

## Data currently used

The dashboard currently ships with seeded demo data (`app.js`) for multiple Web3 projects and campaigns.

To connect real data:

- Replace the seeded `projects` object with API responses from:
  - CoinMarketCap API (token price history)
  - X/Twitter API (followers, tweet metrics, post details)
- Keep the same shape used by the rendering functions:
  - `campaign.timeline` for date/price/follower points
  - `campaign.posts` for tweet-level engagement

## Run locally

Because this is a static frontend, you can run it with any simple web server:

```bash
python -m http.server 8080
```

Then open:

`http://localhost:8080`

## ROI formula used

```txt
ROI % = ((token_return_value - campaign_spend) / campaign_spend) * 100
```

Where:

- `token_return_value = (price_after - price_before) * tokens_allocated_to_campaign`
