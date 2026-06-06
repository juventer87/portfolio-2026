# Deployment

This is a Next.js 16 (App Router, Turbopack) site. The homepage and all 33
case-study routes are statically prerendered at build time. During the build,
the `/work/[slug]` pages read the original documents from the `Brand Briefs/`
and `Reports/` directories. Those directories must be present in the build
environment. They are only ever read, never modified.

## Prerequisites

- Node.js `>= 20.9` (Node 22/24 recommended; the repo was built on Node 24)
- The asset directories committed alongside the code:
  `Brand Briefs/`, `Reports/`, `Other Work/`, `PDF Files/`
- Environment variable `NEXT_PUBLIC_SITE_URL` set to the production origin
  (e.g. `https://your-domain.com`). This drives canonical URLs, Open Graph,
  `sitemap.xml`, and `robots.txt`. Without it the build falls back to a
  placeholder domain.

## Option A — Vercel (recommended)

1. Push the repository (including the asset folders) to GitHub/GitLab/Bitbucket.
2. In Vercel: **New Project → Import** the repo. The framework auto-detects as
   Next.js; `vercel.json` pins the build/install commands and security headers.
3. **Settings → Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL = https://your-domain.com`
4. Deploy. Production builds run on pushes to `main`.
5. Add your custom domain under **Settings → Domains**.

Notes:
- `vercel.json` sets `installCommand: npm ci`, so commit `package-lock.json`.
- Security headers and long-cache headers for the raw `/work/*/source`
  documents are applied via `vercel.json`.

## Option B — Private / self-managed server

Build once, run the Node server behind a TLS-terminating reverse proxy.

```bash
# on the server, in the project root (asset folders present)
export NEXT_PUBLIC_SITE_URL="https://your-domain.com"
npm ci
npm run build
npm run start        # serves on http://localhost:3000
```

Keep it running with a process manager (example: PM2):

```bash
npm i -g pm2
NEXT_PUBLIC_SITE_URL="https://your-domain.com" pm2 start "npm run start" --name portfolio
pm2 save && pm2 startup
```

Minimal Nginx reverse proxy:

```nginx
server {
  server_name your-domain.com;
  location / {
    proxy_pass         http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header   Host              $host;
    proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
    proxy_set_header   X-Forwarded-Proto $scheme;
  }
}
# terminate TLS here (e.g. certbot) and redirect :80 -> :443
```

### Fully static export (optional)

Because every route is prerendered, this site can also be served as static
files. Add `output: "export"` to `next.config.ts`, run `npm run build`, and
serve the generated `out/` directory from any static host or CDN. The asset
folders must still be present at build time for the export to read them.

## Post-deploy checklist

- `https://your-domain.com/sitemap.xml` lists the homepage + 33 work URLs
- `https://your-domain.com/robots.txt` references the sitemap
- A case study (e.g. `/work/celplast`) renders, and "Open the full dossier"
  resolves to `/work/celplast/source`
- View source on the homepage: title, description, Open Graph, and keywords
  are present in `<head>`
