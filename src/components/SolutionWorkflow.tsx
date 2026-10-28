import SectionHeading from "./ui/SectionHeading";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { WALKTHROUGH } from "@/lib/data";

const LEADS = [
  { name: "Neha K.", source: "99acres", need: "2BHK · ₹1.2 Cr", status: "Visit Sun 11 am", tone: "success" },
  { name: "Amit P.", source: "WhatsApp", need: "3BHK · ₹1.8 Cr", status: "Callback 10 am", tone: "warning" },
  { name: "Sana M.", source: "Website", need: "2BHK · rent", status: "Not a fit", tone: "muted" },
] as const;

const toneCls = {
  success: "text-success",
  warning: "text-warning",
  muted: "text-muted",
};

function LeadBoard() {
  return (
    <figure aria-label="Example morning view of leads handled overnight">
      <div className="overflow-hidden rounded-lg border border-line bg-surface shadow-card">
        <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
          <p className="font-display text-[15px] font-bold text-ink">Overnight leads</p>
          <p className="text-[13px] text-muted">Mon, 9:00 am</p>
        </div>
        <table className="w-full text-left text-[14px] leading-5">
          <thead className="text-[12px] uppercase tracking-wider text-muted">
            <tr className="border-b border-line">
              <th scope="col" className="px-5 py-2.5 font-semibold">Lead</th>
              <th scope="col" className="hidden px-3 py-2.5 font-semibold sm:table-cell">Looking for</th>
              <th scope="col" className="px-5 py-2.5 text-right font-semibold">Next step</th>
            </tr>
          </thead>
          <tbody>
            {LEADS.map((l) => (
              <tr key={l.name} className="border-b border-line last:border-0">
                <td className="px-5 py-3">
                  <span className="block font-semibold text-ink">{l.name}</span>
                  <span className="text-[12px] text-muted">{l.source}</span>
                </td>
                <td className="hidden px-3 py-3 text-ink sm:table-cell">{l.need}</td>
                <td className={`px-5 py-3 text-right font-semibold ${toneCls[l.tone]}`}>{l.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption className="mt-3 text-[13px] leading-5 text-muted">
        What the sales team sees in the morning. Example data.
      </figcaption>
    </figure>
  );
}

export default function SolutionWorkflow() {
  return (
    <section id="how-it-works" className="bg-subtle py-16 md:py-24" aria-labelledby="how-heading">
      <Container>
        <SectionHeading
          id="how-heading"
          eyebrow="How it works"
          title="One lead, from first message to booked visit"
          subtitle="Here's what a WhatsApp enquiry desk does for a real estate team on a normal weeknight."
        />
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <ol className="relative border-l-2 border-line pl-7">
              {WALKTHROUGH.map((step, i) => (
                <li key={step.title} className="relative pb-8 last:pb-0">
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[37px] top-1.5 h-4 w-4 rounded-full border-2 ${
                      i === WALKTHROUGH.length - 1 ? "border-primary bg-primary" : "border-primary bg-subtle"
                    }`}
                  />
                  <p className="text-[13px] font-semibold text-accent">{step.time}</p>
                  <h3 className="mt-0.5 font-display text-lg font-bold leading-7 text-ink">{step.title}</h3>
                  <p className="mt-1 text-muted">{step.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={120} className="lg:pt-6">
            <LeadBoard />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
