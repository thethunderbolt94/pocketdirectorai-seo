# Pocket Director AI — SEO Pages Integration Guide

**Branch:** `feature/seo-month-1`
**Owner:** Marketing / Growth
**Status:** Ready for review & integration
**Last updated:** March 23, 2026

---

## What This Is

This repo contains a fully-built set of SEO landing pages and blog posts for **pocketdirectorai.com**, built as a Next.js 14 App Router project.

These pages are designed to:
- Capture organic search traffic for high-intent keywords (AI product photography, UGC video generator, etc.)
- Rank in Google AI Overviews, Perplexity, and ChatGPT cited results
- Drive free trial signups via targeted landing pages

**Projected impact:** 8,000–15,000 monthly organic visitors within 12 months. Estimated CAC reduction vs. paid: ~60–70%.

---

## Pages Built

### Landing Pages (Persona Targeting)
| Route | Target Keyword | Monthly Search Volume |
|---|---|---|
| `/amazon-sellers` | Amazon product photography AI | 1,900 |
| `/shopify-brands` | Shopify product photography tool | 1,200 |
| `/etsy-sellers` | AI product photos for Etsy | 880 |
| `/ugc-videos` | AI UGC video generator | 1,600 |

### Competitor Alternative Pages (High-Intent)
| Route | Target Keyword | Monthly Search Volume |
|---|---|---|
| `/alternatives/photoroom` | Photoroom alternative | 2,900 |
| `/alternatives/flair-ai` | Flair AI alternative | 590 |
| `/alternatives/pebblely` | Pebblely alternative | 480 |

### Blog Posts (Month 1 — Foundation)
| Route | Target Keyword | Monthly Search Volume |
|---|---|---|
| `/blog/ai-product-photography-complete-guide` | AI product photography | 8,100 |
| `/blog/how-to-take-product-photos-without-photographer` | how to take product photos without a photographer | 1,300 |
| `/blog/product-photography-cost-breakdown` | product photography cost | 1,100 |

### Technical SEO
| File | Purpose |
|---|---|
| `app/sitemap.ts` | Auto-generates `sitemap.xml` — submit to Google Search Console |
| `app/robots.ts` | Allows all search + AI crawlers (GPTBot, PerplexityBot, ClaudeBot, Google-Extended) |
| `app/layout.tsx` | Global meta, Open Graph, Twitter Card, Organization schema |

---

## How to Integrate into the Main Codebase

### Option A — Copy Pages Into Existing Next.js App (Recommended)

If your main site is already on Next.js App Router:

1. Copy all folders from `/app/` into your main app's `/app/` directory
2. Merge `app/layout.tsx` — don't overwrite, merge the metadata and schema into your existing layout
3. Copy `app/sitemap.ts` and `app/robots.ts` — or merge if you already have these
4. Remove the default Next.js `globals.css` styles if your main app has its own design system
5. Update the `metadataBase` URL in `layout.tsx` if different from `https://pocketdirectorai.com`

```bash
# From the SEO repo root, copy pages to your main app
cp -r app/blog /path/to/main-app/app/
cp -r app/amazon-sellers /path/to/main-app/app/
cp -r app/shopify-brands /path/to/main-app/app/
cp -r app/etsy-sellers /path/to/main-app/app/
cp -r app/ugc-videos /path/to/main-app/app/
cp -r app/alternatives /path/to/main-app/app/
cp app/sitemap.ts /path/to/main-app/app/
cp app/robots.ts /path/to/main-app/app/
```

### Option B — Deploy as Standalone Site (Vercel)

Deploy this repo directly to Vercel and point a subdomain or path prefix to it:
- `seo.pocketdirectorai.com` — easiest, fully independent
- `pocketdirectorai.com/blog` — requires Vercel rewrites or a monorepo setup

### Option C — Use as Reference Only

If your main site uses a different stack (Webflow, Shopify, etc.), use this as a reference for:
- The exact page copy and structure for each route
- The schema markup (JSON-LD) to embed in your existing pages
- The keyword targeting and metadata per page

---

## Styling Notes

- **Design system:** Tailwind CSS with indigo as the primary brand color (`indigo-600`)
- **Font:** Geist Sans (Next.js default)
- **Components:** No third-party component libraries — pure Tailwind for easy portability
- **If your app uses a different design system:** The pages are intentionally plain so they're easy to re-skin. Replace Tailwind classes with your own component imports.

---

## Schema Markup Implemented

Each page includes JSON-LD structured data:

| Page | Schema Type | Benefit |
|---|---|---|
| Homepage | `FAQPage` + `SoftwareApplication` + `Organization` | Rich snippets, star ratings in SERPs |
| Blog posts | `Article` or `HowTo` | Article rich results, how-to steps in SERPs |
| Amazon/Shopify pages | `FAQPage` | FAQ rich snippets |
| UGC Videos page | `SoftwareApplication` | App listing in search results |
| Alternative pages | *(implicit via content structure)* | Comparison content for AI citation |

---

## Priority Actions After Integration

### Ship This Week (High Impact, Low Effort)
- [ ] Merge homepage `<title>` change: `AI Product Photography Tool — Studio-Quality Photos in Minutes | Pocket Director AI`
- [ ] Merge homepage `meta description`: *"Generate professional product photos and UGC-style videos with AI. No studio, no photographer. Start free with 200 credits — results in under 4 minutes. Used by 100+ e-commerce brands."*
- [ ] Add `FAQPage` + `SoftwareApplication` schema to homepage
- [ ] Deploy `/sitemap.xml` and submit to Google Search Console
- [ ] Verify `robots.txt` is live and not blocking crawlers

### Ship This Month
- [ ] Deploy all 4 landing pages (`/amazon-sellers`, `/shopify-brands`, `/etsy-sellers`, `/ugc-videos`)
- [ ] Deploy all 3 blog posts
- [ ] Deploy 3 alternative pages

### Track Performance
- Set up Google Search Console with the new sitemap
- Track rankings for target keywords in Ahrefs or SEMrush
- Monitor organic clicks monthly — target: 100 clicks/month by Month 2, 500/month by Month 3

---

## Questions?

Reach out to the marketing team or check `SEO_STRATEGY.md` for the full 90-day plan, keyword targets, and KPIs.
