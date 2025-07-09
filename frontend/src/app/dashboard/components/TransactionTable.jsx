"use client";
import { useState } from "react";
import { Eye, ShieldX, Check } from "lucide-react";
import { transactions as rawTransactions } from "./data";
import TransactionModal from "./TransactionModal";
import {
  searchTransactions,
  filterByStatus,
  filterByRiskLevel,
  paginateTransactions,
  getTotalPages,
} from "./helper";

export default function TransactionTable() {
  const [selectedTxn, setSelectedTxn] = useState(null);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [riskFilter, setRiskFilter] = useState("All");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  let filteredTxns = searchTransactions(rawTransactions, query);
  filteredTxns = filterByStatus(filteredTxns, statusFilter);
  filteredTxns = filterByRiskLevel(filteredTxns, riskFilter);

  const totalPages = getTotalPages(filteredTxns, limit);
  const paginatedTxns = paginateTransactions(filteredTxns, page, limit);

  return (
    <>
      <div className="bg-white rounded-xl shadow p-6">
        {/* Section Title */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800">Recent Transactions</h2>
          <p className="text-gray-500 text-sm">Monitor and manage flagged transactions</p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by user, merchant, or category..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setPage(1);
            }}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="All">Status: All</option>
            <option value="flagged">Flagged</option>
            <option value="blocked">Blocked</option>
            <option value="safe">Safe</option>
            <option value="review">Review</option>
          </select>

          <select
            value={riskFilter}
            onChange={(e) => {
              setRiskFilter(e.target.value);
              setPage(1);
            }}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="All">Risk Level: All</option>
            <option value="High">High Risk</option>
            <option value="Medium">Medium Risk</option>
            <option value="Low">Low Risk</option>
          </select>

          <select
            value={limit}
            onChange={(e) => {
              setLimit(Number(e.target.value));
              setPage(1);
            }}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value={5}>5 per page</option>
            <option value={10}>10 per page</option>
            <option value={20}>20 per page</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg">
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
              {paginatedTxns.map((txn) => (
                <tr key={txn.id} className="border-t hover:bg-gray-50 transition">
                  <td className="p-3 font-medium text-gray-800">{txn.userId}</td>
                  <td className="p-3 text-green-600 font-semibold">${txn.amount}</td>
                  <td className="p-3 text-gray-600">{txn.location}</td>
                  <td className="p-3 text-gray-600">{txn.time}</td>
                  <td className="p-3 text-gray-600">{txn.category}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-white text-xs font-bold ${
                        txn.fraudScore > 80
                          ? "bg-red-500"
                          : txn.fraudScore > 50
                          ? "bg-yellow-500"
                          : "bg-blue-500"
                      }`}
                    >
                      {txn.fraudScore}%{" "}
                      {txn.fraudScore > 80
                        ? "High"
                        : txn.fraudScore > 50
                        ? "Medium"
                        : "Low"}
                    </span>
                  </td>
                  <td className="p-3 flex gap-2 items-center">
                    <Eye
                      className="w-5 h-5 cursor-pointer text-blue-600 hover:scale-110 transition"
                      onClick={() => setSelectedTxn(txn)}
                    />
                    <Check className="w-5 h-5 cursor-pointer text-green-600 hover:scale-110 transition" />
                    <ShieldX className="w-5 h-5 cursor-pointer text-red-600 hover:scale-110 transition" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-3 py-1 rounded-md border border-gray-300 text-sm hover:bg-gray-100 disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`px-3 py-1 text-sm rounded-md border ${
                page === num
                  ? "bg-blue-500 text-white border-blue-500"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="px-3 py-1 rounded-md border border-gray-300 text-sm hover:bg-gray-100 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      <TransactionModal transaction={selectedTxn} onClose={() => setSelectedTxn(null)} />
    </>
  );
}
