"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import { CalendarCheck, ChevronRight, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, WhatsappIcon } from "./ui/BrandIcons";
import { CONTACT } from "@/lib/data";
import { trackClarityEvent } from "@/lib/clarity";

type LinkItem = {
  id: string;
  label: string;
  sub: string;
  href: string;
  Icon: ComponentType<{ className?: string }>;
  external?: boolean;
};

const LINKS: LinkItem[] = [
  { id: "whatsapp", label: "WhatsApp", sub: CONTACT.phone, href: CONTACT.whatsappHref, Icon: WhatsappIcon, external: true },
  { id: "linkedin", label: "LinkedIn", sub: "Company page", href: CONTACT.linkedin, Icon: LinkedinIcon, external: true },
  { id: "facebook", label: "Facebook", sub: "Follow our updates", href: CONTACT.facebook, Icon: FacebookIcon, external: true },
  { id: "instagram", label: "Instagram", sub: "Behind the builds", href: CONTACT.instagram, Icon: InstagramIcon, external: true },
  { id: "email", label: "Email", sub: CONTACT.email, href: CONTACT.emailHref, Icon: Mail },
];

export default function ConnectLinks() {
  return (
    <div className="space-y-3">
      <Link
        href="/#contact"
        onClick={() => trackClarityEvent("connect_demo_click")}
        className="flex min-h-14 items-center justify-center gap-2.5 rounded-md bg-primary px-6 font-display text-[16px] font-bold text-on-primary shadow-card transition-colors hover:bg-primary-hover"
      >
        <CalendarCheck className="h-5 w-5" aria-hidden="true" />
        Book a Free Demo
      </Link>

      <ul className="space-y-3">
        {LINKS.map(({ id, label, sub, href, Icon, external }) => (
          <li key={id}>
            <a
              href={href}
              onClick={() => trackClarityEvent(`connect_${id}_click`)}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex min-h-14 items-center gap-4 rounded-md border border-line bg-surface px-4 py-3 transition-colors hover:border-line-strong hover:bg-subtle"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-subtle text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-[15px] font-semibold text-ink">{label}</span>
                <span className="block truncate text-[13px] text-muted">{sub}</span>
              </span>
              <ChevronRight className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
