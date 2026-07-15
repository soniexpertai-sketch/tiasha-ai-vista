import { ArrowRight, PhoneCall, ShieldCheck, Clock, IndianRupee, Headset, Zap } from "lucide-react";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import { HERO_STATS } from "@/lib/data";

const STAT_ICONS = [Clock, IndianRupee, Headset, Zap];

function DashboardIllustration() {
  return (
    <div className="relative" aria-hidden="true">
      {/* Glow */}
      <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-tr from-emerald/20 via-gold/10 to-transparent blur-2xl" />

      <div className="relative rounded-2xl border border-line bg-surface p-4 shadow-card-hover sm:p-5">
        {/* Window chrome */}
        <div className="mb-4 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-forest/30" />
          <span className="ml-3 h-2 w-24 rounded-full bg-surface-2" />
        </div>

        <svg viewBox="0 0 520 340" className="w-full" role="img">
          {/* KPI tiles */}
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${16 + i * 168}, 16)`}>
              <rect width="152" height="72" rx="10" fill="var(--surface-2)" />
              <rect x="14" y="14" width="52" height="8" rx="4" fill="var(--border-strong)" />
              <text x="14" y="54" fontSize="24" fontWeight="700" fill="var(--forest)" className="dark:[fill:var(--gold)]">
                {["₹4.2L", "1,284", "96%"][i]}
              </text>
              <path d="M110 48 l10 -10 l8 6 l14 -16" stroke="var(--gold)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </g>
          ))}

          {/* Chart card */}
          <g transform="translate(16, 104)">
            <rect width="320" height="150" rx="10" fill="var(--surface-2)" />
            <rect x="16" y="14" width="80" height="8" rx="4" fill="var(--border-strong)" />
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
              const heights = [38, 56, 44, 72, 60, 88, 76, 104];
              return (
                <rect
                  key={i}
                  x={20 + i * 37}
                  y={134 - heights[i]}
                  width="20"
                  height={heights[i]}
                  rx="4"
                  fill={i === 7 ? "var(--gold)" : "var(--emerald)"}
                  opacity={i === 7 ? 1 : 0.35 + i * 0.08}
                  className="animate-grow-bar"
                  style={{ animationDelay: `${i * 90}ms` }}
                />
              );
            })}
          </g>

          {/* AI workflow panel */}
          <g transform="translate(352, 104)">
            <rect width="152" height="150" rx="10" fill="var(--forest)" />
            <text x="16" y="28" fontSize="11" fontWeight="600" fill="#d4af37" letterSpacing="1.5">
              AI WORKFLOW
            </text>
            {/* nodes */}
            {[
              { cx: 30, cy: 56 }, { cx: 76, cy: 48 }, { cx: 122, cy: 62 },
              { cx: 46, cy: 96 }, { cx: 98, cy: 104 }, { cx: 128, cy: 128 }, { cx: 28, cy: 128 },
            ].map((n, i) => (
              <circle
                key={i}
                cx={n.cx}
                cy={n.cy}
                r="4.5"
                fill="#d4af37"
                className="animate-pulse-dot"
                style={{ animationDelay: `${i * 300}ms` }}
              />
            ))}
            <g stroke="rgba(212,175,55,0.45)" strokeWidth="1.25" fill="none">
              <path d="M30 56 L76 48 L122 62" className="animate-dash" />
              <path d="M76 48 L46 96 L98 104" className="animate-dash" style={{ animationDelay: "400ms" }} />
              <path d="M98 104 L128 128 M46 96 L28 128" className="animate-dash" style={{ animationDelay: "800ms" }} />
            </g>
          </g>

          {/* Activity rows */}
          <g transform="translate(16, 268)">
            <rect width="488" height="56" rx="10" fill="var(--surface-2)" />
            {[0, 1, 2].map((i) => (
              <g key={i} transform={`translate(${16 + i * 160}, 16)`}>
                <circle cx="12" cy="12" r="12" fill="var(--emerald)" opacity="0.2" />
                <circle cx="12" cy="12" r="5" fill="var(--emerald)" className="animate-pulse-dot" style={{ animationDelay: `${i * 500}ms` }} />
                <rect x="32" y="4" width="86" height="7" rx="3.5" fill="var(--border-strong)" />
                <rect x="32" y="16" width="56" height="6" rx="3" fill="var(--border)" />
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* Floating stat chips */}
      {HERO_STATS.map((stat, i) => {
        const Icon = STAT_ICONS[i];
        const positions = [
          "-left-4 top-6 sm:-left-10",
          "-right-3 top-24 sm:-right-8",
          "-left-3 bottom-24 sm:-left-8",
          "-right-4 -bottom-4 sm:-right-6",
        ];
        return (
          <div
            key={stat.label}
            className={`animate-float absolute ${positions[i]} flex items-center gap-2.5 rounded-xl border border-line bg-surface px-3.5 py-2.5 shadow-card`}
            style={{ animationDelay: `${i * 1.4}s` }}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-soft text-emerald">
              <Icon className="h-4 w-4" strokeWidth={2} />
            </span>
            <span>
              <span className="block font-display text-sm font-extrabold leading-none text-body">{stat.value}</span>
              <span className="mt-1 block text-[11px] font-medium leading-none text-muted">{stat.label}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-emerald/10 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-semibold text-emerald shadow-sm">
              <ShieldCheck className="h-3.5 w-3.5" />
              Trusted AI automation partner for growing businesses
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-body sm:text-5xl lg:text-[3.5rem]">
              Transform Your Business with{" "}
              <span className="relative whitespace-nowrap text-emerald">
                Intelligent AI
                <svg aria-hidden="true" viewBox="0 0 200 9" className="absolute -bottom-1.5 left-0 w-full" preserveAspectRatio="none">
                  <path d="M1 7 Q100 -3 199 6" stroke="var(--gold)" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>{" "}
              Automation
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              We build AI-powered workflows, chatbots, AI agents, voice assistants, and business
              automations that save time, reduce costs, and increase revenue.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="#contact" size="lg">
                Book Free AI Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#demo" variant="outline" size="lg">
                <PhoneCall className="h-4 w-4" />
                Watch Demo
              </Button>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-8 text-sm text-muted">
              <span className="font-semibold text-body">Trusted by businesses</span>{" "}
              across real estate, healthcare, manufacturing, retail &amp; finance.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="px-6 sm:px-8 lg:px-0">
          <DashboardIllustration />
        </Reveal>
      </div>
    </section>
  );
}
