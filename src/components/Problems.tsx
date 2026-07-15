import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";
import { PROBLEMS } from "@/lib/data";

export default function Problems() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="problems-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Problem"
          title="Why Businesses Struggle"
          subtitle="Growth stalls when your best people spend their days on work a machine should do."
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {PROBLEMS.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 70}>
              <div className="group h-full rounded-card border border-line bg-surface p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-soft text-forest transition-colors group-hover:bg-gold group-hover:text-forest-deep dark:text-gold dark:group-hover:text-forest-deep">
                  <Icon name={p.icon} />
                </span>
                <h3 className="font-display text-lg font-bold text-body">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
