import { cn } from "@/utils/cn";
import { ChevronDown } from "lucide-react";

export function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-300 mb-1.5 ml-1">
      {children}
    </label>
  );
}

export function Input({ className, error, id, label, ...props }) {
  return (
    <div className="w-full">
      {label && <Label htmlFor={id}>{label}</Label>}
      <input
        id={id}
        className={cn(
          "flex h-11 w-full rounded-xl border border-border bg-background px-4 py-2 text-sm text-white placeholder:text-gray-500 focus-ring hover:border-gray-500 transition-colors",
          error && "border-red-500 focus:ring-red-500/50",
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-400 mt-1 ml-1">{error}</p>}
    </div>
  );
}

export function Select({ className, error, id, label, options = [], ...props }) {
  return (
    <div className="w-full relative">
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className="relative">
        <select
          id={id}
          className={cn(
            "flex h-11 w-full appearance-none rounded-xl border border-border bg-background px-4 py-2 text-sm text-white focus-ring hover:border-gray-500 transition-colors pr-10 cursor-pointer",
            error && "border-red-500",
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-3.5 h-4 w-4 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );
}