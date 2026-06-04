import { Sparkles } from "lucide-react"
import { getCatalog, getResourceCount } from "@/lib/catalog"
import { LibraryClient } from "@/components/library-client"

// Rebuild the catalog at most once an hour when live sync is enabled.
export const revalidate = 3600

export default async function Home() {
  const [categories, count] = await Promise.all([getCatalog(), getResourceCount()])

  return (
    <main>
      <section className="hero-glow border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 text-xs text-mute">
            <Sparkles className="size-3.5 text-accent-soft" />
            the haus of ai
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Every AI playbook, guide, and tool. In one place.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-mute">
            {count} free resources: how-to guides, prompts, templates,
            calculators, and full playbooks. Built to help you ship faster and
            sell smarter with AI.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-sm text-mute">
            <a
              href="#how-to-guides"
              className="rounded-lg bg-accent px-5 py-2.5 font-medium text-white transition-opacity hover:opacity-90"
            >
              Browse the library
            </a>
          </div>
        </div>
      </section>

      <LibraryClient categories={categories} />

      <footer className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-8 text-center text-sm text-mute">
          the haus of ai &middot; {new Date().getFullYear()}
        </div>
      </footer>
    </main>
  )
}
