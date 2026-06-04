import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "the haus of ai — Resource Library",
  description:
    "Free AI playbooks, how-to guides, prompts, templates, and tools from the haus of ai.",
  openGraph: {
    title: "the haus of ai — Resource Library",
    description:
      "Free AI playbooks, how-to guides, prompts, templates, and tools.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
