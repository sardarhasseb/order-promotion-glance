
import { ArrowLeft, Calendar, Share, Info } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StatusBadge } from "@/components/StatusBadge";
import { promotionsData } from "@/data/promotionsData";
import type { Promotion } from "@/types/promotion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useToast } from "@/hooks/use-toast";

const getPromotionDetails = (id: string): Promotion | undefined => {
  return promotionsData.find(promo => promo.id === id);
};

const PromotionDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const promotion = getPromotionDetails(id || "");

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "The promotion link has been copied to your clipboard.",
    });
  };

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
        {/* Top Navigation Bar */}
        <div className="flex justify-between items-center mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")} 
            className="hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <Button variant="outline" onClick={handleShare}>
            <Share className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-8 space-y-6">
            {/* Hero Section */}
            <Card className="overflow-hidden border-none shadow-xl">
              <AspectRatio ratio={3/4}>
                <img
                  src={promotion.image || "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"}
                  alt={promotion.title}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </Card>

            {/* Promotion Details */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{promotion.title}</h1>
                      <p className="text-gray-500 mt-2">{promotion.name}</p>
                    </div>
                    <StatusBadge status={promotion.status} className="mt-1" />
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {promotion.prizeDescription}
                    </p>
                  </div>

                  {/* Tags */}
                  {promotion.tags && promotion.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-4">
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
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Right Side */}
          <div className="lg:col-span-4 space-y-6">
            {/* Important Dates Card */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h2 className="font-semibold text-lg">Important Dates</h2>
                </div>
                <div className="space-y-4">
                  <DateItem 
                    label="Start Date" 
                    date={new Date(promotion.startDate)} 
                  />
                  <DateItem 
                    label="End Date" 
                    date={new Date(promotion.endDate)} 
                  />
                  <DateItem 
                    label="Prize Draw" 
                    date={new Date(promotion.prizeDrawDate)} 
                  />
                  <DateItem 
                    label="Order Before" 
                    date={new Date(promotion.orderBeforeDate)} 
                    highlight
                  />
                </div>
              </CardContent>
            </Card>

            {/* Order Details Card */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="h-5 w-5 text-primary" />
                  <h2 className="font-semibold text-lg">Order Information</h2>
                </div>
                <div className="space-y-4">
                  <InfoItem label="Order Number" value={promotion.orderNo} />
                  <InfoItem label="Ordered By" value={promotion.orderBy} />
                  <InfoItem label="Venue" value={promotion.venue} />
                  <InfoItem 
                    label="Promotion Code" 
                    value={
                      <code className="px-2 py-1 bg-primary/5 rounded-md text-sm font-mono">
                        {promotion.code}
                      </code>
                    } 
                  />
                </div>
              </CardContent>
            </Card>

            {/* Items and Cost Card */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
                <div className="space-y-3">
                  {promotion.items.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex justify-between items-center p-3 bg-gray-50/50 rounded-lg"
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper components for consistent display
const DateItem = ({ label, date, highlight = false }: { 
  label: string; 
  date: Date; 
  highlight?: boolean;
}) => (
  <div className={`p-3 rounded-lg ${highlight ? 'bg-primary/5' : 'bg-gray-50/50'}`}>
    <p className="text-sm text-gray-500">{label}</p>
    <p className={`font-medium ${highlight ? 'text-primary' : 'text-gray-900'}`}>
      {date.toLocaleDateString()}
    </p>
  </div>
);

const InfoItem = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className="space-y-1">
    <p className="text-sm text-gray-500">{label}</p>
    <div className="text-gray-900">{value}</div>
  </div>
);

export default PromotionDetailsPage;
