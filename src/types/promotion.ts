
export type PromotionStatus = "Ordered" | "Cancelled" | "In Preparation" | "Dispatched" | "Closed";

export type PromotionItem = {
  description: string;
  price: number;
};

export type Promotion = {
  id: string;
  name: string;
  title: string;
  orderBeforeDate: string;
  startDate: string;
  endDate: string;
  prizeDrawDate: string;
  prizeDescription: string;
  orderNo: string;
  orderBy: string;
  orderDate: string;
  orderTime: string;
  promotionCost: number;
  quantity: number;
  totalCost: number;
  venue: string;
  status: PromotionStatus;
  items: PromotionItem[];
  code: string;
};
