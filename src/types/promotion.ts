
export type PromotionStatus = "Ordered" | "Cancelled" | "In Preparation" | "Dispatched" | "Closed";

export type Promotion = {
  id: string;
  name: string;
  orderDate: string;
  endDate: string;
  status: PromotionStatus;
  amount: string;
  code: string;
};
