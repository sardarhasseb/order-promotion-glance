
import { ArrowLeft, Calendar, DollarSign, Tag, User } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/StatusBadge";
import { promotionsData } from "@/data/promotionsData";
import type { Promotion } from "@/types/promotion";

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
      <div className="container max-w-screen 2xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Title:</span>
                  <span>{promotion.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Order Before Date:</span>
                  <span>{new Date(promotion.orderBeforeDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Start Date:</span>
                  <span>{new Date(promotion.startDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">End Date:</span>
                  <span>{new Date(promotion.endDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Prize Draw Date:</span>
                  <span>{new Date(promotion.prizeDrawDate).toLocaleDateString()}</span>
                </div>
                <div className="mt-4">
                  <span className="font-medium">Prize Description:</span>
                  <p className="mt-2 text-sm text-gray-600 whitespace-pre-wrap">
                    {promotion.prizeDescription}
                  </p>
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
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Order No:</span>
                  <span>{promotion.orderNo}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Order By:</span>
                  <span>{promotion.orderBy}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Order Date & Time:</span>
                  <span>
                    {new Date(promotion.orderDate).toLocaleDateString()} {promotion.orderTime}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Venue:</span>
                  <span>{promotion.venue}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Promotion Cost:</span>
                  <span>${promotion.promotionCost.toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Quantity:</span>
                  <span>{promotion.quantity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Total Cost:</span>
                  <span>${promotion.totalCost.toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Status:</span>
                  <StatusBadge status={promotion.status} />
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Promotion Code:</span>
                  <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                    {promotion.code}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-4">Items</h3>
                <div className="space-y-3">
                  {promotion.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b">
                      <span>{item.description}</span>
                      <span>${item.price.toFixed(2)}</span>
                    </div>
                  ))}
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
