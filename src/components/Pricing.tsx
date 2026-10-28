import { Check } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { PRICING } from "@/lib/data";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-subtle py-16 md:py-24" aria-labelledby="pricing-heading">
      <Container>
        <SectionHeading
          id="pricing-heading"
          eyebrow="Pricing"
          title="Fixed quotes, after we understand the work"
          subtitle="We don't publish a rate card because two chatbots can differ tenfold in effort. After the audit you get one number, in writing."
        />
        <Reveal>
          <ul className="grid gap-6 md:grid-cols-3 md:gap-8">
            {PRICING.map((plan) => (
              <li
                key={plan.name}
                className={`relative flex flex-col rounded-lg bg-surface p-6 md:p-8 ${
                  plan.featured ? "border-2 border-primary" : "border border-line"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-0.5 font-display text-[12px] font-semibold text-on-primary">
                    Most clients start here
                  </span>
                )}
                <h3 className="font-display text-[22px] font-bold leading-[30px] text-ink">{plan.name}</h3>
                <p className="mt-2 text-[15px] leading-6 text-muted">{plan.tagline}</p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[15px] leading-6 text-ink">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-primary" strokeWidth={2} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href="#contact"
                  variant={plan.featured ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  Ask for a quote
                </Button>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
