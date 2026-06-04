# AIW Resource Site

A standalone lead-magnet library: a branded, searchable hub of the haus of ai
playbooks, how-to guides, prompts, templates, and tools. Each resource is
gated behind an email capture, then opens straight to the file in Google Drive.

Built with Next.js 16 (App Router) + Tailwind v4 + Supabase, matching the
`content-engine` conventions in this repo. This site is independent of the AIW
stack pipeline; it does not read or write `stack-state.json`.

## How it works

- **Catalog** lives in `src/data/catalog.json` — a curated, categorized
  snapshot of ~95 resources across two Google accounts
  (`theonlyhausofai@gmail.com` owned files + files shared in from
  `thewebsitedept@gmail.com`). This is the source of categories, titles, and
  descriptions, and it makes the site work with zero credentials.
- **Live sync** (`src/lib/drive.ts`, `src/lib/catalog.ts`): if Google Drive
  credentials are set, the catalog refreshes at runtime. Curated entries keep
  their category/description; brand-new files in the configured sources appear
  under "New & Recently Added". If sync fails, it falls back to the snapshot.
- **Email gate** (`src/app/api/unlock/route.ts`, `src/lib/leads.ts`): the
  email is recorded (Supabase if configured, console otherwise) and the file
  URL is returned to open in a new tab.

## Local dev

```bash
cd resource-site
npm install
npm run dev      # http://localhost:3007
```

Works out of the box on the baked snapshot. Add `.env.local` (see
`.env.example`) to enable live sync and Supabase lead storage.

## Going live

1. **Drive sync** — create a Google Cloud service account, enable the Drive
   API, and either (a) share the curated folders with the service account, or
   (b) use domain-wide delegation with `GOOGLE_IMPERSONATE_EMAIL`. Set
   `GOOGLE_SERVICE_ACCOUNT_JSON`. Because the `thewebsitedept` files are shared
   into `theonlyhausofai@gmail.com`, reading through that account covers
   everything — keep those shares in place.
2. **Leads** — create a Supabase project, run
   `supabase/migrations/0001_leads.sql`, then set `SUPABASE_URL` and
   `SUPABASE_SERVICE_ROLE_KEY`.
3. **Deploy** — `vercel` (or import the repo in Vercel with root
   `resource-site/`). Add the same env vars in the Vercel dashboard.

## Editing the library

- Re-order or re-categorize: edit `CATEGORY_ORDER` in `src/lib/types.ts`.
- Add/remove/retitle resources or rewrite descriptions: edit
  `src/data/catalog.json`.
- Hard-block a file from ever publishing: add its id to `DENYLIST` in
  `src/lib/catalog.ts`.
