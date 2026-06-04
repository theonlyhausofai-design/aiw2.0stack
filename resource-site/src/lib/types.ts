// Shared resource types for the AIW resource site.

export type ResourceType =
  | "PDF"
  | "Doc"
  | "Sheet"
  | "Markdown"
  | "Interactive"

export interface Resource {
  /** Google Drive file id. Doubles as the unique key. */
  id: string
  title: string
  description: string
  category: string
  type: ResourceType
  /** Canonical Drive/Docs URL the visitor lands on after unlocking. */
  viewUrl: string
  /** Which Google account owns the file. Used by live sync, not shown. */
  account: "hausofai" | "websitedept"
}

export interface Category {
  name: string
  blurb: string
  resources: Resource[]
}

/** Ordered category list the landing page renders top to bottom. */
export const CATEGORY_ORDER: { name: string; blurb: string }[] = [
  { name: "How-To Guides", blurb: "Step-by-step playbooks for putting AI to work on everyday goals." },
  { name: "Offer & Sales", blurb: "Everything to position the offer and book the call." },
  { name: "Playbooks & SOPs", blurb: "Repeatable systems for onboarding, delivery, and follow-through." },
  { name: "Templates & Calculators", blurb: "Plug-and-play documents and interactive tools." },
  { name: "Website & Client Playbooks", blurb: "Build and sell websites with AI, then land the first client." },
  { name: "Claude & AI Skills", blurb: "Shortcuts, skills, and workflows that compound." },
  { name: "Prompt & Creative Library", blurb: "Image, video, and design prompts ready to paste." },
  { name: "Copywriting & Hooks", blurb: "Frameworks and hooks that get the click." },
  { name: "AI Guides", blurb: "Long-form guides on prompting, agents, and model selection." },
  { name: "Money & Strategy", blurb: "Ways to turn AI skills into revenue." },
]
