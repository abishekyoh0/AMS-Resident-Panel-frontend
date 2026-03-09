import { COLORS, FONTSIZE, WEIGHT } from "../../constent/uiconstent";
import Doc from "../../assets/Invoices/download.png"
import { X } from "lucide-react";

export default function InvoiceDetailsModal({ invoice, close }: any) {
    return (
        <div className="fixed inset-0 z-50 bg-[#FFFFFF66] flex items-center justify-center">

            <div className="bg-linear-to-br from-[#0A0A1E] to-[#0F0520] border border-[#00D3F280] p-6 rounded-xl w-125">
                <div className="flex justify-between items-center">
                    <h2 className={`${FONTSIZE[30]}`} style={{ fontWeight: WEIGHT.seven }}>Invoice Details</h2>
                    <div className="flex gap-4">
                    <p className={`px-3 py-1 rounded-full ${FONTSIZE[14]}
                        ${invoice.status === "PAID" ? "bg-[#00C95033] border border-[#00C95066] text-[#05DF72]" : "bg-[#F0B10033] border border-[#F0B10066] text-[#FDC700]"}`}
                        style={{ fontWeight: WEIGHT.seven }}>
                        {invoice.status}
                    </p>
                    <button onClick={close} className=" p-2 rounded-full hover:bg-white/10 transition cursor-pointer">
                        <X size={18} className="text-gray-300" />
                    </button>
                    </div>
                </div>
                <p className={`mb-4 ${FONTSIZE[14]}`} style={{ color: COLORS.secoundy_gray }}>{invoice.id}</p>


                <div className="bg-[#FFFFFF0D] border-[#FFFFFF1A] p-4 rounded-xl mb-4">
                    <p className={`mb-5 ${FONTSIZE[20]}`} style={{ fontWeight: WEIGHT.seven }}>Billing Period</p>
                    <div className="flex gap-25">
                        <div>
                            <p className={`${FONTSIZE[14]}`} style={{ color: COLORS.secoundy_gray }}>Month</p>
                            <p className={`${FONTSIZE[18]}`} style={{ fontWeight: WEIGHT.seven }}>{invoice.month}</p>
                        </div>

                        <div>
                            <p className={`${FONTSIZE[14]}`} style={{ color: COLORS.secoundy_gray }}>Due Date</p>
                            <p className={`${FONTSIZE[18]}`} style={{ fontWeight: WEIGHT.seven }}>{invoice.dueDate}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#FFFFFF0D] border-[#FFFFFF1A] p-4 rounded-xl">

                    <h3 className={`mb-4 ${FONTSIZE[20]}`} style={{ fontWeight: WEIGHT.seven }}>Charges Breakdown</h3>

                    {invoice.charges.map((c: any, i: number) => (
                        <div key={i} className="flex justify-between mb-2">
                            <span className={`${FONTSIZE[16]}`} style={{ color: COLORS.secoundy_gray }}>{c.name}</span>
                            <span className={`${FONTSIZE[16]}`} style={{ fontWeight: WEIGHT.seven }}>₹{c.amount}</span>
                        </div>
                    ))}

                    <div className="flex justify-between mt-4">
                        <span className={`${FONTSIZE[18]}`} style={{ fontWeight: WEIGHT.seven }}>Total Amount</span>
                        <span className={`${FONTSIZE[24]}`} style={{ color: "#00D3F2", fontWeight: WEIGHT.seven }}>₹{invoice.amount}</span>
                    </div>

                </div>

                <button className={`w-full flex justify-center items-center gap-3 bg-[#2B7FFF33] border border-[#51A2FF4D] text-[#51A2FF] mt-4 py-2 rounded-full cursor-pointer ${FONTSIZE[16]}`}
                    style={{ fontWeight: WEIGHT.seven }}>
                    <img src={Doc} alt="" /> Download Invoice
                </button>

                <button onClick={close} className={`w-full mt-3 bg-linear-to-r from-[#00B8DB] to-[#7F22FE] py-2 rounded-full cursor-pointer ${FONTSIZE[16]}`}
                    style={{ fontWeight: WEIGHT.seven }}>
                    Close
                </button>

            </div>
        </div>
    );
}