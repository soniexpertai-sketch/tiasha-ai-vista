import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "gold" | "ghost-dark";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap";

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const variants = {
  primary:
    "bg-forest text-white hover:bg-gold hover:text-forest-deep shadow-[0_8px_24px_rgba(15,59,46,0.25)] hover:shadow-[0_8px_28px_rgba(212,175,55,0.35)] hover:-translate-y-0.5",
  outline:
    "border border-line-strong text-body hover:border-gold hover:text-body hover:bg-gold-soft hover:-translate-y-0.5",
  gold:
    "bg-gold text-forest-deep hover:bg-white hover:text-forest-deep shadow-[0_8px_24px_rgba(212,175,55,0.3)] hover:-translate-y-0.5",
  "ghost-dark":
    "border border-white/25 text-white hover:border-gold hover:text-gold hover:-translate-y-0.5",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
