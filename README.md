# Helium Solar

Premium homepage redesign — Next.js app (source of truth) + standalone HTML.

## Standalone HTML

Self-contained redesign (Outfit + Manrope, GSAP Process pin). Remote images from heliumsolar.in.

Open locally:

- `helium-solar.html`
- or `public/helium-solar.html` via the Next server
- `deploy-static/index.html` for static hosting

Live path after deploy: `/helium-solar.html` (root `/` redirects there)

## Develop

```bash
npm install
npm run dev
```

Next.js app at `/` mirrors the same redesign (`app/`, `components/`, `lib/content.ts`).

## Deploy

Connected to GitHub → Vercel production deploys from `main` / `master`.
