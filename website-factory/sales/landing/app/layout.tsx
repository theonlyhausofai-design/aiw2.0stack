import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jobs Booked System | The Website Department",
  description:
    "Stop losing HVAC jobs to competitors with worse service. The Jobs Booked System turns your online presence into a 24/7 booking machine.",
  openGraph: {
    title: "Jobs Booked System | The Website Department",
    description:
      "AI-powered websites that book HVAC jobs 24/7. Voice agent, CRM, automated follow-up -- done for you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] font-[family-name:var(--font-inter)] antialiased">
        {children}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a09262ef87d9949fdcfd1c9"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
