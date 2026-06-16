"use client";

import { useEffect, useState, useRef } from "react";

export default function LeadMagnetPopup() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const dismissed = useRef(false);
  const timerFired = useRef(false);

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem("popup_dismissed")) return;

    // Timer trigger: show after 15 seconds
    const timer = setTimeout(() => {
      if (!dismissed.current) {
        timerFired.current = true;
        setShow(true);
      }
    }, 15000);

    // Exit intent trigger
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed.current && !timerFired.current) {
        setShow(true);
      }
    };

    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  const handleDismiss = () => {
    setShow(false);
    dismissed.current = true;
    sessionStorage.setItem("popup_dismissed", "1");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Send to Formspree
    fetch("https://formspree.io/f/xdavyanq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source: "hvac-lead-magnet" }),
    });
    // Trigger PDF download
    const link = document.createElement("a");
    link.href = "/5-Ways-AI-Saves-HVAC-50k.pdf";
    link.download = "5-Ways-AI-Saves-HVAC-50k.pdf";
    link.click();
    setSubmitted(true);
    sessionStorage.setItem("popup_dismissed", "1");
    setTimeout(() => setShow(false), 3000);
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={handleDismiss}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-[#111] border border-[#333] rounded-2xl max-w-[480px] w-full p-10 sm:p-12 text-center animate-[scaleIn_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-[#666] hover:text-white transition-colors text-2xl leading-none w-8 h-8 flex items-center justify-center"
          aria-label="Close"
        >
          &times;
        </button>

        {!submitted ? (
          <>
            {/* Badge */}
            <div className="inline-block bg-[rgba(255,107,43,0.12)] border border-[rgba(255,107,43,0.25)] text-[#ff6b2b] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Free Guide
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
              5 Ways AI Can Save Your HVAC Business{" "}
              <span className="text-[#ff6b2b]">$50K</span> This Year
            </h2>

            <p className="text-[#aaa] text-[15px] leading-relaxed mb-8">
              The exact AI strategies HVAC companies are using right now to cut costs, book more jobs, and stop losing revenue to missed calls and slow follow-up.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full bg-[#0a0a0a] border border-[#333] rounded-xl px-5 py-4 text-white text-base placeholder:text-[#555] focus:outline-none focus:border-[#ff6b2b] transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-[#ff6b2b] hover:bg-[#ff8550] text-white font-bold text-base py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-[0_0_30px_rgba(255,107,43,0.2)]"
              >
                Send Me the Free Guide
              </button>
            </form>

            <p className="text-[#555] text-xs mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </>
        ) : (
          <>
            <div className="text-5xl mb-4">&#9889;</div>
            <h2 className="text-2xl font-extrabold tracking-tight mb-3">
              Check Your Inbox
            </h2>
            <p className="text-[#aaa] text-[15px]">
              The guide is on its way. Keep an eye out for an email from The Website Department.
            </p>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
