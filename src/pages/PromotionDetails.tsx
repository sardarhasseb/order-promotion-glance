
import { ArrowLeft, Calendar, DollarSign, ShoppingBag, Store, User } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/StatusBadge";

// Using the existing type from PromotionsTable and importing sample data
type Promotion = {
  id: string;
  name: string;
  orderDate: string;
  endDate: string;
  status: "Ordered" | "Cancelled" | "In Preparation" | "Dispatched" | "Closed";
  amount: string;
  code: string;
};

// Sample data for promotions
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

// Mock data lookup - replace with actual data fetching
const getPromotionDetails = (id: string): Promotion | undefined => {
  return promotionsData.find(promo => promo.id === id);
};

const PromotionDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const promotion = getPromotionDetails(id || "");

  if (!promotion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="pt-6">
            <p>Promotion not found</p>
            <Button onClick={() => navigate("/")} className="mt-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Promotions
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Promotions
          </Button>
          <h1 className="text-2xl font-semibold">Promotion Details</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Promotion Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Name:</span>
                  <span>{promotion.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Order Date:</span>
                  <span>{new Date(promotion.orderDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">End Date:</span>
                  <span>{new Date(promotion.endDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Amount:</span>
                  <span>{promotion.amount}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Order ID:</span>
                  <span>{promotion.id}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Store className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Status:</span>
                  <StatusBadge status={promotion.status} />
                </div>
                <div className="flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Promotion Code:</span>
                  <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                    {promotion.code}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PromotionDetailsPage;
