import SectionHeading from "./ui/SectionHeading";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { PROCESS_STEPS } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-24" aria-labelledby="process-heading">
      <Container>
        <SectionHeading
          id="process-heading"
          eyebrow="Working with us"
          title="From first call to live in about a month"
          subtitle="You'll know the cost and what it should save before we start building."
        />
        <Reveal>
          <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {PROCESS_STEPS.map((step, i) => (
              <li key={step.title} className="relative lg:pr-8">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary font-display text-[15px] font-bold text-primary">
                    {i + 1}
                  </span>
                  {i < PROCESS_STEPS.length - 1 && (
                    <span aria-hidden="true" className="hidden h-0.5 flex-1 bg-line lg:block" />
                  )}
                </div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-accent">{step.when}</p>
                <h3 className="mt-1 font-display text-lg font-bold leading-7 text-ink">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
