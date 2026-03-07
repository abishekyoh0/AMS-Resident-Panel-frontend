export default function ReceiptModal({ invoice, close }: any) {

  const payment = invoice.payment;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">

      <div className="bg-linear-to-br from-indigo-900 to-black p-6 rounded-xl w-130">

        <h2 className="text-xl font-bold mb-4">Payment Information</h2>

        <div className="bg-gray-900 p-4 rounded grid grid-cols-2 gap-4 text-sm">

          <div>
            <p className="text-gray-400">Paid Amount</p>
            <p>${payment.paidAmount}</p>
          </div>

          <div>
            <p className="text-gray-400">Balance</p>
            <p>${payment.balance}</p>
          </div>

          <div>
            <p className="text-gray-400">Payment Date</p>
            <p>{payment.paymentDate}</p>
          </div>

          <div>
            <p className="text-gray-400">Mode</p>
            <p>{payment.mode}</p>
          </div>

          <div>
            <p className="text-gray-400">Transaction ID</p>
            <p>{payment.transactionId}</p>
          </div>

          <div>
            <p className="text-gray-400">Receipt</p>
            <p>{payment.receipt}</p>
          </div>

        </div>

        <button className="w-full bg-blue-600 mt-4 py-2 rounded">
          Download Invoice
        </button>

        <button className="w-full bg-green-600 mt-2 py-2 rounded">
          Download Receipt
        </button>

        <button
          onClick={close}
          className="w-full bg-purple-600 mt-3 py-2 rounded"
        >
          Close
        </button>

      </div>
    </div>
  );
}