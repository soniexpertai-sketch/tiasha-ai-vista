import SectionHeading from "./ui/SectionHeading";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { PROBLEMS } from "@/lib/data";

export default function Problems() {
  return (
    <section className="bg-subtle py-16 md:py-24" aria-labelledby="problems-heading">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          id="problems-heading"
          eyebrow="What we fix"
          title="Sound familiar?"
          subtitle="Most of the businesses we talk to aren't short of customers. They're short of hours."
        />
        <Reveal>
          <ol className="divide-y divide-line border-y border-line">
            {PROBLEMS.map((p, i) => (
              <li key={p.title} className="grid gap-2 py-6 sm:grid-cols-[3rem_1fr]">
                <span className="font-display text-sm font-bold text-accent">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-lg font-bold leading-7 text-ink">{p.title}</h3>
                  <p className="mt-1.5 text-muted">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
