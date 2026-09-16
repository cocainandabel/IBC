# Implementation decisions

## Scope and architecture

1. Kept the project in the existing Next.js repository and replaced the page composition with the new American Fortress strategy microsite. This reduced setup time and kept Vercel deployment continuity.
2. Implemented locale data as `data/strategy.en.ts`, `data/strategy.ko.ts`, and `data/strategy.zh.ts`, with `data/strategy.ts` as the central map and defaults file.
3. Added `data/strategy.types.ts` as a shared typed contract so components do not hardcode content and can render any locale object.

## Passcode and indexing

4. Implemented a client-side passcode gate using `NEXT_PUBLIC_SITE_PASSCODE` with fallback `fortress`.
5. Stored unlock state in `sessionStorage` for the active tab session.
6. Added `robots` noindex and nofollow metadata in `app/layout.tsx`.

## UX and visual behavior

7. Used a text wordmark `AMERICAN FORTRESS` in the header and added `/public/brand/logo.svg` as a TODO placeholder slot, without rendering it by default.
8. Added a locale toggle with `localStorage` persistence and safe try/catch guards.
9. Implemented phase navigation as smooth scroll buttons and market switching as sticky tabs.
10. Added a content-mix pill row in phase 3 to satisfy the required weekly mix visualization.

## Budget and metrics behavior

11. Set the default editable budget to `$150,000` via `defaultBudgetTotal` in `data/strategy.ts`.
12. Budget dollar amounts are recomputed live from the editable total input and percentage shares from strategy data.

## Translation note

13. Korean and Chinese locale files are first-pass translations and are explicitly marked with `// TODO: native review`.
