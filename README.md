# Brits Construction Projects Ltd: website

Static site (Astro), sister brand to Brits Construction Services. Live at https://www.britsconstructionprojects.co.uk.

- `npm install`, then `npm run dev` (local) or `npm run build` (output in `dist/`).
- Hosting: Vercel project linked to `github.com/brits846/britsprojects`; every push to `main` deploys to the live site automatically (`vercel.json` handles clean URLs).
- Company details (registered name, company number, registered office, phone, email) and the enquiry form endpoint: `src/site.ts`.
- Page copy and data: `src/content.ts` (services, project types, reviews, the new build case study, site clips) and `src/pages/`.
- Brand: steel navy `#0d2f45` with structural amber `#e9a321` for actions (darker `#9a5f08` for amber text on light backgrounds), Manrope; logo in `src/components/Logo.astro` and `public/logo.svg`.
- Photos: `public/photos/` with phone (`sm/`, 640px) and tablet (`md/`, 1280px) versions; sizes are listed in `src/photo-sizes.json` and used by `src/lib/photo.ts`. `real-*` photos are from our own sites (location data removed); `stock-*` and `commercial-*` are Pexels.
- Video: cover videos in `public/video/` (Pexels stock, WebM and MP4, small versions for phones); site clips in `public/video/site/` cut from our own footage, sound removed.
