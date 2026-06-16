# Website Factory

This is the Website Factory for The Website Dept (Juanika Freeman). It builds high-converting HVAC websites with the Jobs Booked System (AI voice agent + CRM + booking + nurture + dormant database reactivation).

## Active niche template

HVAC: `templates/hvac/`

Registered in `config/template-routes.json`. Every client build in this niche uses this template.

## How it works

1. A new HVAC client signs up.
2. The factory reads the client intake data and fills `templates/hvac/src/config/brand-dna.js` with their specifics.
3. Per-stage agents in `templates/hvac/.claude/agents/` drive each build step.
4. Per-stage SOPs in `templates/hvac/.claude/sops/` define the process.
5. QA checklists in `templates/hvac/.claude/checklists/` verify compliance and fidelity.
6. The proposal generator reads `clients/_agency/agency-brand.json` for agency branding.

## Key references

- Canonical brand-dna shape: `references/brand-dna.shape.js`
- Niche playbook (copy locks, trust signals, process, vocabulary): `templates/hvac/niche-playbook/`
- Universal CRO SOPs: `references/cro-sops/`
- Factory blueprint: `references/factory-blueprint/`

## Rules

- No em-dashes. Ever.
- No emojis. Ever.
- No blocklisted terms (see `templates/hvac/niche-playbook/copy-blocklist-additions.md`).
- All copy from brand-dna.js. No hardcoded text in components.
- All brand-dna paths must be canonical (match `references/brand-dna.shape.js`).
- Mobile-first. 70%+ of HVAC traffic is mobile.
- Honours prefers-reduced-motion on all animations.
