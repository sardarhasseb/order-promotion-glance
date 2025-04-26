
import { ArrowLeft, Image } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/StatusBadge";
import { promotionsData } from "@/data/promotionsData";
import type { Promotion } from "@/types/promotion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";

const getPromotionDetails = (id: string): Promotion | undefined => {
  return promotionsData.find(promo => promo.id === id);
};

const PromotionDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const promotion = getPromotionDetails(id || "");

  if (!promotion) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-4 sm:py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")} 
            className="self-start hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">{promotion.name}</h1>
        </div>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Hero Section - Vertical Image */}
          <Card className="lg:col-span-2 shadow-lg border-none overflow-hidden">
            <AspectRatio ratio={3/4}>
              <img
                src={promotion.image || "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"}
                alt={promotion.title}
                className="object-cover w-full h-full"
              />
            </AspectRatio>
            <CardContent className="p-6 bg-white/80 backdrop-blur-sm">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">{promotion.title}</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{promotion.prizeDescription}</p>
            </CardContent>
          </Card>

          {/* Sidebar Content - Moves below on mobile */}
          <div className="space-y-6">
            <Card className="shadow-md">
              <CardHeader className="border-b bg-gray-50/50">
                <CardTitle className="text-lg">Promotion Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Tags */}
                  {promotion.tags && promotion.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {promotion.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {/* Basic Info */}
                  <div className="space-y-4">
                    <InfoItem label="Venue" value={promotion.venue} />
                    <InfoItem label="Promotion Code" value={
                      <code className="px-3 py-1 bg-gray-100 rounded-md text-sm font-mono">
                        {promotion.code}
                      </code>
                    } />
                  </div>

                  {/* Important Dates */}
                  <div className="space-y-4 pt-4 border-t">
                    <h4 className="font-medium text-gray-900">Important Dates</h4>
                    <InfoItem 
                      label="Start Date" 
                      value={new Date(promotion.startDate).toLocaleDateString()} 
                    />
                    <InfoItem 
                      label="End Date" 
                      value={new Date(promotion.endDate).toLocaleDateString()} 
                    />
                    <InfoItem 
                      label="Prize Draw Date" 
                      value={new Date(promotion.prizeDrawDate).toLocaleDateString()} 
                    />
                    <InfoItem 
                      label="Order Before" 
                      value={new Date(promotion.orderBeforeDate).toLocaleDateString()} 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Details Card */}
            <Card className="shadow-md">
              <CardHeader className="border-b bg-gray-50/50">
                <CardTitle className="text-lg">Order Details</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Order Info Grid */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <InfoItem label="Order Number" value={promotion.orderNo} />
                    <InfoItem label="Ordered By" value={promotion.orderBy} />
                    <InfoItem 
                      label="Order Date & Time" 
                      value={`${new Date(promotion.orderDate).toLocaleDateString()} ${promotion.orderTime}`} 
                    />
                    <InfoItem 
                      label="Status" 
                      value={<StatusBadge status={promotion.status} />} 
                    />
                  </div>

                  {/* Items List */}
                  <div className="border-t pt-4">
                    <h3 className="font-medium text-gray-900 mb-4">Items</h3>
                    <div className="space-y-3">
                      {promotion.items.map((item, index) => (
                        <div 
                          key={index} 
                          className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <span className="text-gray-700">{item.description}</span>
                          <span className="font-medium">${item.price.toFixed(2)}</span>
                        </div>
                      ))}
                      <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg mt-4">
                        <span className="font-medium text-gray-900">Total Cost</span>
                        <span className="font-semibold text-primary">${promotion.totalCost.toFixed(2)}</span>
                      </div>
                    </div>
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

// Helper component for consistent info display
const InfoItem = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className="space-y-1">
    <p className="text-sm font-medium text-gray-500">{label}</p>
    <div className="text-gray-900">{value}</div>
  </div>
);

export default PromotionDetailsPage;
