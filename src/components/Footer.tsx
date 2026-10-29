import { Mail, MapPin, PhoneCall } from "lucide-react";
import { Wordmark } from "./Navbar";
import Container from "./ui/Container";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./ui/BrandIcons";
import { CONTACT, NAV_LINKS } from "@/lib/data";

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
              <li>
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  <InstagramIcon className="h-4 w-4" /> Instagram
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
