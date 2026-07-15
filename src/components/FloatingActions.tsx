"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X, CalendarCheck } from "lucide-react";
import { CONTACT } from "@/lib/data";

export default function FloatingActions() {
  const [showSticky, setShowSticky] = useState(false);
  const [showExit, setShowExit] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY > 8 || e.relatedTarget) return;
      try {
        if (sessionStorage.getItem("exit-intent-shown")) return;
        sessionStorage.setItem("exit-intent-shown", "1");
      } catch {}
      setShowExit(true);
    };
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <>
      {/* Floating WhatsApp */}
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} aria-hidden="true" />
      </a>

      {/* Sticky mobile CTA */}
      <div
        className={`fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface/95 p-3 pr-24 backdrop-blur-lg transition-transform duration-300 lg:hidden ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <a
          href="#contact"
          className="flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white"
        >
          <CalendarCheck className="h-4 w-4" aria-hidden="true" />
          Book Free AI Consultation
        </a>
      </div>

      {/* Exit-intent dialog */}
      {showExit && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-forest-deep/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="exit-title"
          onClick={() => setShowExit(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl border border-line bg-surface p-8 text-center shadow-card-hover"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowExit(false)}
              aria-label="Close dialog"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted hover:text-body"
            >
              <X className="h-4 w-4" />
            </button>
            <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold-soft text-forest dark:text-gold">
              <CalendarCheck className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 id="exit-title" className="font-display text-2xl font-extrabold text-body">
              Before you go —
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Get a <span className="font-semibold text-body">free workflow audit</span>: we&apos;ll show
              you the three fastest automations for your business, with ROI estimates. No obligation.
            </p>
            <a
              href="#contact"
              onClick={() => setShowExit(false)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-forest-deep"
            >
              Claim My Free Audit
            </a>
            <button
              type="button"
              onClick={() => setShowExit(false)}
              className="mt-3 text-xs font-medium text-muted hover:text-body"
            >
              No thanks, I&apos;ll keep browsing
            </button>
          </div>
        </div>
      )}
    </>
  );
}
