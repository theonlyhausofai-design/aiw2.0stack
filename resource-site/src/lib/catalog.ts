import "server-only"
import catalogData from "@/data/catalog.json"
import { CATEGORY_ORDER, type Category, type Resource, type ResourceType } from "@/lib/types"
import { driveConfigured, fetchLiveFiles, type DriveFile } from "@/lib/drive"

const SNAPSHOT: Resource[] = catalogData.resources as Resource[]

/**
 * File ids that must never be published, even if they show up in a live
 * source. Sensitive financial/admin files and credentials live here.
 */
const DENYLIST = new Set<string>([
  // (intentionally empty: the configured sources do not include the
  //  sensitive theonlyhausofai folder. Add ids here to hard-block them.)
])

const NEW_CATEGORY = "New & Recently Added"

function inferType(mimeType: string): ResourceType {
  if (mimeType.includes("pdf")) return "PDF"
  if (mimeType.includes("spreadsheet")) return "Sheet"
  if (mimeType.includes("html")) return "Interactive"
  if (mimeType.includes("markdown")) return "Markdown"
  return "Doc"
}

function liveToResource(f: DriveFile): Resource {
  return {
    id: f.id,
    title: f.title.replace(/[*#_]/g, "").trim(),
    description: "Recently added to the library.",
    category: NEW_CATEGORY,
    type: inferType(f.mimeType),
    viewUrl: f.webViewLink || `https://drive.google.com/file/d/${f.id}/view`,
    account: "websitedept",
  }
}

/**
 * Returns the resource list. When Drive credentials are configured we refresh
 * the snapshot against live Drive data: known files keep their curated
 * category/description, brand-new files surface under "New & Recently Added".
 * Any failure falls back to the baked snapshot so the site never breaks.
 */
async function loadResources(): Promise<Resource[]> {
  const base = SNAPSHOT.filter((r) => !DENYLIST.has(r.id))

  if (!driveConfigured()) return base

  try {
    const live = await fetchLiveFiles()
    const known = new Set(base.map((r) => r.id))

    // Keep every curated entry (categories + descriptions are the value),
    // then append any live files we have not categorized yet.
    const additions = live
      .filter((f) => !known.has(f.id) && !DENYLIST.has(f.id))
      .map(liveToResource)

    return [...base, ...additions]
  } catch (err) {
    console.error("[catalog] live sync failed, using snapshot:", err)
    return base
  }
}

export async function getCatalog(): Promise<Category[]> {
  const resources = await loadResources()
  const order = [...CATEGORY_ORDER.map((c) => c.name), NEW_CATEGORY]

  const byCategory = new Map<string, Resource[]>()
  for (const r of resources) {
    const list = byCategory.get(r.category) ?? []
    list.push(r)
    byCategory.set(r.category, list)
  }

  const blurbs = new Map(CATEGORY_ORDER.map((c) => [c.name, c.blurb]))

  return order
    .filter((name) => byCategory.has(name))
    .map((name) => ({
      name,
      blurb: blurbs.get(name) ?? "Fresh additions to the library.",
      resources: byCategory.get(name)!,
    }))
}

export async function getResourceCount(): Promise<number> {
  return (await loadResources()).length
}

/** Look up a single resource by id (used by the unlock route to validate). */
export async function findResource(id: string): Promise<Resource | undefined> {
  return (await loadResources()).find((r) => r.id === id)
}
