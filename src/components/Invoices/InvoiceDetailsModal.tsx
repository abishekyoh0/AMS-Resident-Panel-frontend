
export default function InvoiceDetailsModal({ invoice, close }: any) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">

      <div className="bg-linear-to-br from-indigo-900 to-black p-6 rounded-xl w-125">

        <h2 className="text-xl font-bold mb-4">Invoice Details</h2>

        <div className="bg-gray-900 p-4 rounded mb-4">

          <div className="flex justify-between">
            <div>
              <p className="text-gray-400 text-sm">Month</p>
              <p>{invoice.month}</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Due Date</p>
              <p>{invoice.dueDate}</p>
            </div>
          </div>

        </div>

        <div className="bg-gray-900 p-4 rounded">

          <h3 className="mb-3 font-semibold">Charges Breakdown</h3>

          {invoice.charges.map((c: any, i: number) => (
            <div key={i} className="flex justify-between text-sm mb-2">
              <span>{c.name}</span>
              <span>${c.amount}</span>
            </div>
          ))}

          <div className="flex justify-between mt-4 font-semibold text-cyan-400">
            <span>Total Amount</span>
            <span>${invoice.amount}</span>
          </div>

        </div>

        <button className="w-full bg-blue-600 mt-4 py-2 rounded">
          Download Invoice
        </button>

        <button
          onClick={close}
          className="w-full mt-3 bg-purple-600 py-2 rounded"
        >
          Close
        </button>

      </div>
    </div>
  );
}