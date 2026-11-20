# Brits Construction Projects Ltd — website

Static site (Astro), sister brand to Brits Construction Services.

- `npm install`, then `npm run dev` (local) or `npm run build` (output in `dist/`).
- Deploy on Vercel: framework preset **Astro**, no settings needed (`vercel.json` handles clean URLs).
- Company details, domain and enquiry form endpoint: `src/site.ts` (empty values are hidden on the site).
- Page copy: `src/content.ts` (from the BCPL web brief) and `src/pages/`.
- Brand: steel navy `#0d2f45` + copper `#b0531c`, Manrope (shared with the parent site); logo in `src/components/Logo.astro`, `public/logo.svg`.
