import { NextResponse } from "next/server"
import { findResource } from "@/lib/catalog"
import { recordLead } from "@/lib/leads"
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

  return NextResponse.json({ url: resource.viewUrl, title: resource.title })
}
