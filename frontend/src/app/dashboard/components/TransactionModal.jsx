import { X } from "lucide-react";

export default function TransactionModal({ transaction, onClose }) {
  if (!transaction) return null;

  return (
    <div className="fixed inset-0  bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl p-6 rounded-xl shadow-xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-black">
          <X />
        </button>
        <h2 className="text-xl font-bold mb-1">Transaction Details</h2>
        <p className="text-sm text-gray-500 mb-6">Complete information for transaction {transaction.id}</p>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div><span className="font-semibold">User ID:</span> {transaction.userId}</div>
          <div><span className="font-semibold">Merchant:</span> {transaction.merchant}</div>
          <div><span className="font-semibold">Amount:</span> <span className="text-green-600 font-semibold">${transaction.amount}</span></div>
          <div><span className="font-semibold">Payment Method:</span> {transaction.paymentMethod}</div>
          <div><span className="font-semibold">Location:</span> {transaction.location}</div>
          <div><span className="font-semibold">IP Address:</span> <span className="font-mono">{transaction.ipAddress}</span></div>
          <div><span className="font-semibold">Device:</span> {transaction.device}</div>
          <div>
            <span className="font-semibold">Fraud Score:</span> 
            <span className={`ml-2 px-2 py-1 rounded-full text-white text-xs font-bold ${
              transaction.fraudScore > 80 ? "bg-red-500" : transaction.fraudScore > 50 ? "bg-yellow-500" : "bg-green-500"
            }`}>
              {transaction.fraudScore}% - {transaction.fraudScore > 80 ? "High Risk" : transaction.fraudScore > 50 ? "Medium Risk" : "Low Risk"}
            </span>
          </div>
        </div>

        <div className="mb-3">
          <h3 className="font-semibold text-sm text-gray-700 mb-1">AI Explanation</h3>
          <div className="bg-blue-50 text-blue-800 border border-blue-200 p-3 rounded-md text-sm">
            {transaction.explanation}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-sm text-gray-700 mb-1">Risk Factors</h3>
          <div className="flex flex-wrap gap-2">
            {transaction.riskFactors.map((factor, idx) => (
              <span
                key={idx}
                className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium border border-red-300"
              >
                {factor}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm"
          >
            Close
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm"
          >
            Mark Safe
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm"
          >
            Escalate
          </button>
        </div>
      </div>
    </div>
  );
}
