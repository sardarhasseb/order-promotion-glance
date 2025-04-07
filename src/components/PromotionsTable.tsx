
import { useState } from "react";
import { Calendar, Check, Clock, Info, Package, PackageCheck, Search, Tag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "./StatusBadge";

// Types
type Promotion = {
  id: string;
  name: string;
  orderDate: string;
  endDate: string;
  status: "Ordered" | "Cancelled" | "In Preparation" | "Dispatched" | "Closed";
  amount: string;
  code: string;
};

// Sample data
const promotionsData: Promotion[] = [
  {
    id: "PR-2023-001",
    name: "Summer Sale 2023",
    orderDate: "2023-06-01",
    endDate: "2023-08-31",
    status: "Closed",
    amount: "$1,200.00",
    code: "SUMMER23"
  },
  {
    id: "PR-2023-002",
    name: "Back to School",
    orderDate: "2023-08-15",
    endDate: "2023-09-15",
    status: "Closed",
    amount: "$850.00",
    code: "BTS2023"
  },
  {
    id: "PR-2023-003",
    name: "Black Friday",
    orderDate: "2023-11-15",
    endDate: "2023-11-30",
    status: "Closed",
    amount: "$2,500.00",
    code: "BF23"
  },
  {
    id: "PR-2023-004",
    name: "Holiday Season",
    orderDate: "2023-12-01",
    endDate: "2023-12-31",
    status: "Closed",
    amount: "$3,200.00",
    code: "HOLIDAY23"
  },
  {
    id: "PR-2024-001",
    name: "New Year Sale",
    orderDate: "2024-01-01",
    endDate: "2024-01-15",
    status: "Closed",
    amount: "$1,800.00",
    code: "NY2024"
  },
  {
    id: "PR-2024-002",
    name: "Valentine's Day",
    orderDate: "2024-02-01",
    endDate: "2024-02-14",
    status: "Closed",
    amount: "$950.00",
    code: "VDAY24"
  },
  {
    id: "PR-2024-003",
    name: "Spring Collection",
    orderDate: "2024-03-01",
    endDate: "2024-04-30",
    status: "Dispatched",
    amount: "$1,500.00",
    code: "SPRING24"
  },
  {
    id: "PR-2024-004",
    name: "Easter Promotions",
    orderDate: "2024-03-15",
    endDate: "2024-04-10",
    status: "In Preparation",
    amount: "$780.00",
    code: "EASTER24"
  },
  {
    id: "PR-2024-005",
    name: "Mother's Day Special",
    orderDate: "2024-04-15",
    endDate: "2024-05-12",
    status: "Ordered",
    amount: "$1,200.00",
    code: "MOM2024"
  },
  {
    id: "PR-2024-006",
    name: "Flash Sale April",
    orderDate: "2024-04-01",
    endDate: "2024-04-03",
    status: "Ordered",
    amount: "$600.00",
    code: "FLASH0423"
  },
  {
    id: "PR-2024-007",
    name: "Summer Preview",
    orderDate: "2024-05-01",
    endDate: "2024-05-15",
    status: "Cancelled",
    amount: "$950.00",
    code: "SUMMER24PRE"
  }
];

// Status icon mapping
const statusIcons = {
  "Ordered": <Clock className="h-4 w-4 text-status-ordered" />,
  "Cancelled": <X className="h-4 w-4 text-status-cancelled" />,
  "In Preparation": <Package className="h-4 w-4 text-status-in-preparation" />,
  "Dispatched": <PackageCheck className="h-4 w-4 text-status-dispatched" />,
  "Closed": <Check className="h-4 w-4 text-status-closed" />
};

export function PromotionsTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  
  // Filter promotions based on search query and status
  const filteredPromotions = promotionsData.filter(promotion => {
    const matchesSearch = 
      promotion.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      promotion.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      promotion.code.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || promotion.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Promotion Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search promotions..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="Ordered">Ordered</SelectItem>
              <SelectItem value="In Preparation">In Preparation</SelectItem>
              <SelectItem value="Dispatched">Dispatched</SelectItem>
              <SelectItem value="Closed">Closed</SelectItem>
              <SelectItem value="Cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
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
                  <TableRow key={promotion.id} className="animate-fade-in">
                    <TableCell className="font-medium">{promotion.id}</TableCell>
                    <TableCell>{promotion.name}</TableCell>
                    <TableCell className="hidden md:table-cell">{new Date(promotion.orderDate).toLocaleDateString()}</TableCell>
                    <TableCell className="hidden md:table-cell">{new Date(promotion.endDate).toLocaleDateString()}</TableCell>
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
                      >
                        <Info className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
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
