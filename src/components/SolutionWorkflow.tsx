import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";
import { WORKFLOW_STEPS } from "@/lib/data";

export default function SolutionWorkflow() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 md:py-28" aria-labelledby="workflow-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="The Solution"
          title="How Tiasha AI Vista Solves It"
          subtitle="One connected pipeline — from the first enquiry to the final report — running itself, end to end."
        />

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6" role="list">
          {WORKFLOW_STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 90} className="relative">
              <div className="group h-full rounded-card border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-white/[0.1]">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold transition-colors group-hover:bg-gold group-hover:text-forest-deep">
                  <Icon name={step.icon} className="h-5 w-5" />
                </span>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gold/80">
                  Step {i + 1}
                </p>
                <h3 className="mt-1 font-display text-base font-bold text-white">{step.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/60">{step.body}</p>
              </div>
              {i < WORKFLOW_STEPS.length - 1 && (
                <svg
                  aria-hidden="true"
                  className="absolute -right-4 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-gold/60 lg:block"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M2 8h10m0 0L8 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </Reveal>
          ))}
        </ol>

        <Reveal delay={500} className="mt-12">
          <svg viewBox="0 0 1200 40" className="hidden w-full lg:block" aria-hidden="true">
            <path
              d="M20 20 H1180"
              stroke="rgba(212,175,55,0.35)"
              strokeWidth="1.5"
              className="animate-dash"
              fill="none"
            />
            {[20, 252, 484, 716, 948, 1180].map((x, i) => (
              <circle key={x} cx={x} cy="20" r="5" fill="#d4af37" className="animate-pulse-dot" style={{ animationDelay: `${i * 250}ms` }} />
            ))}
          </svg>
        </Reveal>
      </div>
    </section>
  );
}
