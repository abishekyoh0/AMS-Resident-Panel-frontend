import { useState } from "react";
import { invoices, summaryCards, type Invoice } from "../../data/invoices";
import InvoiceDetailsModal from "../../components/Invoices/InvoiceDetailsModal";
import PaymentModal from "../../components/Invoices/PaymentModal";
import ReceiptModal from "../../components/Invoices/ReceiptModal";
import { FONTSIZE, WEIGHT, COLORS } from "../../constent/uiconstent";
import date from "../../assets/Invoices/Calender.png"

export default function InvoicesPage() {

  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [modalType, setModalType] = useState<"view" | "payment" | "receipt" | null>(null);
  const filters = ["All", "Pending", "Paid", "Overdue", "Partial"];

  const [activeFilter, setActiveFilter] = useState("All");

  const openModal = (type: any, invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedInvoice(null);
    setModalType(null);
  };

  const filteredInvoices =
    activeFilter === "All" ? invoices : invoices.filter(
      (inv) => inv.status.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div style={{ color: COLORS.primary_white }}>

      <div className="mb-6">
        <h1 className={`${FONTSIZE[36]}`} style={{ fontWeight: WEIGHT.seven }}>Invoices & Payments</h1>
        <p className={`mb-4 ${FONTSIZE[16]}`} style={{ color: COLORS.secoundy_gray, fontWeight: WEIGHT.four }}>
          View and manage your rent and maintenance payments
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3 mb-6">
        {summaryCards.map((card) => (
          <div key={card.id}
            className={`bg-linear-to-r ${card.gradient} p-5 rounded-xl`}>
            <div className="flex justify-between items-center mb-4">
              <img src={card.icon} alt="" />
              <div className={`px-2 py-1 rounded-full ${FONTSIZE[12]}`}
                style={{ background: card.tagBg, color: card.tagcolor, fontWeight: WEIGHT.seven }}>
                {card.tag}
              </div>
            </div>
            <h2 className={`${FONTSIZE[30]}`} style={{ fontWeight: WEIGHT.seven }}>{card.amount}</h2>
            <p className={`mt-2 ${FONTSIZE[16]}`} style={{ color: COLORS.secoundy_gray }}>{card.title}</p>
          </div>
        ))}
      </div>

      <div className="flex overflow-x-auto gap-3 mb-6">

        {filters.map((filter) => (
          <button key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-1 rounded-xl uppercase cursor-pointer ${FONTSIZE[14]} ${activeFilter === filter ? "bg-[#AD46FF]" : "bg-[#FFFFFF0D] hover:bg-gray-700"}`}>
            {filter}
          </button>
        ))}

      </div>

      <div className="space-y-4">
        {filteredInvoices.map((invoice) => (
          <div key={invoice.id}
            className="bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-xl p-5">

            <div className="flex flex-wrap justify-between mb-4">
              <div className="flex items-center gap-5 mb-2">
                <p className={`${FONTSIZE[14]}`} style={{ color: COLORS.secoundy_gray }}>{invoice.id}</p>

                <p className={`px-3 py-1 rounded-full ${FONTSIZE[12]}
                   ${invoice.status === "PAID" ? "bg-[#00C95033] border border-[#00C95066] text-[#05DF72]" : "bg-[#F0B10033] border border-[#F0B10066] text-[#FDC700]"}`}
                  style={{ fontWeight: WEIGHT.seven }}>
                  {invoice.status}
                </p>
              </div>

              <div className={`flex gap-3 flex-wrap ${FONTSIZE[14]}`} style={{ fontWeight: WEIGHT.seven }}>

                <button onClick={() => openModal("view", invoice)} className="bg-[#00B8DB33] border border-[#00D3F24D] text-[#00D3F2] px-4 py-1 rounded-xl cursor-pointer">
                  View
                </button>

                <button onClick={() => openModal("view", invoice)} className="bg-[#2B7FFF33] border border-[#51A2FF4D] text-[#51A2FF] px-4 py-1 rounded-xl cursor-pointer">
                  Invoice
                </button>

                {invoice.status === "PENDING" && (
                  <button onClick={() => openModal("payment", invoice)} className="bg-linear-to-r from-[#00C950] to-[#009966] px-4 py-1 rounded-xl cursor-pointer">
                    Pay Now
                  </button>
                )}

                {invoice.status === "PAID" && (
                  <button onClick={() => openModal("receipt", invoice)}
                    className="bg-[#00C95033] border border-[#05DF724D] text-[#05DF72] px-4 py-1 rounded-xl cursor-pointer">
                    Receipt
                  </button>
                )}

              </div>
            </div>

            <h2 className={`flex items-center gap-3 ${FONTSIZE[24]}`} style={{ fontWeight: WEIGHT.seven }}>
              <img src={date} alt="" />{invoice.month}</h2>

            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-4`} style={{ color: COLORS.secoundy_gray }}>

              <div>
                <p className={`${FONTSIZE[14]}`}>Amount</p>
                <p className={`${FONTSIZE[18]}`} style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}>₹{invoice.amount}</p>
              </div>

              <div>
                <p className={`${FONTSIZE[14]}`}>Paid</p>
                <p className={`${FONTSIZE[18]}`} style={{ fontWeight: WEIGHT.seven, color: "#05DF72" }}>
                  {invoice.status === "PAID" ? `₹${invoice.amount}` : "₹0"}
                </p>
              </div>

              <div>
                <p className={`${FONTSIZE[14]}`}>Balance</p>
                <p className={`${FONTSIZE[18]}`} style={{ fontWeight: WEIGHT.seven, color: "#FDC700" }}>
                  {invoice.status === "PAID" ? "₹0" : `₹${invoice.amount}`}
                </p>
              </div>

              <div>
                <p className={`${FONTSIZE[14]}`}>Due Date</p>
                <p className={`${FONTSIZE[18]}`} style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}>{invoice.dueDate}</p>
              </div>

            </div>


            {invoice.status === "PAID" && invoice.transaction && (
              <div className="mt-4 bg-green-900/30 border border-green-700 rounded p-3 text-sm w-3xl flex justify-between flex-wrap gap-4">
                <span>Paid On: 2025-12-26</span>
                <span>Transaction ID: {invoice.transaction}</span>
                <span>Mode: {invoice.payment?.mode}</span>
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