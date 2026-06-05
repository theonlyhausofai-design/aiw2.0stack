import "server-only"
import crypto from "crypto"

/**
 * Short-lived signed tokens that gate file delivery. The unlock route issues a
 * token after capturing an email; the download route verifies it. This makes
 * the gate real: download links expire and cannot be guessed or shared.
 *
 * Set UNLOCK_SECRET in production. Without it a fixed dev fallback is used,
 * which is fine locally but forgeable, so the gate is only as strong as the
 * secret.
 */

const SECRET = process.env.UNLOCK_SECRET || "dev-insecure-unlock-secret"
const DEFAULT_TTL_SECONDS = 900 // 15 minutes

function sign(payload: string): string {
  return crypto.createHmac("sha256", SECRET).update(payload).digest("hex")
}

export function issueToken(resourceId: string, ttl = DEFAULT_TTL_SECONDS): string {
  const exp = Date.now() + ttl * 1000
  const payload = `${resourceId}.${exp}`
  const token = `${payload}.${sign(payload)}`
  return Buffer.from(token).toString("base64url")
}

export function verifyToken(token: string, resourceId: string): boolean {
  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8")
    const parts = decoded.split(".")
    if (parts.length !== 3) return false
    const [id, expRaw, sig] = parts
    if (id !== resourceId) return false
    const exp = Number(expRaw)
    if (!Number.isFinite(exp) || Date.now() > exp) return false
    const expected = sign(`${id}.${exp}`)
    const a = Buffer.from(sig)
    const b = Buffer.from(expected)
    return a.length === b.length && crypto.timingSafeEqual(a, b)
  } catch {
    return false
  }
}
