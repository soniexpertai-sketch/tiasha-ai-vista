import { Quote } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-surface py-20 md:py-28" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
        />
        <ul className="grid gap-6 md:grid-cols-3" role="list">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-card border border-line bg-bg p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <Quote className="mb-4 h-7 w-7 text-gold" aria-hidden="true" />
                <blockquote className="flex-1 text-[15px] leading-relaxed text-body">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-forest font-display text-sm font-bold text-gold"
                  >
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-body">{t.name}</span>
                    <span className="block text-xs text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
