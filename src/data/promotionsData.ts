import { Promotion } from "@/types/promotion";

export const promotionsData: Promotion[] = [
  {
    id: "PR-2023-003",
    name: "Black Friday",
    title: "Golden Tickets",
    orderBeforeDate: "2023-01-03",
    startDate: "2024-01-11",
    endDate: "2023-09-09",
    prizeDrawDate: "2024-11-19",
    prizeDescription: "A Golden Ticket Promotion is a marketing strategy that uses an element of surprise and exclusivity to drive engagement and excitement among customers. Here's an overview of what a Golden Ticket Promotion generally includes and how it works:\n\nKey Elements of a Golden Ticket Promotion\nHidden Prizes or Rewards: Similar to the iconic \"golden ticket\" concept, a certain number of tickets (or similar items) are hidden within products, stores, or packages. These tickets serve as an entryway to exclusive prizes, discounts, or VIP experiences. For example, customers might find golden tickets inside specific product packaging, or they may receive a digital \"golden ticket\" after making a purchase.",
    orderNo: "PRM-ORD-000001",
    orderBy: "Haseeb Khan",
    orderDate: "2023-04-19",
    orderTime: "2:03 PM",
    promotionCost: 340.00,
    quantity: 3,
    totalCost: 1020.00,
    venue: "Algester Sports Inc",
    status: "Ordered",
    code: "BF23",
    tags: ["Featured", "Ending soon", "Tasi Favourite"],
    items: [
      {
        description: "Item Description",
        price: 80.00
      },
      {
        description: "POS & Delivery",
        price: 80.00
      },
      {
        description: "Vouchers",
        price: 260.00
      }
    ]
  },
  {
    id: "PR-2023-001",
    name: "Summer Sale 2023",
    title: "Summer Splash",
    orderBeforeDate: "2023-05-15",
    startDate: "2023-06-01",
    endDate: "2023-08-31",
    prizeDrawDate: "2023-09-05",
    prizeDescription: "Summer sale with exciting prizes",
    orderNo: "PRM-ORD-000002",
    orderBy: "John Doe",
    orderDate: "2023-05-20",
    orderTime: "10:00 AM",
    promotionCost: 200.00,
    quantity: 1,
    totalCost: 200.00,
    venue: "Central Mall",
    status: "Closed",
    code: "SUMMER23",
    items: [{ description: "Summer Package", price: 200.00 }]
  },
  {
    id: "PR-2023-002",
    name: "Back to School",
    orderDate: "2023-08-15",
    endDate: "2023-09-15",
    status: "Closed",
    code: "BTS2023"
  },
  {
    id: "PR-2023-004",
    name: "Holiday Season",
    orderDate: "2023-12-01",
    endDate: "2023-12-31",
    status: "Closed",
    code: "HOLIDAY23"
  },
  {
    id: "PR-2024-001",
    name: "New Year Sale",
    orderDate: "2024-01-01",
    endDate: "2024-01-15",
    status: "Closed",
    code: "NY2024"
  },
  {
    id: "PR-2024-002",
    name: "Valentine's Day",
    orderDate: "2024-02-01",
    endDate: "2024-02-14",
    status: "Closed",
    code: "VDAY24"
  },
  {
    id: "PR-2024-003",
    name: "Spring Collection",
    orderDate: "2024-03-01",
    endDate: "2024-04-30",
    status: "Dispatched",
    code: "SPRING24"
  },
  {
    id: "PR-2024-004",
    name: "Easter Promotions",
    orderDate: "2024-03-15",
    endDate: "2024-04-10",
    status: "In Preparation",
    code: "EASTER24"
  },
  {
    id: "PR-2024-005",
    name: "Mother's Day Special",
    orderDate: "2024-04-15",
    endDate: "2024-05-12",
    status: "Ordered",
    code: "MOM2024"
  },
  {
    id: "PR-2024-006",
    name: "Flash Sale April",
    orderDate: "2024-04-01",
    endDate: "2024-04-03",
    status: "Ordered",
    code: "FLASH0423"
  },
  {
    id: "PR-2024-007",
    name: "Summer Preview",
    orderDate: "2024-05-01",
    endDate: "2024-05-15",
    status: "Cancelled",
    code: "SUMMER24PRE"
  }
];
