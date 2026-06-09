@AGENTS.md

## Architecture notes (confirmed in repo)
- Source of truth for portfolio entries: `creativeWork` / analytic arrays in `src/.../site-data.ts`. Adding an entry there auto-wires the listing, track filter, logo gallery, `/work/[slug]` detail, `/work/[slug]/source`, sitemap, and brandCount.
- Accent: a SINGLE cobalt token. There is NO amber/teal. Creative vs Analytic is the `track` field + filter, not colour.
- Logo theming: shared `.logo-mark` CSS — dark mode applies `grayscale(1) invert(1) brightness(1.5)`. Colour logos resolve to clean monochrome. No per-logo light/dark asset pairs.
- Brand briefs live in `Brand Briefs/`, referenced as-named in the entry's `file`. Logos in `public/logos/{slug}.png`.
- `brandCount` = portfolio/project count (fine to show). The protected figure is the in-house product-brand count — never reference that.
- Routes: `/work/[slug]` = detail; `/work/[slug]/source` = serves the brief HTML.
