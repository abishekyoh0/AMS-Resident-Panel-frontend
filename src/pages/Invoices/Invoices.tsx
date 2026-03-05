import { useState } from "react";
import { invoices, type Invoice } from "../../data/invoices";
import InvoiceDetailsModal from "../../components/Invoices/InvoiceDetailsModal";
import PaymentModal from "../../components/Invoices/PaymentModal";
import ReceiptModal from "../../components/Invoices/ReceiptModal";

export default function InvoicesPage() {

  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [modalType, setModalType] = useState<
    "view" | "payment" | "receipt" | null
  >(null);

  const openModal = (type: any, invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedInvoice(null);
    setModalType(null);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <h1 className="text-2xl font-bold mb-6">Invoices & Payments</h1>

      <div className="space-y-4">

        {invoices.map((invoice) => (

          <div
            key={invoice.id}
            className="bg-gray-900 border border-gray-700 rounded-xl p-5"
          >

            <div className="flex justify-between mb-2">

              <div>
                <p className="text-sm text-gray-400">{invoice.id}</p>
                <h2 className="text-lg font-semibold">{invoice.month}</h2>
              </div>

              <span
                className={`px-3 py-1 text-xs rounded-full ${
                  invoice.status === "PAID"
                    ? "bg-green-600"
                    : "bg-yellow-600"
                }`}
              >
                {invoice.status}
              </span>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mt-4">

              <div>
                <p className="text-gray-400">Amount</p>
                <p>${invoice.amount}</p>
              </div>

              <div>
                <p className="text-gray-400">Paid</p>
                <p className="text-green-400">
                  {invoice.status === "PAID" ? `$${invoice.amount}` : "$0"}
                </p>
              </div>

              <div>
                <p className="text-gray-400">Balance</p>
                <p className="text-yellow-400">
                  {invoice.status === "PAID" ? "$0" : `$${invoice.amount}`}
                </p>
              </div>

              <div>
                <p className="text-gray-400">Due Date</p>
                <p>{invoice.dueDate}</p>
              </div>

            </div>

            <div className="flex gap-3 mt-5 flex-wrap">

              <button
                onClick={() => openModal("view", invoice)}
                className="bg-blue-600 px-4 py-1 rounded"
              >
                View
              </button>

              <button
                onClick={() => openModal("view", invoice)}
                className="bg-indigo-600 px-4 py-1 rounded"
              >
                Invoice
              </button>

              {invoice.status === "PENDING" && (
                <button
                  onClick={() => openModal("payment", invoice)}
                  className="bg-green-600 px-4 py-1 rounded"
                >
                  Pay Now
                </button>
              )}

              {invoice.status === "PAID" && (
                <button
                  onClick={() => openModal("receipt", invoice)}
                  className="bg-emerald-600 px-4 py-1 rounded"
                >
                  Receipt
                </button>
              )}

            </div>

          </div>
        ))}

      </div>


      {modalType === "view" && selectedInvoice && (
        <InvoiceDetailsModal invoice={selectedInvoice} close={closeModal} />
      )}

      {modalType === "payment" && selectedInvoice && (
        <PaymentModal invoice={selectedInvoice} close={closeModal} />
      )}

      {modalType === "receipt" && selectedInvoice && (
        <ReceiptModal invoice={selectedInvoice} close={closeModal} />
      )}
    </div>
  );
}