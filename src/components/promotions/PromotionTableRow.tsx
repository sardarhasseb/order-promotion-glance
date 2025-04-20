
import { Info, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/StatusBadge";
import type { Promotion } from "@/types/promotion";
import { statusIcons } from "./promotionUtils";

interface PromotionTableRowProps {
  promotion: Promotion;
}

export function PromotionTableRow({ promotion }: PromotionTableRowProps) {
  return (
    <TableRow className="animate-fade-in">
      <TableCell className="font-medium">{promotion.id}</TableCell>
      <TableCell>{promotion.name}</TableCell>
      <TableCell className="hidden md:table-cell">
        {new Date(promotion.orderDate).toLocaleDateString()}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {new Date(promotion.endDate).toLocaleDateString()}
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          {statusIcons[promotion.status]}
          <StatusBadge status={promotion.status} />
        </div>
      </TableCell>
      <TableCell className="hidden sm:table-cell">{promotion.amount}</TableCell>
      <TableCell className="hidden lg:table-cell">
        <div className="flex items-center">
          <Tag className="mr-1 h-3 w-3" />
          {promotion.code}
        </div>
      </TableCell>
      <TableCell className="text-right">
        <Button
          variant="ghost"
          size="icon"
          aria-label="View details"
          asChild
        >
          <Link to={`/promotion/${promotion.id}`}>
            <Info className="h-4 w-4" />
          </Link>
        </Button>
      </TableCell>
    </TableRow>
  );
}
