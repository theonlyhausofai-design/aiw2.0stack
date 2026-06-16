"use client";

export default function FloatingPhone() {
  return (
    <a
      href="tel:6782632971"
      className="fixed bottom-6 left-6 z-[100] flex items-center gap-3 bg-accent hover:bg-accent-hover text-white pl-4 pr-5 py-3 rounded-full font-semibold text-sm shadow-[0_4px_24px_rgba(255,107,43,0.3)] hover:shadow-[0_4px_32px_rgba(255,107,43,0.45)] transition-all hover:-translate-y-0.5 group"
      aria-label="Call 678-263-2971"
    >
      <span className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
        📞
      </span>
      <span className="hidden sm:inline">(678) 263-2971</span>
    </a>
  );
}
