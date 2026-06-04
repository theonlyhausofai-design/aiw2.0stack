import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  // googleapis is a large server-only package. Keep it external so the
  // bundler does not try to trace and inline it into client output.
  serverExternalPackages: ["googleapis"],
}

export default nextConfig
