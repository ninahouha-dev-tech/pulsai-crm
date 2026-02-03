import { cn } from "@/utils/cn";

export function Table({ headers, data, renderRow, className }) {
  return (
    <div className={cn("w-full overflow-hidden rounded-xl border border-border bg-surface", className)}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-400 uppercase bg-surface-hover/50 border-b border-border">
            <tr>
              {headers.map((h, i) => (
                <th key={i} className="px-6 py-4 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {data.map((item, index) => renderRow(item, index))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function TableCell({ children, className }) {
  return <td className={cn("px-6 py-4 text-gray-200", className)}>{children}</td>;
}