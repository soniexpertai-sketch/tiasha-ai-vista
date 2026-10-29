import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Wordmark } from "@/components/Navbar";
import ConnectLinks from "@/components/ConnectLinks";
import { CONTACT } from "@/lib/data";

// Link-in-bio page the printed QR code points to (see scripts/generate-qr.mjs).
export const metadata: Metadata = {
  title: "Connect",
  description:
    "Reach Tiasha AI Vista on WhatsApp, LinkedIn, Facebook, Instagram or email, or book a free demo of an AI assistant for your business.",
  alternates: { canonical: "https://www.tiashaaivista.com/connect" },
};

export default function ConnectPage() {
  return (
    <main className="min-h-screen bg-bg px-4 py-12">
      <div className="mx-auto w-full max-w-md">
        <Link href="/" className="flex justify-center" aria-label="Tiasha AI Vista home">
          <Wordmark />
        </Link>
        <p className="mt-5 text-center text-[15px] leading-6 text-muted">
          WhatsApp assistants, voice agents and back-office automations for small and mid-sized businesses.
        </p>
        <p className="eyebrow mt-3 flex items-center justify-center gap-2 !text-[11px] text-muted">
          Automate <span className="h-1 w-1 rounded-full bg-teal" aria-hidden="true" />
          Innovate <span className="h-1 w-1 rounded-full bg-teal" aria-hidden="true" />
          Grow
        </p>

        <div className="mt-8">
          <ConnectLinks />
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-[13px] text-muted">
          <MapPin className="h-4 w-4" aria-hidden="true" /> {CONTACT.city}
        </p>
      </div>
    </main>
  );
}
