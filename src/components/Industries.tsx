import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";
import { INDUSTRIES } from "@/lib/data";

export default function Industries() {
  return (
    <section id="industries" className="bg-surface py-20 md:py-28" aria-labelledby="industries-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Built for the Way Your Industry Works"
          subtitle="Every sector has its own bottlenecks. We automate the ones costing you the most."
        />
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" role="list">
          {INDUSTRIES.map((ind, i) => (
            <Reveal as="li" key={ind.name} delay={(i % 3) * 80}>
              <div className="group h-full rounded-card border border-line bg-bg p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest text-gold">
                    <Icon name={ind.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-body">{ind.name}</h3>
                </div>
                <dl className="space-y-3.5 text-sm">
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted">Pain point</dt>
                    <dd className="mt-1 leading-relaxed text-muted">{ind.pain}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-wider text-emerald">We automate</dt>
                    <dd className="mt-1 leading-relaxed text-body">{ind.automation}</dd>
                  </div>
                  <div className="rounded-lg bg-gold-soft px-3.5 py-2.5">
                    <dt className="sr-only">Expected ROI</dt>
                    <dd className="text-sm font-semibold text-forest dark:text-gold">↑ {ind.roi}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
