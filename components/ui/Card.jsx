import { cn } from "@/utils/cn";

export function Card({ children, className }) {
  return (
    <div className={cn(
      "bg-surface border border-border rounded-xl shadow-sm p-6",
      className
    )}>
      {children}
    </div>
  );
}

export function CardHeader({ title, description, action }) {
  return (
    <div className="flex justify-between items-start mb-6">
      <div>
        <h3 className="text-lg font-display font-semibold text-white">{title}</h3>
        {description && <p className="text-sm text-gray-400 mt-1">{description}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}