import { TECH_TRUST } from "@/lib/data";

export default function TrustBar() {
  const items = [...TECH_TRUST, ...TECH_TRUST];
  return (
    <section aria-label="Technology we work with" className="border-y border-line bg-surface py-10">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        Technology we work with
      </p>
      <div className="relative mx-auto max-w-7xl overflow-hidden px-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-14">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-lg font-bold tracking-tight text-muted/70 transition-colors hover:text-emerald"
              aria-hidden={i >= TECH_TRUST.length}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
