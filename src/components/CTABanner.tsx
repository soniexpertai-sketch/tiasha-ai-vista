"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2, Mail, MessageCircle, PhoneCall } from "lucide-react";
import Reveal from "./ui/Reveal";
import Container from "./ui/Container";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./ui/BrandIcons";
import { CONTACT, INDUSTRIES } from "@/lib/data";
import { trackClarityEvent } from "@/lib/clarity";

export default function CTABanner() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const started = useRef(false);

  // Funnel step: first interaction with any form field.
  const handleFormStart = () => {
    if (started.current) return;
    started.current = true;
    trackClarityEvent("lead_form_start");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    trackClarityEvent("lead_form_submit");

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
      trackClarityEvent("lead_form_success");
    } catch {
      trackClarityEvent("lead_form_error");
      setError("Something went wrong sending your request. Please try again, or WhatsApp us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-navy py-16 text-white md:py-24 dark:border-y dark:border-line dark:bg-subtle" aria-labelledby="cta-heading">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow mb-3 !text-cyan">Book a call</p>
          <h2 id="cta-heading" className="font-display text-[32px] font-extrabold leading-10 md:text-[40px] md:leading-[48px]">
            Tell us what&apos;s eating up your team&apos;s day.
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-7 text-[#c5d4e6]">
            In 30 minutes we&apos;ll look at one workflow with you and tell you plainly whether automating it is worth
            the money. If it isn&apos;t, we&apos;ll say so.
          </p>
          <ul className="mt-8 space-y-3 text-[15px] text-[#dbe6f3]">
            {[
              "Free, no obligation",
              "Demos for your industry, on the call",
              "A written estimate within a week",
            ].map((point) => (
              <li key={point} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan" strokeWidth={1.75} aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>

          <ul className="mt-10 space-y-3 border-t border-white/15 pt-8 text-[15px]">
            <li>
              <a
                href={CONTACT.whatsappHref}
                onClick={() => trackClarityEvent("cta_whatsapp_click")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-semibold text-white hover:text-cyan"
              >
                <MessageCircle className="h-5 w-5 text-cyan" strokeWidth={1.75} aria-hidden="true" />
                WhatsApp us
              </a>
            </li>
            <li>
              <a
                href={CONTACT.phoneHref}
                onClick={() => trackClarityEvent("cta_phone_click")}
                className="inline-flex items-center gap-3 font-semibold text-white hover:text-cyan"
              >
                <PhoneCall className="h-5 w-5 text-cyan" strokeWidth={1.75} aria-hidden="true" />
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={CONTACT.emailHref} className="inline-flex items-center gap-3 font-semibold text-white hover:text-cyan">
                <Mail className="h-5 w-5 text-cyan" strokeWidth={1.75} aria-hidden="true" />
                {CONTACT.email}
              </a>
            </li>
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <span className="text-[14px] text-[#c5d4e6]">Follow us</span>
            {[
              { id: "linkedin", label: "LinkedIn", href: CONTACT.linkedin, Icon: LinkedinIcon },
              { id: "facebook", label: "Facebook", href: CONTACT.facebook, Icon: FacebookIcon },
              { id: "instagram", label: "Instagram", href: CONTACT.instagram, Icon: InstagramIcon },
            ].map(({ id, label, href, Icon }) => (
              <a
                key={id}
                href={href}
                onClick={() => trackClarityEvent(`cta_${id}_click`)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Tiasha AI Vista on ${label}`}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-cyan transition-colors hover:border-cyan hover:bg-white/10"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-[15px] italic text-[#c5d4e6]">
            We read every message ourselves. No bots on this form.
            <span className="mt-1 block text-[14px] not-italic">The Tiasha AI Vista team, {CONTACT.city}</span>
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-lg bg-surface p-6 text-ink shadow-card sm:p-8">
            {submitted ? (
              <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="mb-4 h-12 w-12 text-success" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="font-display text-[22px] font-bold">Thanks, we&apos;ve got it.</h3>
                <p className="mt-3 max-w-xs text-[15px] leading-6 text-muted">
                  One of us will get back to you within one working day to fix a time for the call.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} onFocus={handleFormStart} aria-label="Book a free consultation">
                <h3 className="font-display text-[22px] font-bold leading-[30px]">Book your free call</h3>
                <p className="mt-1 text-[14px] text-muted">Takes about a minute. We won&apos;t add you to any list.</p>
                <div className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="lead-name" className="mb-1.5 block text-[14px] font-semibold text-ink">
                      Your name
                    </label>
                    <input id="lead-name" name="name" type="text" required autoComplete="name" className="w-full rounded-sm border border-line-strong bg-surface px-3.5 py-3 text-[15px] text-ink placeholder:text-muted/70 focus:border-primary focus:outline-none" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="lead-email" className="mb-1.5 block text-[14px] font-semibold text-ink">
                        Email
                      </label>
                      <input
                        id="lead-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@company.com"
                        className="w-full rounded-sm border border-line-strong bg-surface px-3.5 py-3 text-[15px] text-ink placeholder:text-muted/70 focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="lead-phone" className="mb-1.5 block text-[14px] font-semibold text-ink">
                        Phone / WhatsApp
                      </label>
                      <input id="lead-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91" className="w-full rounded-sm border border-line-strong bg-surface px-3.5 py-3 text-[15px] text-ink placeholder:text-muted/70 focus:border-primary focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lead-industry" className="mb-1.5 block text-[14px] font-semibold text-ink">
                      Industry
                    </label>
                    <select id="lead-industry" name="industry" className="w-full rounded-sm border border-line-strong bg-surface px-3.5 py-3 text-[15px] text-ink placeholder:text-muted/70 focus:border-primary focus:outline-none" defaultValue="">
                      <option value="" disabled>
                        Choose one
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
                    <label htmlFor="lead-message" className="mb-1.5 block text-[14px] font-semibold text-ink">
                      What would you like to automate? <span className="font-normal text-muted">(optional)</span>
                    </label>
                    <textarea
                      id="lead-message"
                      name="message"
                      rows={3}
                      placeholder="e.g. We miss WhatsApp enquiries after 8 pm"
                      className="w-full rounded-sm border border-line-strong bg-surface px-3.5 py-3 text-[15px] text-ink placeholder:text-muted/70 focus:border-primary focus:outline-none resize-none"
                    />
                  </div>
                  {error && (
                    <p role="alert" className="text-[14px] text-danger">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-display text-[15px] font-semibold text-on-primary transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send request
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[13px] text-muted">We only use your details to reply to this enquiry.</p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
