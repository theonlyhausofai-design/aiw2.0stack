"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled ? "bg-bg/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 py-4 flex justify-between items-center">
        <Image
          src="/logo.png"
          alt="The Website Department"
          width={380}
          height={84}
          className="h-20 w-auto"
          priority
        />
        <a
          href="https://api.leadconnectorhq.com/widget/booking/gnxA1juE7jLnc4Uyz3DI"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors"
        >
          Book a Call
        </a>
      </div>
    </nav>
  );
}
