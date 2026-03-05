export interface Charge {
  name: string;
  amount: number;
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
}

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