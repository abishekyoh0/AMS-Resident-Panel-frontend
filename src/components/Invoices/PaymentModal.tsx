import { useState } from "react";
import { COLORS, FONTSIZE, WEIGHT } from "../../constent/uiconstent";
import { X } from "lucide-react";

export default function PaymentModal({ invoice, close }: any) {

    const [method, setMethod] = useState("UPI");

    const payNow = () => {
        alert(`Payment successful using ${method}`);
        close();
    };

    return (
        <div className="fixed inset-0 z-50 bg-[#FFFFFF66] flex items-center justify-center">

            <div className="bg-linear-to-br from-[#0A0A1E] to-[#0F0520] border border-[#00D3F280] p-4 rounded-xl w-105">
                <div className="flex justify-between items-center mb-4">
                    <h2 className={`${FONTSIZE[30]}`} style={{ fontWeight: WEIGHT.seven }}>Make Payment</h2>
                    <button onClick={close} className=" p-2 rounded-full hover:bg-white/10 transition cursor-pointer">
                        <X size={18} className="text-gray-300" />
                    </button>
                </div>
                <div className="bg-[#FFFFFF0D] border-[#FFFFFF1A] p-4 rounded-xl mb-4 text-center">
                    <p className={`${FONTSIZE[14]}`} style={{ color: COLORS.secoundy_gray }}>Amount Due</p>
                    <p className={`${FONTSIZE[36]}`} style={{ fontWeight: WEIGHT.seven, color: "#00D3F2" }}>₹{invoice.amount}</p>
                    <p className={`${FONTSIZE[14]}`} style={{ color: COLORS.secoundy_gray }}>Invoice: {invoice.id}</p>
                </div>

                <div>
                    <p className={`mb-2 ${FONTSIZE[14]}`} style={{ fontWeight: WEIGHT.seven }}>Payment Method *</p>
                    <select className="w-full bg-gray-900 border border-gray-700 p-2 rounded-xl mb-4"
                        onChange={(e) => setMethod(e.target.value)}>
                        <option className="text-center">UPI</option>
                        <option className="text-center">Cash</option>
                        <option className="text-center">Bank Transfer</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="">Amount *</label>
                    <input type="number" placeholder={invoice.amount} className="w-full bg-gray-900 border border-gray-700 p-2 rounded-xl mb-1" />
                    <p className={`${FONTSIZE[12]}`} style={{ color: COLORS.secoundy_gray }}>Max: ${invoice.amount}</p>
                </div>

                <div className={`bg-[#2B7FFF1A] border border-[#51A2FF4D] rounded-xl px-4 py-3 mt-5`}>
                    <p>✅ Secure payment processing</p>
                    <p>Your payment will be processed securely and a receipt will be generated immediately.</p>
                </div>
                <div className="flex items-center gap-3 mt-5">
                    <button onClick={close} className="w-full bg-[#FFFFFF1A] border border-[#FFFFFF33] py-2 rounded-full cursor-pointer">
                        Cancel
                    </button>
                    <button onClick={payNow} className="w-full bg-linear-to-r from-[#00C950] to-[#009966] py-2 rounded-full cursor-pointer"
                        style={{ boxShadow: "0px 8px 10px -6px #00C95040,0px 20px 25px -5px #00C95040" }}>
                        Pay Now
                    </button>
                </div>
            </div>

        </div>
    );
}