import { Mail, MapPin, PhoneCall } from "lucide-react";
import { Wordmark } from "./Navbar";
import Container from "./ui/Container";
import { CONTACT, NAV_LINKS } from "@/lib/data";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const linkCls = "inline-flex items-center gap-2.5 text-muted transition-colors hover:text-ink";
  return (
    <footer className="border-t border-line bg-bg" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-xs text-[14px] leading-[22px] text-muted">
              AI assistants and automations for small and mid-sized businesses. Built and supported from Pune.
            </p>
            <p className="eyebrow mt-5 flex items-center gap-2 !text-[11px] text-muted">
              Automate <span className="h-1 w-1 rounded-full bg-teal" aria-hidden="true" />
              Innovate <span className="h-1 w-1 rounded-full bg-teal" aria-hidden="true" />
              Grow
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-display text-[14px] font-bold text-ink">On this page</p>
            <ul className="mt-4 space-y-2 text-[14px]">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkCls}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-display text-[14px] font-bold text-ink">Contact</p>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              <li>
                <a href={CONTACT.phoneHref} className={linkCls}>
                  <PhoneCall className="h-4 w-4" aria-hidden="true" /> {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className={linkCls}>
                  <Mail className="h-4 w-4" aria-hidden="true" /> {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  <LinkedinIcon className="h-4 w-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  <FacebookIcon className="h-4 w-4" /> Facebook
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5 text-muted">
                <MapPin className="h-4 w-4" aria-hidden="true" /> {CONTACT.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-line pt-6 text-[13px] text-muted sm:flex-row">
          <p>© {year} Tiasha AI Vista</p>
          <p>Product names belong to their owners. We use these tools; we&apos;re not their partners.</p>
        </div>
      </Container>
    </footer>
  );
}
