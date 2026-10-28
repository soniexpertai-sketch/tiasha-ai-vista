import Reveal from "./Reveal";

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2
        id={id}
        className="font-display text-[28px] font-bold leading-9 text-ink md:text-[32px] md:leading-10"
      >
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-[17px] leading-7 text-muted md:text-lg">{subtitle}</p>}
    </Reveal>
  );
}
