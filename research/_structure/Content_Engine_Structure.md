# Content Engine, Structure Overview

## What the Engine does

A single-tenant Next.js web app the student deploys to their own Vercel project. It produces Instagram reels, carousels, and story sequences in the student's voice, pulling from a seven-bucket context library. The student uses it to generate social content that attracts HVAC companies as inbound leads. It is the student's own lead-gen system, not a client deliverable.

## Five core features

1. **Context Library**: Seven role-defined buckets (Video Ideas, Inspiration, Expert Brain, My Voice, Context, Instructions, Feedback). Drop YouTube URLs, Instagram reels, voice memos, PDFs, or text. The engine ingests, summarizes, and indexes every item.
2. **Generator**: Type a prompt like "5 reels about why HVAC companies lose leads". The engine pulls relevant context across buckets, runs Claude with the student's voice profile, and produces ready-to-film scripts.
3. **Pipeline Kanban**: Every script flows through Idea, Approved, Shot, Edited, Posted. Drag between columns. Edit inline.
4. **Content Radar**: Every 6 hours, scrapes niche hashtags and creators, scores by velocity, surfaces what's spiking. One click writes a version in the student's voice.
5. **Performance Loop**: Paste the URL after posting. The engine pulls metrics, classifies winners and flops, writes lessons back into the Feedback bucket. Future generations get sharper.

## Stack

- Next.js 16 + React 19 + TypeScript + Tailwind v4
- Supabase (Postgres + Auth + Storage)
- Anthropic Claude (all LLM work)
- Apify (Instagram + TikTok scraping for Radar)
- AssemblyAI (audio transcription for voice memos)
- youtube-transcript (free YouTube captions)

## Inputs the Engine needs

| Field | Format | Required? | Notes |
|---|---|---|---|
| Operator name | Text | Yes | Student's name |
| Operator voice notes | Voice profile: register, phrases, off-limits | Yes | From setup wizard |
| Niche | Text | Yes | "HVAC" |
| ICP profile | Business type, size, stage, location | Yes | HVAC companies, $500K-$3M, Atlanta metro |
| End customer profile | Demographics, decision moment, fears | Yes | Homeowners needing HVAC work |
| Content pillars | 3-5 pillars with topics and sample hooks | Yes | Trust-building, industry education, behind-the-scenes, pain points |
| Keywords | Primary + secondary + geographic | Yes | From Module 2B SEO research |
| Cadence | Posts/week per channel | Yes | Student defines |
| Banned topics | List | Yes | Niche-specific off-limits |

## The seven Library buckets

| Bucket | Purpose | Accepted sources |
|---|---|---|
| Video Ideas | One-line topic dumps. Generator pulls when asked "what should I make today" | text, reels, TikTok, YouTube, links |
| Inspiration | Competitor reels and viral examples. Generator extracts structure, never the topic | reels, TikTok, YouTube, links, text |
| Expert Brain | Long-form sources: YouTube channels, books, podcasts, frameworks | YouTube, PDF, links, text, audio, video |
| My Voice | Past posts, captions, voice memos, writing samples. Voice anchor for every script | text, audio, video, reels, TikTok, YouTube |
| Context | Any relevant context: PDFs, URLs, voice notes, text | all source types |
| Instructions | Permanent rules: tone, format, length, platform constraints | text, PDF |
| Feedback | Post-mortem lessons from posted content. Performance loop writes here | text |

## Content types the Engine produces

- Short-form video scripts (Instagram Reels, TikTok, YouTube Shorts)
- Carousel slide sequences (Instagram carousels)
- Story sequences (Instagram Stories)
- Post captions
- Content ideas and topic lists
- Radar-sourced trend adaptations

## Voice/style enforcement

The engine maintains consistent voice through:
- The My Voice bucket (student's past content and writing samples as anchor)
- The Instructions bucket (permanent tone and format rules)
- Claude system prompts that reference the voice profile from setup wizard
- The Feedback bucket (lessons from what worked and what flopped)

## SOPs / workflows that live in the Engine project

- Setup wizard (6-step onboarding: business, voice, niche, expert sources, radar config, keys)
- Context ingestion pipeline (URL to summary to indexed chunks)
- Generation workflow (prompt to context retrieval to Claude to script)
- Kanban pipeline (Idea to Approved to Shot to Edited to Posted)
- Radar scan workflow (scrape to score to surface to adapt)
- Performance loop (post URL to metrics to classification to feedback)

## Handoff format

The Content Engine Brief is written as `research/output/content-engine-brief.md` by Module 7. The student pastes the brief's content into the engine's seven Library buckets during the `/walk-engine` step (Module 12). Each bucket section in the brief maps to one of the seven buckets.
