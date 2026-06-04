import "server-only"
import { createClient } from "@supabase/supabase-js"

/**
 * Lead capture. Writes an unlock event to Supabase if configured; otherwise
 * logs to the server console so the gate still works in local/dev or before
 * Supabase is wired up. Never throws to the caller.
 */

export interface LeadInput {
  email: string
  resourceId: string
  resourceTitle: string
  source?: string
}

function supabaseConfigured(): boolean {
  return Boolean(
    process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY,
  )
}

export async function recordLead(input: LeadInput): Promise<void> {
  if (!supabaseConfigured()) {
    console.log("[leads] (no Supabase configured) captured:", {
      email: input.email,
      resourceId: input.resourceId,
      resourceTitle: input.resourceTitle,
    })
    return
  }

  try {
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false } },
    )
    const { error } = await supabase.from("leads").insert({
      email: input.email.toLowerCase(),
      resource_id: input.resourceId,
      resource_title: input.resourceTitle,
      source: input.source ?? "resource-site",
    })
    if (error) console.error("[leads] insert failed:", error.message)
  } catch (err) {
    console.error("[leads] unexpected error:", err)
  }
}
