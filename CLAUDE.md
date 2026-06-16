# aiw2.0stack

AI Workshop 2.0 Stack -- Juanika Freeman's full build system for The Website Department.

## Architecture

Two core systems:

1. **Content Engine** (deployed) -- Next.js + Supabase app for content creation
   - Live at: https://content-engine-black.vercel.app
   - 7 content buckets: instructions, expert_brain, video_ideas, context, my_voice, inspiration, + more

2. **Website Factory** (built, not yet deployed) -- templatized client website builder
   - Current niche: HVAC
   - Template at: `website-factory/templates/hvac/`
   - Factory CLAUDE.md: `website-factory/CLAUDE.md`
   - Jobs Booked System: AI voice agent + CRM + booking + nurture + dormant DB reactivation

## Stack State

Gate tracker: `stack-state.json`

Completed gates: setup, agency brand, profile, niche scoring, research, niche decision, template build, offer pack, factory structure, factory brief, factory tailored, engine structure, engine brief, engine deployed, engine context pasted.

**Next gate**: `factory.deployed` -- deploy first client site (Dayco Systems prospect).

## Pending Student Input

- Populate "My Voice" and "Inspiration" buckets in content engine
- Connect thewebsitedeptai.com domain to Vercel

## Tech Stack

- Next.js (App Router) + Tailwind CSS
- Supabase (database + auth)
- Vercel (hosting)
- TypeScript

## Rules

- All copy from brand-dna.js. No hardcoded text in components.
- No em-dashes. No emojis.
- Mobile-first. 70%+ of HVAC traffic is mobile.
- Honours prefers-reduced-motion on all animations.
