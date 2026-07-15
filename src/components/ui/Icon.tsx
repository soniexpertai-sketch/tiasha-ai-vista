import {
  Bot, MessageCircle, Mic, TrendingUp, Database, Filter, FileText, ScanText,
  Mail, Users, Landmark, Receipt, BookOpen, Sparkles, Plug, Repeat, UserX,
  Timer, FileStack, TrendingDown, EyeOff, UserPlus, BrainCircuit, Workflow,
  BarChart3, Building2, HeartPulse, GraduationCap, ShoppingBag, Factory,
  HardHat, Truck, Briefcase, type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Bot, MessageCircle, Mic, TrendingUp, Database, Filter, FileText, ScanText,
  Mail, Users, Landmark, Receipt, BookOpen, Sparkles, Plug, Repeat, UserX,
  Timer, FileStack, TrendingDown, EyeOff, UserPlus, BrainCircuit, Workflow,
  BarChart3, Building2, HeartPulse, GraduationCap, ShoppingBag, Factory,
  HardHat, Truck, Briefcase,
};

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
