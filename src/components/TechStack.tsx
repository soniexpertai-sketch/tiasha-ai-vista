import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { TECH_STACK } from "@/lib/data";

export default function TechStack() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="stack-heading">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technology Stack"
          title="Best-in-Class Tools, Assembled for You"
          subtitle="We stay model-agnostic and pick the right technology for each workflow — so your system improves as AI does."
        />
        <Reveal>
          <ul className="flex flex-wrap justify-center gap-3" role="list">
            {TECH_STACK.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-muted shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-body hover:shadow-card"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
