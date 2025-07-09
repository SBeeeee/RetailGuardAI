"use client"
import {useState,React} from "react";
import { Eye, ShieldX, Check } from "lucide-react";
import { transactions } from "./data";
import TransactionModal from "./TransactionModal";

export default function TransactionTable() {
    const [selectedTxn, setSelectedTxn] = useState(null);
  return (
    <>
    <div className="bg-white rounded-xl shadow overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-left">
            <th className="p-3">User ID</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Location</th>
            <th className="p-3">Time</th>
            <th className="p-3">Category</th>
            <th className="p-3">Fraud Score</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.id} className="border-t hover:bg-gray-50">
              <td className="p-3 font-medium">{txn.userId}</td>
              <td className="p-3 text-green-600 font-semibold">${txn.amount}</td>
              <td className="p-3">{txn.location}</td>
              <td className="p-3">{txn.time}</td>
              <td className="p-3">{txn.category}</td>
              <td className="p-3">
                <span className={`px-2 py-1 rounded-full text-white text-xs font-bold ${
                  txn.fraudScore > 80 ? "bg-red-500" : txn.fraudScore > 50 ? "bg-yellow-500" : "bg-green-500"
                }`}>
                  {txn.fraudScore}%
                </span>
              </td>
              <td className="p-3 flex gap-2">
                <Eye className="w-4 h-4 cursor-pointer text-blue-600" onClick={() => setSelectedTxn(txn)} />
                <Check className="w-4 h-4 cursor-pointer text-green-600" />
                <ShieldX className="w-4 h-4 cursor-pointer text-red-600" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
     <TransactionModal transaction={selectedTxn} onClose={() => setSelectedTxn(null)} />
    </>
  );
}
