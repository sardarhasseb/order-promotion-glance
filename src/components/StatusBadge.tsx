
import { cn } from "@/lib/utils";

type StatusType = "Ordered" | "Cancelled" | "In Preparation" | "Dispatched" | "Closed";

const statusClasses = {
  "Ordered": "bg-blue-100 text-status-ordered",
  "Cancelled": "bg-red-100 text-status-cancelled",
  "In Preparation": "bg-amber-100 text-status-in-preparation",
  "Dispatched": "bg-green-100 text-status-dispatched",
  "Closed": "bg-gray-100 text-status-closed",
};

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span 
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        statusClasses[status],
        className
      )}
    >
      {status}
    </span>
  );
}
