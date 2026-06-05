# Module 2B, Deep Niche Research

Status: **scaffolded, not yet run.** All sub-task files below are empty stubs. They must be filled by `/research` using live Apify actors in an environment that can reach `api.apify.com`. Do not fill them in by hand.

## Finalist niches and slugs

| Priority | Niche | Slug |
|---|---|---|
| 1 | Spas (med spa + day spa) | `spas-med-day` |
| 2 | Dental / implant practices | `dental-implants` |
| 3 | Home services / HVAC | `hvac` |

## Per-niche files (sub-tasks 1 to 7 + synthesis)

- `01-agencies.md` — existing niche-serving agencies
- `02-customer-voice.md` — end-customer verbatim voice
- `03-copy-patterns.md` — winning copy and ad hooks
- `04-cro-patterns.md` — conversion structure and CRO mechanics
- `05-trust-signals.md` — trust stack for this niche
- `06-seo-landscape.md` — keywords and GBP landscape
- `07-money-math.md` — realistic ROI math
- `synthesis.md` — the one-page decision summary
- `raw/` — Apify JSON dumps land here

Sub-task 8 (starter design template) runs only after `/pick-niche`, for the chosen niche only, via `/build-niche-template`.

## How to run

In a session with Apify network access:
1. `/setup` (restore `.env.local`)
2. `/research` (fills every stub from real scraped data, logs each actor to `logs/apify-runs.jsonl`)
3. `/pick-niche`
