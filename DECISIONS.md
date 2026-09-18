# Implementation decisions

## Scope

1. Replaced the previous landing page with a dedicated SAAR proposal page and kept the project on Next.js App Router.
2. Kept all business copy and numeric values in `data/offer.ts` and `data/kols.ts` only, with typed exports.

## Performance-first choices

3. Enabled static export via `output: "export"` in `next.config.mjs`, no API routes and no runtime data fetching.
4. Removed animation and chart libraries from runtime usage. Scroll reveals and counters use a small IntersectionObserver-based client hook.
5. Removed analytics and other third-party scripts to minimize JavaScript and network overhead.
6. Used only `Inter` and `Space Grotesk` from `next/font/google`, `display: "swap"`, and limited weights.
7. Used inline SVG donut rendering for allocation chart to avoid a chart dependency.

## UI and behavior

8. Implemented a passcode gate with `NEXT_PUBLIC_SITE_PASSCODE` fallback `saar`, storing unlock state in `sessionStorage`.
9. Implemented only the required interactive client state: passcode gate, KOL tabs, and counters.
10. Kept brand slots as TODO assets at `public/brand/saar.png` and `public/brand/ibc.svg`, while rendering text wordmarks by default.

## Lighthouse

11. Lighthouse mobile results are recorded after local static build and test execution.
