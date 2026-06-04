import { google } from "googleapis"
import type { drive_v3 } from "googleapis"

/**
 * Server-only Google Drive client for live catalog sync.
 *
 * Auth is optional. If no credentials are configured, callers should fall
 * back to the baked snapshot in src/data/catalog.json. Two auth modes are
 * supported, checked in this order:
 *
 *   1. Service account  -> GOOGLE_SERVICE_ACCOUNT_JSON (raw or base64 JSON)
 *   2. OAuth refresh     -> GOOGLE_CLIENT_ID + GOOGLE_CLIENT_SECRET + GOOGLE_REFRESH_TOKEN
 *
 * Whichever account is used must be able to see BOTH the theonlyhausofai
 * library and the files shared into it from thewebsitedept@gmail.com. That
 * is why the share to theonlyhausofai@gmail.com matters: one credential then
 * reads everything via "owned + sharedWithMe".
 */

const SCOPES = ["https://www.googleapis.com/auth/drive.readonly"]

export function driveConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_JSON ||
      (process.env.GOOGLE_CLIENT_ID &&
        process.env.GOOGLE_CLIENT_SECRET &&
        process.env.GOOGLE_REFRESH_TOKEN),
  )
}

function decodeServiceAccount(raw: string): Record<string, unknown> {
  const trimmed = raw.trim()
  const json = trimmed.startsWith("{")
    ? trimmed
    : Buffer.from(trimmed, "base64").toString("utf8")
  return JSON.parse(json)
}

function getClient(): drive_v3.Drive {
  if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
    const creds = decodeServiceAccount(process.env.GOOGLE_SERVICE_ACCOUNT_JSON)
    const auth = new google.auth.JWT({
      email: creds.client_email as string,
      key: creds.private_key as string,
      scopes: SCOPES,
      // Optional domain-wide delegation: impersonate the library owner.
      subject: process.env.GOOGLE_IMPERSONATE_EMAIL || undefined,
    })
    return google.drive({ version: "v3", auth })
  }

  const oauth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
  )
  oauth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN })
  return google.drive({ version: "v3", auth: oauth })
}

export interface DriveFile {
  id: string
  title: string
  mimeType: string
  modifiedTime?: string
  webViewLink?: string
}

/**
 * Drive query clauses that define what the live catalog is allowed to pull.
 * Override with DRIVE_QUERIES (a JSON array of query strings). Defaults cover
 * the curated HVAC library folder, its Niche_Expansions subfolder, and every
 * file owned by thewebsitedept@gmail.com that is shared with the connected
 * account.
 */
function sourceQueries(): string[] {
  if (process.env.DRIVE_QUERIES) {
    try {
      const parsed = JSON.parse(process.env.DRIVE_QUERIES)
      if (Array.isArray(parsed) && parsed.every((q) => typeof q === "string")) {
        return parsed
      }
    } catch {
      // fall through to defaults
    }
  }
  return [
    "'1WvlOEFxzXWYQBoqHO7lhX7pfeUmbM3zT' in parents and trashed = false",
    "'1uI0TavMSHuIWZA9E6YDpUaNbglqP3M0E' in parents and trashed = false",
    "'thewebsitedept@gmail.com' in owners and trashed = false",
  ]
}

export async function fetchLiveFiles(): Promise<DriveFile[]> {
  const drive = getClient()
  const seen = new Map<string, DriveFile>()

  for (const q of sourceQueries()) {
    let pageToken: string | undefined
    do {
      const res = await drive.files.list({
        q,
        fields: "nextPageToken, files(id, name, mimeType, modifiedTime, webViewLink)",
        pageSize: 200,
        supportsAllDrives: true,
        includeItemsFromAllDrives: true,
        pageToken,
      })
      for (const f of res.data.files ?? []) {
        if (!f.id || !f.name) continue
        if (f.mimeType === "application/vnd.google-apps.folder") continue
        seen.set(f.id, {
          id: f.id,
          title: f.name,
          mimeType: f.mimeType ?? "",
          modifiedTime: f.modifiedTime ?? undefined,
          webViewLink: f.webViewLink ?? undefined,
        })
      }
      pageToken = res.data.nextPageToken ?? undefined
    } while (pageToken)
  }

  return [...seen.values()]
}
