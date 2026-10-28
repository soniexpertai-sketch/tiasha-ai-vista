import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "on-navy";
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

// Mirrors .tav-btn from the design system: 10px radius, 44px min height, Montserrat 600.
const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border-2 px-6 py-3 font-display text-[15px] font-semibold leading-5 tracking-[0.01em] transition-colors whitespace-nowrap";

const variants = {
  primary: "border-transparent bg-primary text-on-primary hover:bg-primary-hover",
  secondary: "border-line-strong bg-transparent text-ink hover:border-ink hover:bg-subtle",
  "on-navy": "border-transparent bg-cyan text-navy hover:bg-white",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  onClick,
}: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
