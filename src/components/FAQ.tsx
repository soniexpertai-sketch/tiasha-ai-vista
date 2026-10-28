import { Plus } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { CONTACT, FAQS } from "@/lib/data";

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24" aria-labelledby="faq-heading">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Questions people ask on the first call" />
          <p className="-mt-6 text-muted">
            Something else?{" "}
            <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-link underline-offset-4 hover:underline">
              Ask us on WhatsApp
            </a>
            .
          </p>
        </div>
        <Reveal>
          <div className="border-t border-line">
            {FAQS.map((faq, i) => (
              <details key={faq.q} className="group border-b border-line" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-[17px] font-bold leading-6 text-ink [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <Plus
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-45"
                  />
                </summary>
                <p className="pb-6 pr-8 text-muted">{faq.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
