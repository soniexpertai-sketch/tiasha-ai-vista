import { MessageCircle, Mic, ScanText, Workflow, Sparkles, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = { MessageCircle, Mic, ScanText, Workflow, Sparkles };

export default function Icon({
  name,
  className = "h-6 w-6",
  strokeWidth = 1.75,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = ICONS[name] ?? Sparkles;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
