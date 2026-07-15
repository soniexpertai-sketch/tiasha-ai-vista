"use client";

import { useState } from "react";
import { Bot, Mic, BarChart3, Send, PhoneCall } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const TABS = [
  { id: "chatbot", label: "AI Chatbot", icon: Bot },
  { id: "voice", label: "Voice Agent", icon: Mic },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
] as const;

type TabId = (typeof TABS)[number]["id"];

function ChatDemo() {
  return (
    <div className="mx-auto max-w-md">
      <div className="mb-4 flex items-center gap-3 border-b border-line pb-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-gold">
          <Bot className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-bold text-body">Tiasha Assistant</p>
          <p className="flex items-center gap-1.5 text-xs text-emerald">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Online — replies instantly
          </p>
        </div>
      </div>
      <div className="space-y-3 text-sm">
        <div className="max-w-[80%] rounded-2xl rounded-tl-md bg-surface-2 px-4 py-2.5 text-body">
          Hi! 👋 I can book a free AI consultation for you. What does your business do?
        </div>
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-md bg-forest px-4 py-2.5 text-white">
          We run a real estate agency and miss a lot of enquiries at night.
        </div>
        <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-surface-2 px-4 py-2.5 text-body">
          Perfect — our WhatsApp AI answers every enquiry in seconds, 24×7, and books site visits
          straight into your calendar. Shall I schedule a 20-minute demo this week?
        </div>
        <div className="flex w-16 items-center gap-1.5 rounded-2xl rounded-tl-md bg-surface-2 px-4 py-3">
          {[0, 1, 2].map((i) => (
            <span key={i} className="animate-typing h-1.5 w-1.5 rounded-full bg-muted" style={{ animationDelay: `${i * 180}ms` }} />
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-full border border-line bg-bg px-4 py-2.5">
        <span className="flex-1 text-sm text-muted">Type a message…</span>
        <Send className="h-4 w-4 text-emerald" />
      </div>
    </div>
  );
}

function VoiceDemo() {
  return (
    <div className="mx-auto max-w-md text-center">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-forest shadow-[0_0_0_12px_rgba(47,125,87,0.12),0_0_0_24px_rgba(47,125,87,0.06)]">
        <PhoneCall className="h-8 w-8 text-gold" />
      </div>
      <p className="text-sm font-bold text-body">Incoming call · Clinic front desk</p>
      <p className="mt-1 text-xs text-muted">AI Voice Agent answering — 00:12</p>
      <div className="mx-auto mt-6 flex h-14 items-end justify-center gap-1.5" aria-hidden="true">
        {[0.5, 0.8, 0.4, 1, 0.65, 0.9, 0.5, 0.75, 0.35, 0.85, 0.6, 0.95, 0.45].map((h, i) => (
          <span
            key={i}
            className="animate-eq w-1.5 rounded-full bg-emerald"
            style={{ height: `${h * 56}px`, animationDelay: `${i * 90}ms` }}
          />
        ))}
      </div>
      <div className="mt-6 space-y-2.5 text-left text-sm">
        <div className="rounded-xl bg-surface-2 px-4 py-2.5 text-body">
          <span className="mr-2 text-[10px] font-bold uppercase tracking-wider text-emerald">AI</span>
          Good morning! Dr. Mehta&apos;s clinic. Would you like to book an appointment?
        </div>
        <div className="rounded-xl bg-surface-2 px-4 py-2.5 text-body">
          <span className="mr-2 text-[10px] font-bold uppercase tracking-wider text-gold">Caller</span>
          Yes — tomorrow morning if possible.
        </div>
        <div className="rounded-xl bg-emerald-soft px-4 py-2.5 text-body">
          <span className="mr-2 text-[10px] font-bold uppercase tracking-wider text-emerald">AI</span>
          Booked: 10:30 AM with Dr. Mehta. A confirmation is on its way to your WhatsApp. ✓
        </div>
      </div>
    </div>
  );
}

function AnalyticsDemo() {
  const bars = [42, 58, 50, 74, 66, 90, 82, 104];
  return (
    <div className="mx-auto max-w-lg">
      <div className="mb-5 grid grid-cols-3 gap-3">
        {[
          { v: "1,284", l: "Leads captured" },
          { v: "312", l: "Visits booked" },
          { v: "9 sec", l: "Avg. response" },
        ].map((kpi) => (
          <div key={kpi.l} className="rounded-xl bg-surface-2 p-4 text-center">
            <p className="font-display text-xl font-extrabold text-forest dark:text-gold">{kpi.v}</p>
            <p className="mt-1 text-[11px] font-medium text-muted">{kpi.l}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-surface-2 p-5">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-bold text-body">Conversions this quarter</p>
          <p className="text-xs font-semibold text-emerald">↑ 47% vs last quarter</p>
        </div>
        <div className="flex h-32 items-end gap-3" aria-hidden="true">
          {bars.map((h, i) => (
            <div key={i} className="flex-1">
              <div
                className={`animate-grow-bar w-full rounded-t-md ${i === bars.length - 1 ? "bg-gold" : "bg-emerald"}`}
                style={{ height: `${h}px`, opacity: i === bars.length - 1 ? 1 : 0.35 + i * 0.08, animationDelay: `${i * 90}ms` }}
              />
            </div>
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[10px] font-medium text-muted">
          <span>Week 1</span><span>Week 8</span>
        </div>
      </div>
    </div>
  );
}

export default function DemoShowcase() {
  const [active, setActive] = useState<TabId>("chatbot");

  return (
    <section id="demo" className="bg-surface py-20 md:py-28" aria-labelledby="demo-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="See It in Action"
          title="Your AI Workforce, Live"
          subtitle="A glimpse of the experiences we build — chat, voice, and the numbers behind them."
        />
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <div role="tablist" aria-label="Demo type" className="mb-8 flex justify-center gap-2">
              {TABS.map((tab) => {
                const TabIcon = tab.icon;
                const selected = active === tab.id;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`panel-${tab.id}`}
                    onClick={() => setActive(tab.id)}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      selected
                        ? "bg-forest text-white shadow-[0_8px_24px_rgba(15,59,46,0.25)]"
                        : "border border-line text-muted hover:border-gold hover:text-body"
                    }`}
                  >
                    <TabIcon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
            <div
              id={`panel-${active}`}
              role="tabpanel"
              className="rounded-2xl border border-line bg-bg p-6 shadow-card sm:p-10"
            >
              {active === "chatbot" && <ChatDemo />}
              {active === "voice" && <VoiceDemo />}
              {active === "analytics" && <AnalyticsDemo />}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
