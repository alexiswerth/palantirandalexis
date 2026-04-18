# Alexis Werth | Tailored Role Application Site

A single-page personal site that tailors itself to a specific job posting. All
role-specific copy lives in **one config object** so the entire page (hero,
nav, CTA, Job Match section, and SEO meta tags) can be retargeted to a new
role with one edit.

## Swapping to a different role

All role-specific content lives in `src/lib/siteConfig.ts` under the
`targetRole` constant. To target a new posting:

1. Open `src/lib/siteConfig.ts`.
2. Edit the fields inside `const targetRole: TargetRole = { ... }`.
3. Save. The dev server hot-reloads the React UI; SEO tags update on the next
   page reload (the Vite plugin re-reads the file).

A commented-out `targetRoleExample` block (Stripe Commercial Counsel) sits
right below the active `targetRole` as a starting template. Copy its fields
over the active block and update the values.

## What each field drives

| Field | Where it appears |
|---|---|
| `company` | Job Match identity row (with building icon) and JSON-LD `name` |
| `role` | Job Match identity row (with briefcase icon) |
| `location` | Job Match identity row (with map-pin icon) |
| `url` | "View the original job posting" link below the match cards |
| `heroSuffix` | Currently unused in UI (kept for future suffix line under name) |
| `tagline` | Hero shimmer line under the name |
| `bio` | Hero paragraph under the tagline |
| `ctaLabel` | Hero CTA button text (e.g. "See Why I Fit Palantir") |
| `navLabel` | First nav link label (e.g. "Why Palantir") |
| `badgeLabel` | Pill badge above Job Match heading (e.g. "Tailored Application") |
| `sectionHeading` | Job Match section `<h2>` (e.g. "Why I'm Built for This Role") |
| `matches[]` | Grid of requirement / proof cards in the Job Match section |
| `seoTitle` | `<title>`, og:title, twitter:title, JSON-LD WebSite/WebPage `name` |
| `seoDescription` | meta description, og:description, twitter:description, JSON-LD `description` |
| `seoOgImageAlt` | og:image:alt, twitter:image:alt, image:alt |

### How SEO injection works

`index.html` uses `{{placeholder}}` tokens for SEO fields. At dev/build time,
the Vite plugin in `vite-plugins/target-role-seo.ts` reads `siteConfig.ts`,
parses the `targetRole` literal with a regex, and replaces the tokens with
the parsed values. No runtime overhead, no `react-helmet`.

Supported tokens: `{{seoTitle}}`, `{{seoDescription}}`, `{{seoOgImageAlt}}`,
plus `{{company}}`, `{{role}}`, `{{location}}`, `{{url}}` if you want to use
them in `index.html`.

## Tech stack

React 18, Vite 5, TypeScript 5, Tailwind CSS v3, shadcn/ui, framer-motion,
React Router. Tests: Vitest + Testing Library + Playwright.

## Local development

```sh
npm install
npm run dev      # http://localhost:8080
npm test         # vitest
npm run build    # production build
```

## Project structure

```
src/
  components/         # Section components (Hero, JobMatch, Experience, ...)
  lib/
    siteConfig.ts     # SINGLE SOURCE OF TRUTH for all content
    persistence.ts    # Scroll position persistence
    perf.ts           # Perf utilities
  pages/
    Index.tsx         # Single-page composition with lazy sections
vite-plugins/
  target-role-seo.ts  # Build-time SEO injection from targetRole
index.html            # Contains {{placeholder}} tokens for SEO
```
