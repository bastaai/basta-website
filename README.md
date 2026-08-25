# Basta website

Marketing site for [Basta](https://basta.app) — an out-of-the-box auctions platform.
Built from the Figma design (front page + brand strategy).

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 (theme tokens in `src/app/globals.css`)
- **Dev domain:** https://wtf.basta.app
- **Deploys:** GitHub Actions → Vercel (preview per PR, production on `main`)

## Getting started

```bash
pnpm install
pnpm dev            # http://localhost:3000
pnpm build          # production build + typecheck
```

## Project structure

```
src/
  app/
    layout.tsx            # fonts, metadata, header/footer shell
    page.tsx              # home page (composes the sections below)
    globals.css           # brand tokens + utilities (@theme)
    about, customers, jobs, contact, book-a-demo, case-studies/…,
    product/…, solutions/…   # marketing sub-pages (one page.tsx each)
  components/
    site-header.tsx       # top bar, side rails, slide-in menu
    site-footer.tsx       # footer nav + giant BASTA wordmark
    basta-logo.tsx        # BASTA wordmark (inline SVG, from Figma 1:64)
    marketing.tsx         # shared sub-page sections (hero, feature grid, CTA, …)
    demo-form.tsx         # contact / demo form (mailto)
    ui/button-link.tsx    # pill button variants
    home/                 # hero, stats-bar, showcase, case-study, dev-talk, get-started
  lib/site.ts             # single source of truth for all nav links + CTAs
public/assets/            # product photos, logos, brand imagery (exported from Figma)
```

### Sub-pages

Every menu link resolves to a real, on-brand page built from the shared
sections in `src/components/marketing.tsx`. Content was drawn from the brand
strategy (voice), the developer docs (product facts), and the live site
(positioning). Developer-docs links point out to `https://docs.basta.app/`.

## Fonts

The brand uses **Maison Neue** and **Maison Neue Mono**, which are commercial and
not bundled here. We currently substitute **Inter** (body) and **Space Mono**
(display) via `next/font` in `src/app/layout.tsx`. To use the licensed fonts,
swap those two imports and update `--font-sans` / `--font-mono` in `globals.css` —
nothing else needs to change.

## Deployment

Deploys use Vercel's **native Git integration** — no GitHub Actions, no tokens
to maintain. The `bastaai/basta-website` repo is connected to the Vercel project
`basta-website` (team: Basta).

- Push / merge to `main` → **production** deploy (`basta-website.vercel.app`).
- Any other branch or PR → automatic **preview** deploy.

Branch protection limits pushes to `main` to the two maintainers, so only they
can trigger a production deploy.

**One-time connect** (Vercel dashboard): Project `basta-website` → Settings →
Git → Connect Git Repository → `bastaai/basta-website` (install the Vercel GitHub
App on the `bastaai` org if prompted). After connecting, the old
`VERCEL_TOKEN` / `VERCEL_ORG_ID` / `VERCEL_PROJECT_ID` GitHub secrets are no
longer used and can be deleted.
