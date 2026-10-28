"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export function Wordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <Image src="/brand/icon-colour.svg" alt="" width={40} height={40} priority className="h-10 w-10" />
      <span className="font-display text-[17px] font-extrabold leading-[1.05] tracking-[0.01em] text-ink">
        TIASHA
        <span className="block text-primary">AI VISTA</span>
      </span>
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    // Theme class is set pre-hydration; sync it after mount.
    const raf = requestAnimationFrame(() => setDark(document.documentElement.classList.contains("dark")));

    // Underline the link for the section currently in view.
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  const themeButton = (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-10 w-10 items-center justify-center rounded-md text-muted transition-colors hover:bg-subtle hover:text-ink"
    >
      {dark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <nav
        aria-label="Main"
        className="mx-auto flex h-[72px] w-full max-w-[1296px] items-center justify-between px-4 md:px-8 lg:px-12"
      >
        <a href="#top" aria-label="Tiasha AI Vista home">
          <Wordmark />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? "true" : undefined}
                className="border-b-2 border-transparent py-2 font-display text-[15px] font-semibold text-ink transition-colors hover:border-teal aria-[current]:border-teal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          {themeButton}
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center rounded-md bg-primary px-5 font-display text-[15px] font-semibold text-on-primary transition-colors hover:bg-primary-hover"
          >
            Book a call
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          {themeButton}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-md text-ink hover:bg-subtle"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-bg px-4 pb-5 pt-2 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3.5 font-display text-base font-semibold text-ink last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 flex min-h-11 items-center justify-center rounded-md bg-primary font-display text-[15px] font-semibold text-on-primary"
          >
            Book a call
          </a>
        </div>
      )}
    </header>
  );
}
