import SectionHeading from "./ui/SectionHeading";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { EXAMPLE_BUILDS } from "@/lib/data";

export default function CaseStudies() {
  return (
    <section id="examples" className="py-16 md:py-24" aria-labelledby="examples-heading">
      <Container>
        <SectionHeading
          id="examples-heading"
          eyebrow="Example builds"
          title="What a first project usually looks like"
          subtitle="These are typical scopes we propose, not client stories. On a call we'll sketch one for your business."
        />
        <Reveal>
          <ul className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {EXAMPLE_BUILDS.map((b) => (
              <li key={b.industry} className="flex flex-col rounded-lg border border-line bg-surface p-6 md:p-7">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-bold leading-7 text-ink">{b.industry}</h3>
                  <span className="shrink-0 rounded-full border border-line px-2.5 py-0.5 text-[12px] font-medium text-muted">
                    {b.timeline}
                  </span>
                </div>
                <dl className="mt-5 space-y-4 text-[15px] leading-6">
                  <div>
                    <dt className="font-semibold text-ink">The problem</dt>
                    <dd className="mt-1 text-muted">{b.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">What we&apos;d build</dt>
                    <dd className="mt-1 text-muted">{b.build}</dd>
                  </div>
                  <div className="border-t border-line pt-4">
                    <dt className="font-semibold text-ink">What we track</dt>
                    <dd className="mt-1 text-muted">{b.measure}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
