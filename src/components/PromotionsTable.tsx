
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PromotionFilters } from "./promotions/PromotionFilters";
import { PromotionTableRow } from "./promotions/PromotionTableRow";
import { filterPromotions } from "./promotions/promotionUtils";
import { promotionsData } from "@/data/promotionsData";

export function PromotionsTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  
  const filteredPromotions = filterPromotions(promotionsData, searchQuery, statusFilter);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Promotion Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <PromotionFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />
        
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="hidden md:table-cell">Order Date</TableHead>
                <TableHead className="hidden md:table-cell">End Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden sm:table-cell">Amount</TableHead>
                <TableHead className="hidden lg:table-cell">Code</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPromotions.length > 0 ? (
                filteredPromotions.map((promotion) => (
                  <PromotionTableRow key={promotion.id} promotion={promotion} />
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} className="h-24 text-center">
                    No promotions found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
