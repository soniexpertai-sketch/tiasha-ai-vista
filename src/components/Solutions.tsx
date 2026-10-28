import { ArrowRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";
import { MORE_SERVICES, SERVICES, TOOLS } from "@/lib/data";

export default function Solutions() {
  return (
    <section id="services" className="py-16 md:py-24" aria-labelledby="services-heading">
      <Container>
        <SectionHeading
          id="services-heading"
          eyebrow="Services"
          title="Four things we build most often"
          subtitle="Each one starts with a single workflow in your business and grows from there."
        />
        <Reveal>
          <ul className="grid gap-6 md:grid-cols-2 md:gap-8">
            {SERVICES.map((s) => (
              <li key={s.title} className="flex flex-col gap-3 rounded-lg border border-line bg-surface p-6 md:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-subtle text-primary">
                  <Icon name={s.icon} />
                </span>
                <h3 className="mt-2 font-display text-[22px] font-bold leading-[30px] text-ink">{s.title}</h3>
                <p className="text-muted">{s.body}</p>
                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-1.5 pt-2 font-display text-[15px] font-semibold text-link hover:underline"
                >
                  Talk to us about this
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-12 grid gap-8 border-t border-line pt-8 md:grid-cols-2">
          <div>
            <h3 className="font-display text-[15px] font-bold text-ink">We also build</h3>
            <p className="mt-2 text-muted">{MORE_SERVICES.join(" · ")}</p>
          </div>
          <div>
            <h3 className="font-display text-[15px] font-bold text-ink">Tools we work with</h3>
            <p className="mt-2 text-muted">{TOOLS.join(" · ")}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
