"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/data";

export default function FloatingActions() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      const pastHero = window.scrollY > 700;
      const atContact = contact ? contact.getBoundingClientRect().top < window.innerHeight : false;
      setShowSticky(pastHero && !atContact);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-4 right-4 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-[#1fa855] text-white shadow-card transition-colors hover:bg-[#178a45] md:bottom-6 md:right-6"
      >
        <MessageCircle className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
      </a>

      {/* Sticky mobile CTA */}
      <div
        className={`fixed inset-x-0 bottom-0 z-30 border-t border-line bg-bg p-3 pr-20 transition-transform duration-300 lg:hidden ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <a
          href="#contact"
          className="flex min-h-11 items-center justify-center rounded-md bg-primary px-6 font-display text-[15px] font-semibold text-on-primary"
        >
          Book a free call
        </a>
      </div>
    </>
  );
}
