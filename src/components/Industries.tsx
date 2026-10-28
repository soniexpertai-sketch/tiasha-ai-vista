import SectionHeading from "./ui/SectionHeading";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { INDUSTRIES } from "@/lib/data";

export default function Industries() {
  return (
    <section id="industries" className="bg-subtle py-16 md:py-24" aria-labelledby="industries-heading">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          id="industries-heading"
          eyebrow="Industries"
          title="Where this works best"
          subtitle="Anywhere a lot of messages, calls or paperwork come in and the same answers go out."
        />
        <Reveal>
          <ul className="grid border-t border-line sm:grid-cols-2 sm:gap-x-10">
            {INDUSTRIES.map((ind) => (
              <li key={ind.name} className="border-b border-line py-5">
                <h3 className="font-display text-base font-bold text-ink">{ind.name}</h3>
                <p className="mt-1 text-[15px] leading-6 text-muted">{ind.line}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
