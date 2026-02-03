import { cn } from "@/utils/cn";

export default function Badge({ children, variant = "default", className }) {
  const variants = {
    default: "bg-surface text-gray-300 border-border",
    success: "bg-pulsai-green/10 text-pulsai-green border-pulsai-green/20",
    warning: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    blue: "bg-pulsai-blue/10 text-pulsai-blue border-pulsai-blue/20",
  };

  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}