# Celltek Studios website (Next.js)

Next.js 16 (App Router) + React 19 + TypeScript, with GSAP, Lenis and three.js for motion.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Where things live

| What | Where |
|---|---|
| Pages (each one is a short list of sections) | `app/` |
| Header, mobile menu, footer, cursor, preloader, motion loader | `components/layout/` |
| Page sections (hero, case studies, process, FAQ, CTA, gallery...) | `components/sections/` |
| Small building blocks (Button, Section, Container, Eyebrow, Lead, SectionHead, Placeholder) | `components/ui/` |
| Book a demo form | `components/forms/` |
| Menu links | `content/navigation.ts` |
| Text and images of shared sections | `content/site.ts` |
| Service and case study text | `content/services.json`, `content/projects.json` (read by `lib/content.ts`) |
| Phone, WhatsApp, email | `lib/content.ts` (`contact`) |
| Design tokens (colours, fonts, type sizes, spacing, breakpoints) | `app/globals.css` (`@theme`) |
| Animation-only styles | `app/effects.css` |
| All motion (preloader, 3D hero, pinned scenes, cursor) | `lib/site-motion.js`, started by `components/layout/Motion.tsx` |
| Images | `public/img/` |
| Lead form endpoint | `app/api/lead/route.ts` |

Striped placeholder boxes (`<Placeholder>`) mark content still to come; each matches a row in the content sheet.

## Styling: Tailwind CSS v4

- Every colour, font, type size, spacing step and breakpoint is a token in `app/globals.css` under `@theme`, so classes read like `text-display`, `px-gutter`, `py-section`, `bg-ink`, `text-accent-hi`, `rounded-card`. Change a token once and the whole site follows.
- Breakpoints are mobile first: `sm` 560px, `md` 760px, `lg` 1000px.
- Light sections use `<Section tone="paper">`; children switch colour with the `paper:` variant (for example `text-muted paper:text-on-paper-muted`). The blue CTA uses `on-accent:` the same way.
- Use `cn()` from `lib/cn.ts` to combine classes; a size passed in `className` replaces the component's default.

### Rules for the animation layer

`lib/site-motion.js` finds elements by class name and id (`split`, `eyebrow`, `lead`, `reveal`, `zoom`, `pills`, `stage`, `step`, `card`, `case`, `panel`, `proc`, `dd`, `menu`, `burger`, `#rail`, `#zcard` and others). Those names are kept on purpose next to the Tailwind classes, so don't remove them.

- Styles the script depends on (states it toggles such as `.open`, `.on`, `.lit`, starting positions it animates from, overlays and keyframes) live in `app/effects.css`, inside `@layer components`.
- Don't put Tailwind `translate-*`, `scale-*` or `rotate-*` utilities on an element GSAP animates. Tailwind v4 writes them as separate CSS properties that stack with GSAP's `transform`.

## Leads

The Book a demo form posts to `/api/lead`. Set `LEAD_WEBHOOK_URL` (e.g. a Zapier, Make, Google Apps Script or CRM webhook) and every lead is forwarded there as JSON. Without it, leads are only logged on the server.

## Important: links are plain `<a>` tags

Internal links deliberately use `<a href>` instead of `next/link`, so each page change is a full page load. The GSAP pinned sections add wrapper elements to the DOM, which clash with React's client-side page swaps. Keep plain links unless the motion layer is reworked per page.

## Deploy

Push to GitHub and import the repo on Vercel (no extra settings). Add `LEAD_WEBHOOK_URL` under Project Settings > Environment Variables.
# the-final-celltek-frontend
