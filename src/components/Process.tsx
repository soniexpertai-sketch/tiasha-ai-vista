import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { PROCESS_STEPS } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Tiasha"
          title="A Proven Path from Idea to Impact"
          subtitle="No black boxes, no endless projects. A disciplined eight-step journey with a working prototype in the first days."
        />
        <ol className="relative grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={(i % 4) * 90} className="relative">
              <div className="group h-full rounded-card border border-line bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gold font-display text-sm font-extrabold text-forest transition-colors group-hover:bg-gold group-hover:text-forest-deep dark:text-gold dark:group-hover:text-forest-deep">
                    {i + 1}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-gold/60 to-transparent" />
                </div>
                <h3 className="font-display text-base font-bold text-body">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
