import { cn } from "@/utils/cn";

export function Skeleton({ className }) {
  return (
    <div className={cn("animate-pulse rounded-md bg-surface-hover", className)} />
  );
}

export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pulsai-blue"></div>
    </div>
  );
}