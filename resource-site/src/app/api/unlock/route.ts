import { NextResponse } from "next/server"
import { findResource } from "@/lib/catalog"
import { recordLead } from "@/lib/leads"
import { issueToken } from "@/lib/tokens"
import { isValidEmail } from "@/lib/utils"

export const runtime = "nodejs"

export async function POST(req: Request) {
  let body: { email?: string; resourceId?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const email = (body.email ?? "").trim()
  const resourceId = (body.resourceId ?? "").trim()

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 })
  }
  if (!resourceId) {
    return NextResponse.json({ error: "Missing resource." }, { status: 400 })
  }

  const resource = await findResource(resourceId)
  if (!resource) {
    return NextResponse.json({ error: "Resource not found." }, { status: 404 })
  }

  await recordLead({
    email,
    resourceId: resource.id,
    resourceTitle: resource.title,
  })

  // Hand back a short-lived, signed link to our own gated delivery route so
  // the file is served privately on the visitor's behalf (the raw Drive link
  // is never exposed and the files stay viewable by the owner only).
  const token = issueToken(resource.id)
  const url = `/api/download/${resource.id}?t=${encodeURIComponent(token)}`

  return NextResponse.json({ url, title: resource.title })
}
