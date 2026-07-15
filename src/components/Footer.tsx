import Image from "next/image";
import { Mail, PhoneCall } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
import { CONTACT, SOLUTIONS, INDUSTRIES } from "@/lib/data";

const FOOTER_SERVICES = SOLUTIONS.slice(0, 6).map((s) => s.title);
const FOOTER_INDUSTRIES = INDUSTRIES.slice(0, 6).map((i) => i.name);

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-surface" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Image
              src="/logo.png"
              alt="Tiasha AI Vista logo"
              width={180}
              height={65}
              className="h-14 w-auto rounded-md dark:bg-cream/95 dark:p-1.5"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              <span className="font-semibold text-gold">Your Vista to AI-Driven Growth.</span>{" "}
              Practical AI solutions that save time, reduce costs, and accelerate your business.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm" role="list">
              <li>
                <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2.5 text-muted transition-colors hover:text-emerald">
                  <PhoneCall className="h-4 w-4" aria-hidden="true" /> {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className="inline-flex items-center gap-2.5 text-muted transition-colors hover:text-emerald">
                  <Mail className="h-4 w-4" aria-hidden="true" /> {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-muted transition-colors hover:text-emerald"
                >
                  <LinkedinIcon className="h-4 w-4" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Services">
            <p className="font-display text-sm font-bold text-body">Services</p>
            <ul className="mt-4 space-y-2.5" role="list">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <a href="#solutions" className="text-sm text-muted transition-colors hover:text-emerald">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Industries">
            <p className="font-display text-sm font-bold text-body">Industries</p>
            <ul className="mt-4 space-y-2.5" role="list">
              {FOOTER_INDUSTRIES.map((i) => (
                <li key={i}>
                  <a href="#industries" className="text-sm text-muted transition-colors hover:text-emerald">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-display text-sm font-bold text-body">Company</p>
            <ul className="mt-4 space-y-2.5" role="list">
              {[
                { label: "Blog", href: "#blog" },
                { label: "Case Studies", href: "#case-studies" },
                { label: "Pricing", href: "#pricing" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted transition-colors hover:text-emerald">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <form className="mt-6" aria-label="Newsletter signup">
              <label htmlFor="newsletter-email" className="mb-2 block text-xs font-semibold text-muted">
                Get AI automation insights monthly
              </label>
              <div className="flex gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="w-full min-w-0 rounded-lg border border-line bg-bg px-3.5 py-2.5 text-sm text-body placeholder:text-muted/60 focus:border-emerald focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-lg bg-forest px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-forest-deep"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {year} Tiasha AI Vista. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Technology names are trademarks of their respective owners; shown as tools we work with, not partnerships.
          </p>
        </div>
      </div>
    </footer>
  );
}
