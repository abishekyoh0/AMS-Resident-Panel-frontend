import { useState } from "react";

export default function PaymentModal({ invoice, close }: any) {

  const [method, setMethod] = useState("UPI");

  const payNow = () => {
    alert(`Payment successful using ${method}`);
    close();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">

      <div className="bg-linear-to-br from-indigo-900 to-black p-6 rounded-xl w-105">

        <h2 className="text-xl font-bold mb-4">Make Payment</h2>

        <div className="bg-gray-900 p-4 rounded mb-4 text-center">

          <p className="text-gray-400 text-sm">Amount Due</p>
          <p className="text-2xl text-cyan-400">${invoice.amount}</p>

        </div>

        <select
          className="w-full bg-gray-900 border border-gray-700 p-2 rounded mb-4"
          onChange={(e) => setMethod(e.target.value)}
        >
          <option>UPI</option>
          <option>Cash</option>
          <option>Bank Transfer</option>
        </select>

        <button
          onClick={payNow}
          className="w-full bg-green-600 py-2 rounded"
        >
          Pay Now
        </button>

        <button
          onClick={close}
          className="w-full bg-gray-700 py-2 rounded mt-2"
        >
          Cancel
        </button>

      </div>

    </div>
  );
}