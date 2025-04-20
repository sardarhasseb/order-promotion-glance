
import { Clock, Check, X, Package, PackageCheck } from "lucide-react";
import type { PromotionStatus } from "@/types/promotion";

export const statusIcons: Record<PromotionStatus, JSX.Element> = {
  "Ordered": <Clock className="h-4 w-4 text-status-ordered" />,
  "Cancelled": <X className="h-4 w-4 text-status-cancelled" />,
  "In Preparation": <Package className="h-4 w-4 text-status-in-preparation" />,
  "Dispatched": <PackageCheck className="h-4 w-4 text-status-dispatched" />,
  "Closed": <Check className="h-4 w-4 text-status-closed" />
};

export const filterPromotions = (promotions: Promotion[], searchQuery: string, statusFilter: string) => {
  return promotions.filter(promotion => {
    const matchesSearch = 
      promotion.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      promotion.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      promotion.code.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || promotion.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
};
