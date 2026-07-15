import { Clock, TrendingUp } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";
import { CASE_STUDIES } from "@/lib/data";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 md:py-28" aria-labelledby="cases-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case Studies"
          title="Real Businesses, Measurable Outcomes"
          subtitle="A sample of the problems we've automated away — and what the numbers looked like after."
        />
        <ul className="grid gap-6 md:grid-cols-2" role="list">
          {CASE_STUDIES.map((cs, i) => (
            <Reveal as="li" key={cs.industry} delay={(i % 2) * 100}>
              <article className="group h-full rounded-card border border-line bg-surface p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="mb-6 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald">
                    <Icon name={cs.icon} className="h-3.5 w-3.5" />
                    {cs.industry}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {cs.timeline}
                  </span>
                </div>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted">Problem</dt>
                    <dd className="mt-1 leading-relaxed text-body">{cs.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted">Solution</dt>
                    <dd className="mt-1 leading-relaxed text-body">{cs.solution}</dd>
                  </div>
                </dl>
                <p className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gold-soft px-4 py-2.5 text-sm font-bold text-forest dark:text-gold">
                  <TrendingUp className="h-4 w-4" aria-hidden="true" />
                  {cs.roi}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
