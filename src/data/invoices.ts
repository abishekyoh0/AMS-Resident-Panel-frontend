import Due from "../assets/Invoices/timer.png"
import Paid from "..//assets/Invoices/Tick.png"
import AllTime from "../assets/Invoices/Graph.png"

export interface Charge {
  name: string;
  amount: number;
}

export interface SummaryCard {
  id: number;
  icon?: string;
  title: string;
  amount: string;
  tag: string;
  gradient: string;
  border: string;
  tagBg: string;
  tagcolor: string;
}

export interface PaymentInfo {
  paidAmount: number;
  balance: number;
  paymentDate: string;
  mode: string;
  transactionId: string;
  receipt: string;
}

export interface Invoice {
  id: string;
  month: string;
  status: "PAID" | "PENDING";
  amount: number;
  dueDate: string;
  charges: Charge[];
  payment?: PaymentInfo;
  transaction?: string | number;
}

export const summaryCards: SummaryCard[] = [
  {
    id: 1,
    icon: Due,
    title: "Pending Payment",
    amount: "₹4,200",
    tag: "Due",
    gradient: "from-[#F0B10033] to-[#FF690033]",
    border: "#FDC7004D",
    tagBg: "#F0B10033",
    tagcolor: "#FDC700",
  },
  {
    id: 2,
    icon: Paid,
    title: "Total Paid",
    amount: "₹8,400",
    tag: "Paid",
    gradient: "from-[#00C95033] to-[#00BC7D33]",
    border: "#05DF724D",
    tagBg: "#00C95033",
    tagcolor: "#05DF72",
  },
  {
    id: 3,
    icon: AllTime,
    title: "Total Invoiced",
    amount: "₹12,600",
    tag: "All Time",
    gradient: "from-[#AD46FF33] to-[#F6339A33]",
    border: "#C27AFF4D",
    tagBg: "#AD46FF33",
    tagcolor: "#C27AFF",
  },
];


export const invoices: Invoice[] = [
  {
    id: "INV-2026-01",
    month: "January 2026",
    status: "PENDING",
    amount: 4200,
    dueDate: "2026-02-05",
    charges: [
      { name: "Maintenance Charge", amount: 3500 },
      { name: "Water Charge", amount: 200 },
      { name: "Parking Charge", amount: 500 }
    ]
  },

  {
    id: "INV-2025-12",
    month: "December 2025",
    status: "PAID",
    amount: 4200,
    dueDate: "2026-01-05",
    charges: [
      { name: "Maintenance Charge", amount: 3500 },
      { name: "Water Charge", amount: 200 },
      { name: "Parking Charge", amount: 500 }
    ],
    payment: {
      paidAmount: 4200,
      balance: 0,
      paymentDate: "2025-12-28",
      mode: "UPI",
      transactionId: "TXN-123456",
      receipt: "RCP-2025-12"
    }
  }
];