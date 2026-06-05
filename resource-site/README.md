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

## Private file delivery

Files are **never shared publicly**. On unlock, the site issues a short-lived
signed link to `/api/download/[id]`, which fetches the file with the owner's
Drive credential and streams it to the visitor (Google Docs export to PDF).
The Drive files stay "viewable by owner only"; the link expires and cannot be
shared or guessed. Without a credential the route returns a clear 503.

### Getting the Google credential (OAuth refresh token, ~5 min)

The easiest single credential is an OAuth refresh token for
`theonlyhausofai@gmail.com` — it can read its own files plus everything shared
in from `thewebsitedept@gmail.com`.

1. **Google Cloud Console** → create a project (or reuse one) → enable the
   **Google Drive API**.
2. **APIs & Services → Credentials → Create Credentials → OAuth client ID** →
   type **Web application**. Add redirect URI:
   `https://developers.google.com/oauthplayground`. Save the **Client ID** and
   **Client secret**.
3. Open the **[OAuth 2.0 Playground](https://developers.google.com/oauthplayground)**
   → gear icon → check **Use your own OAuth credentials** → paste the client id
   and secret.
4. Step 1: enter scope `https://www.googleapis.com/auth/drive.readonly` →
   **Authorize APIs** → sign in as **theonlyhausofai@gmail.com** → allow.
5. Step 2: **Exchange authorization code for tokens** → copy the
   **refresh token**.
6. Set in Vercel: `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`,
   `GOOGLE_REFRESH_TOKEN`, and `UNLOCK_SECRET` (any long random string).

## Going live

1. **Delivery + live sync** — add the Google OAuth env vars above (or a service
   account via `GOOGLE_SERVICE_ACCOUNT_JSON`). One credential powers both
   private downloads and live catalog refresh.
2. **Leads** — Supabase project + `supabase/migrations/0001_leads.sql`, then
   set `SUPABASE_URL` and `SUPABASE_ANON_KEY` (publishable/anon key works via
   the insert-only RLS policy) or `SUPABASE_SERVICE_ROLE_KEY`.
3. **Secret** — set `UNLOCK_SECRET` so download tokens are unforgeable.
4. **Deploy** — import the repo in Vercel with root `resource-site/` and add the
   env vars in the dashboard.

## Editing the library

- Re-order or re-categorize: edit `CATEGORY_ORDER` in `src/lib/types.ts`.
- Add/remove/retitle resources or rewrite descriptions: edit
  `src/data/catalog.json`.
- Hard-block a file from ever publishing: add its id to `DENYLIST` in
  `src/lib/catalog.ts`.
