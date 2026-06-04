import { NextResponse } from "next/server"
import { getCatalog } from "@/lib/catalog"

export const runtime = "nodejs"
// Revalidate the live catalog at most once an hour.
export const revalidate = 3600

export async function GET() {
  const categories = await getCatalog()
  return NextResponse.json({ categories })
}
