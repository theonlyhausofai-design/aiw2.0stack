"use client"

import { useMemo, useState } from "react"
import {
  ArrowUpRight,
  FileText,
  FileDown,
  Table2,
  MousePointerClick,
  Lock,
  Loader2,
  Search,
  X,
} from "lucide-react"
import type { Category, Resource, ResourceType } from "@/lib/types"
import { cn, isValidEmail } from "@/lib/utils"

const TYPE_META: Record<ResourceType, { icon: typeof FileText; label: string }> = {
  PDF: { icon: FileDown, label: "PDF" },
  Doc: { icon: FileText, label: "Doc" },
  Markdown: { icon: FileText, label: "Guide" },
  Sheet: { icon: Table2, label: "Sheet" },
  Interactive: { icon: MousePointerClick, label: "Interactive" },
}

export function LibraryClient({ categories }: { categories: Category[] }) {
  const [query, setQuery] = useState("")
  const [active, setActive] = useState<Resource | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return categories
    return categories
      .map((c) => ({
        ...c,
        resources: c.resources.filter(
          (r) =>
            r.title.toLowerCase().includes(q) ||
            r.description.toLowerCase().includes(q),
        ),
      }))
      .filter((c) => c.resources.length > 0)
  }, [categories, query])

  return (
    <>
      {/* Sticky category nav + search */}
      <div className="sticky top-0 z-20 border-b border-line bg-ink/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-mute">
            {categories.map((c) => (
              <a
                key={c.name}
                href={`#${slug(c.name)}`}
                className="transition-colors hover:text-fg"
              >
                {c.name}
              </a>
            ))}
          </nav>
          <div className="relative sm:w-64">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-mute" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the library"
              className="w-full rounded-lg border border-line bg-panel py-2 pl-9 pr-3 text-sm text-fg placeholder:text-mute focus:border-accent focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-10">
        {filtered.length === 0 && (
          <p className="py-20 text-center text-mute">
            No resources match &ldquo;{query}&rdquo;.
          </p>
        )}

        {filtered.map((category) => (
          <section
            key={category.name}
            id={slug(category.name)}
            className="scroll-mt-24 py-8"
          >
            <div className="mb-5">
              <h2 className="text-xl font-semibold tracking-tight">
                {category.name}
                <span className="ml-2 text-sm font-normal text-mute">
                  {category.resources.length}
                </span>
              </h2>
              <p className="mt-1 text-sm text-mute">{category.blurb}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.resources.map((r) => (
                <ResourceCard key={r.id} resource={r} onUnlock={() => setActive(r)} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {active && <UnlockDialog resource={active} onClose={() => setActive(null)} />}
    </>
  )
}

function ResourceCard({
  resource,
  onUnlock,
}: {
  resource: Resource
  onUnlock: () => void
}) {
  const meta = TYPE_META[resource.type] ?? TYPE_META.Doc
  const Icon = meta.icon
  return (
    <button
      onClick={onUnlock}
      className="group flex h-full flex-col rounded-xl border border-line bg-panel p-5 text-left transition-colors hover:border-accent/60"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-ink-soft px-2 py-1 text-xs text-mute">
          <Icon className="size-3.5" />
          {meta.label}
        </span>
        <Lock className="size-4 text-mute transition-colors group-hover:text-accent-soft" />
      </div>
      <h3 className="text-[15px] font-medium leading-snug text-fg">
        {resource.title}
      </h3>
      <p className="mt-1.5 line-clamp-3 text-sm text-mute">
        {resource.description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-soft">
        Unlock
        <ArrowUpRight className="size-4" />
      </span>
    </button>
  )
}

function UnlockDialog({
  resource,
  onClose,
}: {
  resource: Resource
  onClose: () => void
}) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "done">("idle")
  const [error, setError] = useState("")
  const [fileUrl, setFileUrl] = useState("")

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!isValidEmail(email)) {
      setError("Enter a valid email.")
      setStatus("error")
      return
    }
    setStatus("loading")
    setError("")
    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, resourceId: resource.id }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? "Something went wrong.")
        setStatus("error")
        return
      }
      setFileUrl(data.url)
      setStatus("done")
      window.open(data.url, "_blank", "noopener,noreferrer")
    } catch {
      setError("Network error. Try again.")
      setStatus("error")
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-line bg-ink-soft p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-panel px-2 py-1 text-xs text-mute">
            {(TYPE_META[resource.type] ?? TYPE_META.Doc).label}
          </span>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-mute transition-colors hover:text-fg"
          >
            <X className="size-5" />
          </button>
        </div>

        {status === "done" ? (
          <div className="py-2 text-center">
            <h3 className="text-lg font-semibold">You&rsquo;re in.</h3>
            <p className="mt-2 text-sm text-mute">
              &ldquo;{resource.title}&rdquo; opened in a new tab. If it was
              blocked, use the button below.
            </p>
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Open it
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        ) : (
          <>
            <h3 className="text-lg font-semibold leading-snug">{resource.title}</h3>
            <p className="mt-1.5 text-sm text-mute">{resource.description}</p>
            <form onSubmit={submit} className="mt-5">
              <label className="mb-1.5 block text-sm text-mute">
                Drop your email to unlock it.
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                autoFocus
                className="w-full rounded-lg border border-line bg-panel px-3 py-2.5 text-sm text-fg placeholder:text-mute focus:border-accent focus:outline-none"
              />
              {status === "error" && (
                <p className="mt-2 text-sm text-red-400">{error}</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {status === "loading" && <Loader2 className="size-4 animate-spin" />}
                Unlock resource
              </button>
              <p className="mt-3 text-center text-xs text-mute">
                No spam. Just the occasional drop of new resources.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

function slug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}
