# Tiasha AI Vista — Website

Premium marketing site for **Tiasha AI Vista** (AI Automation Solutions).
*Your Vista to AI-Driven Growth.*

Built with **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · lucide-react**.
Fully static output — every section prerenders at build time.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # ESLint
npm run build    # production build (static)
npm start        # serve production build
```

## Lead form email delivery

The consultation form (`src/components/CTABanner.tsx`) posts to `src/app/api/lead/route.ts`, which emails the submission via [Resend](https://resend.com).

1. Copy `.env.local.example` to `.env.local`.
2. Sign up at resend.com (free tier), grab an API key, and set `RESEND_API_KEY`.
3. Set `LEAD_TO_EMAIL` to the inbox that should receive enquiries.
4. For production, verify a sending domain in Resend and set `LEAD_FROM_EMAIL` to an address on it — the default `onboarding@resend.dev` sandbox address only reliably delivers to the account owner's own email.
5. On your host (Vercel, etc.), add the same three variables as environment variables — `.env.local` is git-ignored and never deployed.

Without these variables set, `/api/lead` returns a 500 and the form shows an inline error asking the visitor to WhatsApp instead.

## Deploy

**Vercel (recommended):** push this folder to a Git repo, import it at vercel.com — zero config needed. Set the production domain, then update `siteUrl` in `src/app/layout.tsx` and the URLs in `src/app/sitemap.ts` / `src/app/robots.ts`.

**Any Node host:** `npm run build && npm start` behind a reverse proxy.

## Where things live

| Path | Purpose |
| --- | --- |
| `src/lib/data.ts` | **All copy and content** — solutions, industries, FAQs, pricing, testimonials, contact details. Edit here first. |
| `src/app/globals.css` | Design tokens (brand colors, dark mode, motion). |
| `src/app/layout.tsx` | Fonts, SEO metadata, OpenGraph, Organization JSON-LD. |
| `src/app/page.tsx` | Section composition + FAQPage JSON-LD. |
| `src/components/` | One component per section; `ui/` holds shared primitives (Button, Reveal, SectionHeading, Icon). |
| `public/logo.png` | Brand logo (used in navbar, footer, OG image). |

## Design system

- **Colors:** forest `#0F3B2E`, emerald `#2F7D57`, gold `#D4AF37`, cream `#FAF8F2`, ink `#1B1B1B`. Semantic tokens (`--bg`, `--surface`, `--text`, …) switch with the `.dark` class.
- **Type:** Manrope (display) + Inter (body) via `next/font` — self-hosted, zero layout shift.
- **Cards:** 12 px radius, soft layered shadows, hover elevation.
- **Motion:** IntersectionObserver reveals, counter animation, CSS keyframe micro-interactions. All animations respect `prefers-reduced-motion`.
- **Dark mode:** class-based, persisted in `localStorage`, defaults to system preference (no flash — inline script in `<head>`).

## To finish before launch

1. **Lead form** — wired to `/api/lead` (Resend email). Set `RESEND_API_KEY` / `LEAD_TO_EMAIL` per the section above.
2. **Newsletter form** (`src/components/Footer.tsx`) — still a placeholder. Wire to Resend, your CRM, or an n8n/Zapier webhook.
3. **Email address** — `hello@tiashaaivista.com` in `src/lib/data.ts` is a placeholder; replace with the real inbox.
4. **LinkedIn URL** in `src/lib/data.ts`.
5. **Privacy Policy / Terms** pages (footer links are stubs).
6. **Testimonials & case studies** in `src/lib/data.ts` are illustrative — replace with real client results before publishing.
7. **Domain** — replace `www.tiashaaivista.com` in `layout.tsx`, `sitemap.ts`, `robots.ts`.
