import type { ReactNode } from "react";

// 1200px content width; 16px gutter on phones, 48px on desktop.
export default function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1296px] px-4 md:px-8 lg:px-12 ${className}`}>{children}</div>;
}
