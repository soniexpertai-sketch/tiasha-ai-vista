import { Check } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { PRICING } from "@/lib/data";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-surface py-20 md:py-28" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Engagement Plans"
          title="Start Small. Scale with Confidence."
          subtitle="Every engagement is scoped to your workflows after a free consultation — you only invest in automation that pays for itself."
        />
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" role="list">
          {PRICING.map((plan, i) => (
            <Reveal as="li" key={plan.name} delay={i * 80}>
              <div
                className={`relative flex h-full flex-col rounded-card border p-7 transition-all duration-300 hover:-translate-y-1 ${
                  plan.featured
                    ? "border-gold bg-forest text-white shadow-[0_16px_48px_rgba(15,59,46,0.35)]"
                    : "border-line bg-bg shadow-card hover:shadow-card-hover"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-forest-deep">
                    Most Popular
                  </span>
                )}
                <h3 className={`font-display text-xl font-extrabold ${plan.featured ? "text-white" : "text-body"}`}>
                  {plan.name}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${plan.featured ? "text-white/70" : "text-muted"}`}>
                  {plan.tagline}
                </p>
                <ul className="mt-6 flex-1 space-y-3" role="list">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? "text-gold" : "text-emerald"}`}
                        aria-hidden="true"
                      />
                      <span className={plan.featured ? "text-white/90" : "text-body"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href="#contact"
                    variant={plan.featured ? "gold" : "outline"}
                    className="w-full"
                  >
                    Contact Sales
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={200}>
          <p className="mt-10 text-center text-sm text-muted">
            Not sure which plan fits? <a href="#contact" className="font-semibold text-emerald underline-offset-4 hover:underline">Book a free consultation</a> — we&apos;ll recommend the smallest step with the biggest return.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
