import "server-only"
import { createClient } from "@supabase/supabase-js"

/**
 * Lead capture. Writes an unlock event to Supabase if configured; otherwise
 * logs to the server console so the gate still works in local/dev or before
 * Supabase is wired up. Never throws to the caller.
 *
 * Uses the service-role key when present (bypasses RLS); otherwise falls back
 * to the publishable/anon key, which works against the insert-only RLS policy
 * in supabase/migrations/0001_leads.sql.
 */

export interface LeadInput {
  email: string
  resourceId: string
  resourceTitle: string
  source?: string
}

function supabaseKey(): string | undefined {
  return (
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    process.env.SUPABASE_PUBLISHABLE_KEY
  )
}

function supabaseConfigured(): boolean {
  return Boolean(process.env.SUPABASE_URL && supabaseKey())
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
      supabaseKey()!,
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
