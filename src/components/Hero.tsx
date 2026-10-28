import { ArrowRight, CheckCheck, MapPin } from "lucide-react";
import Button from "./ui/Button";
import Container from "./ui/Container";
import HeroScene from "./HeroScene";

type Msg = { from: "them" | "us"; text: string; time: string };

const CHAT: Msg[] = [
  { from: "them", text: "Hi, saw the 2BHK in Baner on 99acres. Still available? What's the price?", time: "10:42 pm" },
  {
    from: "us",
    text: "Hi Neha, yes, two units are open on the 6th and 9th floor. ₹1.18 Cr and ₹1.24 Cr, all-inclusive. Would you like to see them this weekend?",
    time: "10:42 pm",
  },
  { from: "them", text: "Sunday morning works", time: "10:44 pm" },
  {
    from: "us",
    text: "Booked: Sunday, 11:00 am with Rohan from our sales team. Location pin below. Reply here if anything changes.",
    time: "10:45 pm",
  },
];

function ChatScreen() {
  return (
    <figure className="mx-auto w-full max-w-[400px]" aria-label="Example WhatsApp conversation handled by an assistant">
      <div className="overflow-hidden rounded-[18px] border border-line bg-surface shadow-card">
        <div className="flex items-center gap-3 border-b border-line px-4 py-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-subtle font-display text-sm font-bold text-ink">
            BP
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[15px] font-semibold leading-5 text-ink">Sales desk · Baner project</p>
            <p className="text-xs leading-4 text-muted">Example conversation</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 bg-subtle px-3 py-4 text-[14px] leading-[21px]">
          <p className="mx-auto mb-1 rounded-md bg-surface px-2.5 py-0.5 text-[11px] font-medium text-muted">Today</p>
          {CHAT.map((m, i) => (
            <div
              key={i}
              className={`max-w-[84%] rounded-lg px-3 pb-1.5 pt-2 ${
                m.from === "us"
                  ? "self-end rounded-tr-none bg-[#dcebfb] text-ink dark:bg-[#123b72]"
                  : "self-start rounded-tl-none bg-surface text-ink"
              }`}
            >
              <p>{m.text}</p>
              <p className="mt-0.5 flex items-center justify-end gap-1 text-[11px] text-muted">
                {m.time}
                {m.from === "us" && <CheckCheck className="h-3.5 w-3.5 text-primary" aria-label="Read" />}
              </p>
            </div>
          ))}
          <div className="flex items-center gap-2 self-end rounded-lg rounded-tr-none bg-[#dcebfb] px-3 py-2 text-[13px] text-ink dark:bg-[#123b72]">
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            Sample flat, Baner Road
          </div>
        </div>
      </div>
      <figcaption className="mt-3 px-1 text-[13px] leading-5 text-[#c5d4e6]">
        A typical late-night enquiry. The visit lands in the agent&apos;s calendar and the CRM; nobody had to be awake.
      </figcaption>
    </figure>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-navy pb-20 pt-16 text-white md:pb-32 md:pt-24">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <HeroScene />
        {/* keeps the copy readable over the moving field */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,28,63,0.9)_0%,rgba(1,28,63,0.55)_45%,rgba(1,28,63,0.15)_100%)] lg:bg-[linear-gradient(90deg,rgba(1,28,63,0.92)_0%,rgba(1,28,63,0.7)_38%,rgba(1,28,63,0)_70%)]" />
      </div>
      <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="eyebrow mb-6 flex flex-wrap items-center gap-2 !text-white">
            Automate <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
            Innovate <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
            Grow
          </p>
          <h1 className="font-display text-[40px] font-extrabold leading-[46px] tracking-[-0.01em] text-white md:text-[56px] md:leading-[60px]">
            Every enquiry answered, even at 11&nbsp;pm.
          </h1>
          <p className="mt-6 max-w-[34rem] text-[19px] leading-[30px] text-[#c5d4e6]">
            We set up WhatsApp and voice assistants, and the back-office automations behind them, for small and
            mid-sized businesses. Your leads get a reply in a minute. Your team stops copying data between apps.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact">
              Book a free 30-min call
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="#how-it-works" variant="secondary" className="!border-white/40 !text-white hover:!border-white hover:!bg-white/10">
              See how it works
            </Button>
          </div>
          <p className="mt-8 text-sm leading-[22px] text-[#a9bdd6]">
            Based in Pune. Working with SMEs across India. We reply within one working day.
          </p>
        </div>

        <div>
          <ChatScreen />
        </div>
      </Container>
    </section>
  );
}
