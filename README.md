# The Alter Ego — Official Website

Custom Shopify flagships and art direction for fashion and lifestyle brands. Built with Next.js, WebGL mesh gradients, scroll-driven metamorphosis on the home page, and high-contrast glass UI.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Assets to upload

Place files under `public/` using the paths below. After adding assets, update the matching `src/` files noted in each section (or replace Unsplash URLs in `src/lib/portfolio.ts` and `HomePhotoGallery.tsx`).

### Brand & identity

| Asset | Path | Notes |
|--------|------|--------|
| Logo (SVG or PNG) | `public/images/logo.svg` | Used in header/footer when wired in `SiteHeader.tsx` |
| Favicon | `public/favicon.ico` | Browser tab icon |
| Apple touch icon | `public/apple-touch-icon.png` | 180×180px |

### Founder (About page)

| Asset | Path | Notes |
|--------|------|--------|
| Your portrait | `public/images/trey-may.jpg` | Portrait, ~1200×1600px recommended. Shown on **About** via `FounderPhoto.tsx` |

### Home page — metamorphosis & gallery (3 images)

| Asset | Path | Notes |
|--------|------|--------|
| Hero / lookbook still | `public/images/home/hero-lookbook.jpg` | Large left tile — update `FEATURED.hero` in `src/components/home/HomePhotoGallery.tsx` |
| Shopify capture | `public/images/home/shopify-storefront.jpg` | Top-right tile |
| Art direction still | `public/images/home/art-direction.jpg` | Bottom-right tile |

### Services page — example carousels

Horizontal scroll galleries on **Services** for Shopify and Art Direction. Edit the list in `src/lib/service-examples.ts` or drop files here:

| Service | Folder | Config |
|---------|--------|--------|
| Custom Shopify Development | `public/images/services/shopify/` | `SHOPIFY_EXAMPLE_IMAGES` in `src/lib/service-examples.ts` |
| Art Direction | `public/images/services/art-direction/` | `ART_DIRECTION_EXAMPLE_IMAGES` in `src/lib/service-examples.ts` |

Each entry: `{ src: "/images/services/shopify/01.jpg", alt: "…", label: "Optional caption" }`.

### Case studies — Shopify web design (6)

Upload one image per project (landscape or portrait, min ~1200px wide). Then set `image: "/images/work/…"` in `src/lib/portfolio.ts`.

| Project | Suggested path |
|---------|----------------|
| Heart of Steel | `public/images/work/heart-of-steel.jpg` |
| Kelela | `public/images/work/kelela.jpg` |
| ERL | `public/images/work/erl.jpg` |
| Federico Cina | `public/images/work/federico-cina.jpg` |
| No Faith Studios | `public/images/work/no-faith-studios.jpg` |
| Royoko Rain | `public/images/work/royoko-rain.jpg` |

Optional: add live URLs per project:

```ts
websiteUrl: "https://your-client-store.com",
```

### Case studies — Art direction (3)

| Project | Suggested path |
|---------|----------------|
| Lux Aeterna | `public/images/work/lux-aeterna.jpg` |
| Trey May | `public/images/work/trey-may-art.jpg` |
| The Geminis | `public/images/work/the-geminis.jpg` |

### Blog (optional)

| Asset | Path | Notes |
|--------|------|--------|
| Post cover images | `public/images/blog/{slug}.jpg` | One per article; update `image` in `src/lib/blog.ts` |

Default posts use Unsplash placeholders until you replace them.

### Fonts (optional)

Headings use **Helvetica Bold** (system). Body uses **Outfit** from Google Fonts. If you add licensed brand fonts later:

| Font | Path |
|------|------|
| Display (optional) | `public/fonts/your-display.woff2` |
| Body (optional) | `public/fonts/your-body.woff2` |

Wire via `next/font/local` in `src/app/layout.tsx`.

### Social & SEO (recommended)

| Asset | Path | Notes |
|--------|------|--------|
| Open Graph image | `public/images/og-image.jpg` | 1200×630px — add to `metadata` in `src/app/layout.tsx` |
| Twitter / X card | Same as OG or `public/images/og-twitter.jpg` | 1200×600px |

---

## What you still configure in code

- **Contact email:** `src/lib/copy.ts` → `CONTACT_EMAIL`
- **Who we are copy:** `src/lib/copy.ts` → `WHO_WE_ARE`
- **Services copy & lists:** `src/lib/services.ts`
- **Case study titles & categories:** `src/lib/portfolio.ts`
- **Blog posts:** `src/lib/blog.ts`

---

## Stack

- Next.js (App Router)
- React Three Fiber + Three.js (orange / pink / green / yellow gradient)
- Framer Motion (scroll metamorphosis, services panel transitions)
- Tailwind CSS v4
- Zustand (global gradient state)

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Full-page scroll metamorphosis (white → brand gradient) |
| `/services` | Shopify vs Art Direction — tabbed left, dedicated right layouts |
| `/work` | Case studies split: **Shopify Web Design** / **Art Direction** |
| `/about` | Horizontal story + founder photo |
| `/blog` | Editorial index + articles |
| `/contact` | Form + `treymayofficial@gmail.com` |

## Deploy

Build for production:

```bash
npm run build
npm start
```

Compatible with Vercel, Netlify, or any Node host that supports Next.js.
