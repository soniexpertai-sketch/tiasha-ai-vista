"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CalendarCheck, CheckCircle2, Loader2, PhoneCall } from "lucide-react";
import Reveal from "./ui/Reveal";
import { CONTACT, INDUSTRIES } from "@/lib/data";

export default function CTABanner() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Something went wrong sending your request. Please try again, or WhatsApp us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-forest py-20 md:py-28" aria-labelledby="cta-heading">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-emerald/25 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Get Started
            </p>
            <h2 id="cta-heading" className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
              Ready to Automate Your Business?
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
              Book a free 30-minute consultation. We&apos;ll map your workflows, show you live demos,
              and leave you with an automation plan — whether you work with us or not.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/85">
              {[
                "Free workflow audit — no obligations",
                "Live demos relevant to your industry",
                "Clear ROI estimate before you spend a rupee",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-forest-deep shadow-[0_8px_24px_rgba(212,175,55,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                <CalendarCheck className="h-4 w-4" />
                Schedule a Free Demo
              </a>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                <PhoneCall className="h-4 w-4" />
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm">
            {submitted ? (
              <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="mb-4 h-14 w-14 text-gold" aria-hidden="true" />
                <h3 className="font-display text-2xl font-bold text-white">Thank you!</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
                  We&apos;ve received your request. Our team will reach out within one business day to
                  schedule your free consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} aria-label="Book a free AI consultation">
                <h3 className="font-display text-xl font-bold text-white">Book Your Free Consultation</h3>
                <p className="mt-1.5 text-sm text-white/60">Takes 30 seconds. No spam, ever.</p>
                <div className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="lead-name" className="mb-1.5 block text-xs font-semibold text-white/80">
                      Full name
                    </label>
                    <input
                      id="lead-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="lead-email" className="mb-1.5 block text-xs font-semibold text-white/80">
                        Work email
                      </label>
                      <input
                        id="lead-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@company.com"
                        className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="lead-phone" className="mb-1.5 block text-xs font-semibold text-white/80">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="lead-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+91 …"
                        className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lead-industry" className="mb-1.5 block text-xs font-semibold text-white/80">
                      Industry
                    </label>
                    <select
                      id="lead-industry"
                      name="industry"
                      className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white focus:border-gold focus:outline-none [&>option]:text-forest-deep"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select your industry
                      </option>
                      {INDUSTRIES.map((ind) => (
                        <option key={ind.name} value={ind.name}>
                          {ind.name}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="lead-message" className="mb-1.5 block text-xs font-semibold text-white/80">
                      What would you like to automate? <span className="font-normal text-white/50">(optional)</span>
                    </label>
                    <textarea
                      id="lead-message"
                      name="message"
                      rows={3}
                      placeholder="e.g. We miss WhatsApp enquiries at night…"
                      className="w-full resize-none rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
                    />
                  </div>
                  {error && (
                    <p role="alert" className="text-sm text-gold">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-forest-deep shadow-[0_8px_24px_rgba(212,175,55,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Book Free AI Consultation
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-white/45">
                    By submitting, you agree to be contacted about your enquiry. We respect your privacy.
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
