
import { ArrowLeft, Calendar, DollarSign, Tag, User } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/StatusBadge";
import { promotionsData } from "@/data/promotionsData";
import type { Promotion } from "@/types/promotion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-8 flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Promotions
          </Button>
          <h1 className="text-2xl font-semibold text-gray-900">{promotion.title}</h1>
        </div>

        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7 space-y-6">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gray-50 border-b">
                <CardTitle>Promotion Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="grid gap-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Description</h3>
                    <p className="text-gray-600 whitespace-pre-wrap">
                      {promotion.prizeDescription}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <p className="font-medium text-gray-700">Start Date</p>
                      <p className="text-gray-600">{new Date(promotion.startDate).toLocaleDateString()}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium text-gray-700">End Date</p>
                      <p className="text-gray-600">{new Date(promotion.endDate).toLocaleDateString()}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium text-gray-700">Prize Draw Date</p>
                      <p className="text-gray-600">{new Date(promotion.prizeDrawDate).toLocaleDateString()}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium text-gray-700">Order Before</p>
                      <p className="text-gray-600">{new Date(promotion.orderBeforeDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-gray-50 border-b">
                <CardTitle>Order Details</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <p className="font-medium text-gray-700">Order Number</p>
                      <p className="text-gray-600">{promotion.orderNo}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium text-gray-700">Ordered By</p>
                      <p className="text-gray-600">{promotion.orderBy}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium text-gray-700">Order Date & Time</p>
                      <p className="text-gray-600">
                        {new Date(promotion.orderDate).toLocaleDateString()} {promotion.orderTime}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium text-gray-700">Status</p>
                      <StatusBadge status={promotion.status} />
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="font-medium text-gray-900 mb-4">Items</h3>
                    <div className="space-y-3">
                      {promotion.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-2 px-4 bg-gray-50 rounded-lg">
                          <span className="text-gray-700">{item.description}</span>
                          <span className="font-medium">${item.price.toFixed(2)}</span>
                        </div>
                      ))}
                      <div className="flex justify-between items-center py-3 px-4 bg-primary/5 rounded-lg mt-4">
                        <span className="font-medium text-gray-900">Total Cost</span>
                        <span className="font-semibold text-primary">${promotion.totalCost.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-5 space-y-6">
            <Card className="overflow-hidden">
              <AspectRatio ratio={16/9}>
                <img
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
                  alt={promotion.title}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {promotion.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-medium text-gray-700">Venue</p>
                    <p className="text-gray-600">{promotion.venue}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-gray-700">Promotion Code</p>
                    <code className="px-3 py-1 bg-gray-100 rounded-md text-sm font-mono">
                      {promotion.code}
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionDetailsPage;
