# Med Spa SEO Landscape

Keyword clusters, treatment-level targeting, local SEO patterns, title/H1 structures, schema markup, and content gaps.

---

## Industry Search Context

- "Botox near me" generates 2.4 million monthly searches and has grown 500% in recent years
- Local searches for "med spa near me" grew 150% over three years
- Google Map Pack captures 42% of clicks for local med spa queries
- CPCs on high-intent terms like "Botox near me" run $75-$150+
- The med spa industry is projected to grow from $21.47B (2025) to $83.9B (2033)
- 15-20% annual clinic opening rate in metro areas means competition is accelerating
- Over 70% of med spa traffic arrives on mobile devices

---

## Primary Keyword Cluster

These are the highest-volume, highest-intent keywords that every med spa site must target.

| Keyword Pattern | Monthly Volume (est.) | Intent | CPC Range |
|---|---|---|---|
| botox near me | 2,400,000 | Transactional | $75-$150 |
| med spa near me | 450,000+ | Transactional | $40-$100 |
| lip filler near me | 200,000+ | Transactional | $50-$120 |
| botox [city] | Varies by metro | Transactional | $60-$130 |
| med spa [city] | Varies by metro | Transactional | $40-$90 |
| best med spa near me | 90,000+ | Transactional/Research | $50-$110 |
| facial near me | 150,000+ | Transactional | $20-$50 |
| laser hair removal near me | 200,000+ | Transactional | $30-$80 |

**Priority:** Service + location keywords are the bread and butter. "Botox Atlanta" or "lip filler Atlanta" will drive the most qualified traffic for a geo-targeted practice. Highest-value patterns are service + location ("lip filler Atlanta"), near-me searches, and service + intent.

---

## Secondary Keyword Clusters by Treatment

### Botox / Neurotoxins
- botox cost / botox price / how much is botox
- botox before and after
- botox for forehead / botox for crows feet / botox for jawline
- dysport vs botox
- botox near me same day
- how long does botox last
- botox [city name]

### Fillers
- lip filler [city]
- lip filler cost / how much is lip filler
- lip filler before and after
- cheek filler [city]
- jawline filler [city]
- under eye filler / tear trough filler
- juvederm vs restylane
- how long do fillers last

### Laser Treatments
- laser skin resurfacing [city]
- laser hair removal [city]
- IPL photofacial [city]
- BBL laser treatment
- laser treatment for acne scars
- microneedling vs laser

### Body Contouring
- coolsculpting [city]
- coolsculpting cost / how much is coolsculpting
- coolsculpting before and after
- body contouring [city]
- emsculpt [city]
- kybella [city]

### Facials and Skin Treatments
- hydrafacial [city]
- chemical peel [city]
- microneedling [city]
- PRP facial [city]
- dermaplaning [city]

---

## Atlanta Metro Targeting (Example)

For a student targeting med spas in the Atlanta area, the geo-modifier strategy should layer outward.

**Tier 1 (city-level):**
- botox atlanta
- med spa atlanta
- lip filler atlanta
- coolsculpting atlanta

**Tier 2 (neighborhood/suburb):**
- med spa buckhead
- botox midtown atlanta
- lip filler sandy springs
- laser hair removal roswell
- med spa alpharetta
- botox decatur

**Tier 3 (region):**
- med spa north atlanta
- best med spa in georgia
- top injector atlanta metro

**Local content strategy:**
- Create individual service + location landing pages for each Tier 1 and Tier 2 combination
- Example: /botox-atlanta/, /lip-filler-buckhead/, /coolsculpting-sandy-springs/
- Each page should have unique content, not just a city name swapped in a template
- Include local landmarks, neighborhoods, and driving directions in the copy

---

## Title Tag and H1 Patterns

### Homepage:
- **Title:** "[Practice Name] | Med Spa in [City], [State] | Botox, Fillers & More"
- **H1:** "Premier Med Spa in [City]" or "Your Trusted Med Spa in [City]"

### Service pages:
- **Title:** "Botox in [City] | [Practice Name] | Board-Certified Providers"
- **H1:** "Botox Treatments in [City]"

### Treatment + location landing pages:
- **Title:** "Lip Filler in [Neighborhood/City] | Natural Results | [Practice Name]"
- **H1:** "Lip Filler in [Neighborhood/City]"

### Provider pages:
- **Title:** "Dr. [Name] | Board-Certified [Specialty] | [Practice Name]"
- **H1:** "Meet Dr. [Name]"

### Blog / resource posts:
- **Title:** "How Much Does Botox Cost in [City]? [Year] Pricing Guide"
- **H1:** "Botox Cost in [City]: What to Expect in [Year]"

**Pattern notes:**
- Primary keyword at the front of the title tag
- City name in every title and H1 for geo-targeting
- Practice name at the end of the title (brand is secondary to keyword intent)
- H1 should not duplicate the title exactly but should contain the same primary keyword

---

## Schema Markup

### Required schemas for med spa sites:

**MedicalBusiness (primary)**
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "[Practice Name]",
  "image": "[logo-url]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[address]",
    "addressLocality": "[city]",
    "addressRegion": "[state]",
    "postalCode": "[zip]"
  },
  "telephone": "[phone]",
  "url": "[website-url]",
  "openingHoursSpecification": [],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "[rating]",
    "reviewCount": "[count]"
  },
  "priceRange": "$$-$$$"
}
```

**Physician (per provider)**
```json
{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. [Name]",
  "medicalSpecialty": "[Specialty]",
  "memberOf": "[Board/Association]",
  "worksFor": {
    "@type": "MedicalBusiness",
    "name": "[Practice Name]"
  }
}
```

**FAQPage (for treatment pages)**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does Botox cost in [City]?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[answer]"
      }
    }
  ]
}
```

**Additional recommended schemas:**
- **Service** for each treatment page
- **Review** for individual testimonials
- **BreadcrumbList** for navigation
- **LocalBusiness** as a fallback if MedicalBusiness causes issues

---

## Content Gaps (Opportunities)

These are high-search-volume topics where most med spa websites have thin or no content. Building authoritative pages here creates ranking opportunities.

### 1. Pricing pages
Most med spas hide pricing. Patients search for "[treatment] cost in [city]" constantly. A transparent pricing page (even with ranges) will rank because no one else is answering the question.

### 2. Comparison content
"Botox vs Dysport," "Juvederm vs Restylane," "CoolSculpting vs Emsculpt." Patients search these terms before deciding on a treatment. Most med spa sites do not address comparisons at all.

### 3. First-time patient guides
"What to expect at your first Botox appointment." "How to prepare for lip filler." These are high-funnel, high-volume queries that build trust and capture early-stage researchers.

### 4. Recovery and aftercare content
"How long does Botox take to work?" "Lip filler aftercare instructions." "What to do after CoolSculpting." Patients search these before and after treatment. This content serves both conversion and retention.

### 5. Provider education content
"How to choose a Botox injector." "What credentials should a med spa provider have?" "Red flags when choosing a med spa." This content positions the practice as the trusted authority and drives organic traffic from patients in the research phase.

### 6. Seasonal and trend content
"Best time to get Botox before a wedding." "Summer skincare treatments." "New aesthetic treatments in [year]." These are timely, high-engagement pieces that attract social shares and links.

### 7. Video content optimization
Most med spa sites have no YouTube presence. Treatment explainer videos, provider Q&As, and before/after walkthroughs rank in both YouTube and Google video results. The competition is minimal.
