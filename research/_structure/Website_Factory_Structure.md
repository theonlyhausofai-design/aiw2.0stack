# Website Factory, Structure Overview

## What the Factory does

Takes a niche-specific brief and produces a launched Vite + React + Tailwind website with SEO foundation, trust stack, conversion mechanics, AI-powered lead handling (Jobs Booked System), and GBP optimization. Timeline: 3 days from signed client to live site.

## Factory file tree

```
website-factory/
  clients/
    _agency/
      agency-brand.json          # Student's agency branding (filled by /setup-agency)
      assets/                    # Agency photos, badges, signatures
    {client-slug}/               # Per-client build folder (created per run)
      Pipeline Data/             # Client-specific data filled during build
      proposal.html              # Generated proposal
  config/
    template-routes.json         # Maps niche slugs to template paths
  references/
    brand-dna.shape.js           # Canonical data shape contract
    factory-blueprint/           # Universal build scaffold (Vite + React + Tailwind)
    niche-playbook/
      schemas/                   # JSON schemas for playbook validation
      contracts/                 # Markdown contract templates
    copy/                        # Universal copy references
    cro-sops/                    # Universal CRO standard operating procedures
    assets/                      # Shared asset references
  templates/
    {niche-slug}/                # Per-niche generated template (built by /build-niche-template)
      src/
        components/              # Per-section React JSX components
        pages/                   # Per-route page compositions
        config/
          brand-dna.example.js   # Shape contract with sentinels
          brand-dna.js           # Filled per-client by Stage 10.1
        index.css                # Niche-tokenized CSS variables
        App.jsx                  # Route table
        main.jsx                 # Entry point
      niche-playbook/            # Per-niche copy locks, trust signals, process, vocabulary, etc.
      .claude/
        sops/                    # Per-stage SOPs tailored to niche
        agents/                  # Per-stage agents tailored to niche
        checklists/              # QA checklists (SOP compliance + design fidelity)
      package.json, vite.config.js, tailwind.config.js, etc.
  tools/
    generate-factory.py          # Module 2D deterministic orchestrator
    build-from-template.py       # Stage 10.1 client build runner
    build-proposal.py            # Stage 13 proposal generator
    validate-niche-template.py   # 6-gate niche template validator
    extract-niche-design-tokens.py
    copy-lint.py                 # Copy blocklist enforcer
    check-lcp.py                 # Performance checker
    and others
```

## Inputs the Factory needs (per client build)

| Field | Format | Required? | Notes |
|---|---|---|---|
| Client business name | Text | Yes | Used in brand-dna.js company.name |
| Niche | Text (must match a key in template-routes.json) | Yes | Selects the niche template |
| Positioning sentence | "I help [niche] win the trust of [end customer]..." | Yes | From Module 3 offer pack |
| Trust element priority | Ordered list, top 5 | Yes | From niche research 05-trust-signals.md |
| Primary keywords | 3-5 exact-match terms | Yes | From niche research 06-seo-landscape.md |
| Service list | Array of { slug, name, body } | Yes | From client intake |
| Service areas | Array of city names | Yes | From client intake |
| Reviews | Array of { author, source, rating, text } | Yes | From client's Google/Facebook |
| Phone, email, address, hours | Standard contact fields | Yes | From client intake |
| Photos | Hero, team, work, badges per photo-manifest.json | Yes | From client or AI-generated |
| Brand colors (optional) | Hex codes for palette override | No | Defaults to niche palette |

## Decisions the brief must make (vs. Factory defaults)

The brief MUST decide:
- Which trust elements to lead with (priority order for this specific client)
- Primary and secondary CTA copy (from copy-locks.json defaults, overridable)
- Service list and service area list (client-specific)
- Hero headline and subheadline (client-specific, informed by customer voice)
- Which certifications and badges the client actually holds
- SEO keywords for this client's market

The Factory defaults handle:
- Wireframe section order (from niche template)
- Component composition and layout (from niche template)
- Responsive breakpoints and mobile patterns
- Motion and animation presets
- Schema markup structure
- QA checklist execution
- Proposal template and structure
- Speed optimization
- Accessibility compliance

## Outputs the Factory produces

Per client build:
1. Launched Vite + React + Tailwind website on Vercel
2. SEO foundation (local keywords, schema markup, service/area pages)
3. GBP optimization guidance
4. Jobs Booked System setup (AI voice agent, CRM, booking, nurture)
5. Client proposal (branded HTML from agency-brand.json + niche template)

## Pipeline stages (per client)

| Stage | What happens |
|---|---|
| 0. Intake | Collect client info into Pipeline Data |
| 1. Research | Audit client's current site and competitors |
| 2. SEO Audit | Keyword research for client's market |
| 3. Asset Scraping | Collect photos, badges, reviews from client |
| 4. Strategy | Define service pages, area pages, content plan |
| 5. Copy Deck | Write all client-facing copy |
| 6. Brand DNA | Fill brand-dna.js with client data |
| 7.5. Brand Resonance | Mine Reddit/reviews for client-specific voice |
| 8. Hero Image | Generate or source hero image |
| 9. Build | Compose the site from niche template + brand-dna |
| 10. Personalize | Apply client-specific overrides |
| 11. Uplift | Optional enhancements (animations, calculator, etc.) |
| 12. Delivery | QA, client review, revisions |
| 13. Deploy | Vercel deploy + GBP + Jobs Booked System wiring |
| 14. Proposal | Generate branded client proposal |

## SOPs that live in the Factory project

Per-niche SOPs at `templates/{niche-slug}/.claude/sops/`:
- 03-asset-scraper.sop.md
- 04-strategy.sop.md
- 05-copy-deck.sop.md
- 06-brand-dna.sop.md
- 08-hero-image.sop.md
- 09-build.sop.md
- 11-uplift.sop.md
- 14-proposal.sop.md

## Handoff format

The brief is written as `research/output/website-factory-brief.md` by Module 5. It maps directly to the intake fields above. The factory reads the brief to populate Pipeline Data for the first client build.
