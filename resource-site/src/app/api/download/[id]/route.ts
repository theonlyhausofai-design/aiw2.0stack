import { NextResponse } from "next/server"
import { findResource } from "@/lib/catalog"
import { driveConfigured, downloadFile } from "@/lib/drive"
import { verifyToken } from "@/lib/tokens"

export const runtime = "nodejs"

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  const token = new URL(req.url).searchParams.get("t") ?? ""

  if (!verifyToken(token, id)) {
    return NextResponse.json(
      { error: "This link has expired. Request the file again." },
      { status: 403 },
    )
  }

  const resource = await findResource(id)
  if (!resource) {
    return NextResponse.json({ error: "Resource not found." }, { status: 404 })
  }

  if (!driveConfigured()) {
    return NextResponse.json(
      {
        error:
          "File delivery is not configured yet. Add the Google Drive credential to enable private downloads.",
      },
      { status: 503 },
    )
  }

  try {
    const file = await downloadFile(id)
    const safeName = file.filename.replace(/["\\\r\n]/g, "")
    return new Response(new Uint8Array(file.data), {
      status: 200,
      headers: {
        "Content-Type": file.contentType,
        "Content-Disposition": `inline; filename="${safeName}"`,
        "Cache-Control": "private, no-store",
      },
    })
  } catch (err) {
    console.error("[download] failed for", id, err)
    return NextResponse.json(
      { error: "Could not fetch this file right now." },
      { status: 502 },
    )
  }
}
