import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/utils/cn";

export default function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  className, 
  isLoading, 
  disabled, 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-ring disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-pulsai-blue text-white hover:bg-pulsai-blue/90 shadow-lg shadow-pulsai-blue/20",
    secondary: "bg-surface text-white border border-border hover:bg-surface-hover hover:border-gray-500",
    ghost: "bg-transparent hover:bg-surface/50 text-gray-300 hover:text-white",
    danger: "bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20",
  };

  const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-5 text-sm",
    lg: "h-12 px-8 text-base",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      disabled={disabled || isLoading}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </motion.button>
  );
}