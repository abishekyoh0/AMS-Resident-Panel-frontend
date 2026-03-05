import { useState } from "react";
import { invoices, summaryCards, type Invoice } from "../../data/invoices";
import InvoiceDetailsModal from "../../components/Invoices/InvoiceDetailsModal";
import PaymentModal from "../../components/Invoices/PaymentModal";
import ReceiptModal from "../../components/Invoices/ReceiptModal";
import { FONTSIZE, WEIGHT, COLORS } from "../../constent/uiconstent";

export default function InvoicesPage() {

  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [modalType, setModalType] = useState< "view" | "payment" | "receipt" | null >(null);

  const openModal = (type: any, invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedInvoice(null);
    setModalType(null);
  };

  return (
    <div className="text-white">

      <div className="mb-6">
        <h1 className={`${FONTSIZE[36]}`} style={{fontWeight: WEIGHT.seven}}>Invoices & Payments</h1>
        <p className={`mb-4 ${FONTSIZE[16]}`} style={{ color: COLORS.secoundy_gray, fontWeight: WEIGHT.four }}>
          View and manage your rent and maintenance payments
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3 mb-6">
        {summaryCards.map((card) => (
          <div key={card.id}
            className={`bg-linear-to-r ${card.gradient} p-5 rounded-xl relative`}>
            <div className="flex justify-between items-center mb-4">
              <img src={ card.icon } alt="" />
              <div className={`text-xs  px-2 py-1 rounded-full`}
                style={{ background: card.tagBg, color: card.tagcolor }}>
                {card.tag}
              </div>
            </div>

            <h2 className="text-2xl font-semibold">{card.amount}</h2>
            <p className="text-sm mt-1">{card.title}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {invoices.map((invoice) => (
          <div key={invoice.id}
            className="bg-gray-900 border border-gray-700 rounded-xl p-5">

            <div className="flex justify-between mb-2">
              <div>
                <p className="text-sm text-gray-400">{invoice.id}</p>
                <h2 className="text-lg font-semibold">{invoice.month}</h2>
              </div>

              <span className={`px-3 py-1 text-xs rounded-full 
              ${ invoice.status === "PAID" ? "bg-green-600" : "bg-yellow-600" }`} >
                {invoice.status}
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mt-4">

              <div>
                <p className="text-gray-400">Amount</p>
                <p>₹{invoice.amount}</p>
              </div>

              <div>
                <p className="text-gray-400">Paid</p>
                <p className="text-green-400">
                  {invoice.status === "PAID" ? `₹${invoice.amount}` : "$0"}
                </p>
              </div>

              <div>
                <p className="text-gray-400">Balance</p>
                <p className="text-yellow-400">
                  {invoice.status === "PAID" ? "₹0" : `₹${invoice.amount}`}
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

            {invoice.status === "PAID" && invoice.transaction && (
              <div className="mt-4 bg-green-900/30 border border-green-700 rounded p-3 text-sm w-3xl flex justify-between flex-wrap gap-4">
                <span>Paid On: 2025-12-26</span>
                <span>Transaction ID: {invoice.transaction}</span>
                <span>Mode: UPI</span>
              </div>
            )}

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