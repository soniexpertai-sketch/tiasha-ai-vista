"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "./ui/SectionHeading";
import { METRICS } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduced) {
          setDisplay(value);
          return;
        }
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(Math.round(eased * value));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 md:py-24" aria-labelledby="metrics-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[720px] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="Success Metrics"
          title="Results Our Clients Measure"
        />
        <dl className="grid grid-cols-2 gap-x-6 gap-y-12 text-center md:grid-cols-5">
          {METRICS.map((m) => (
            <div key={m.label}>
              <dd className="font-display text-4xl font-extrabold tracking-tight text-gold md:text-5xl">
                <Counter value={m.value} suffix={m.suffix} />
              </dd>
              <dt className="mt-3 text-sm font-bold text-white">{m.label}</dt>
              <p className="mt-1 text-xs text-white/55">{m.note}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
