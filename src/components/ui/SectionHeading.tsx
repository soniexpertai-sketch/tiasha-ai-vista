import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-3xl ${alignCls} mb-12 md:mb-16`}>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.2em] mb-4 ${
          dark ? "text-gold" : "text-emerald"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] tracking-tight ${
          dark ? "text-white" : "text-body"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base md:text-lg leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
