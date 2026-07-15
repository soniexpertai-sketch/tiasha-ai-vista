import { ArrowRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";
import { SOLUTIONS } from "@/lib/data";

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 md:py-28" aria-labelledby="solutions-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our AI Solutions"
          title="An AI Workforce for Every Part of Your Business"
          subtitle="Fifteen proven automation capabilities — deployed individually or combined into one intelligent operation."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {SOLUTIONS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={(i % 3) * 80}>
              <a
                href="#contact"
                className="group flex h-full flex-col rounded-card border border-line bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-emerald/40 hover:shadow-card-hover"
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-soft text-emerald transition-colors duration-300 group-hover:bg-emerald group-hover:text-white">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base font-bold text-body">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald transition-colors group-hover:text-gold">
                  Explore
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
