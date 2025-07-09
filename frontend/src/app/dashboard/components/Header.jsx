import { AlertTriangle, ShieldX, CheckCircle, BarChart } from "lucide-react";
import { stats } from "./data";
export default function Header() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div className="bg-red-50 border border-red-200 p-4 rounded-xl shadow">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-red-600">Flagged Today</h2>
            <p className="text-2xl font-bold text-red-800">{stats.totalFlagged}</p>
          </div>
          <AlertTriangle className="text-red-500" />
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl shadow">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-yellow-600">Blocked Transactions</h2>
            <p className="text-2xl font-bold text-yellow-800">{stats.blockedTransactions}</p>
          </div>
          <ShieldX className="text-yellow-600" />
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 p-4 rounded-xl shadow">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-green-600">Safe Transactions</h2>
            <p className="text-2xl font-bold text-green-800">{stats.safeTransactions}</p>
          </div>
          <CheckCircle className="text-green-500" />
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl shadow">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-blue-600">Avg Fraud Score</h2>
            <p className="text-2xl font-bold text-blue-800">{stats.avgFraudScore}%</p>
          </div>
          <BarChart className="text-blue-500" />
        </div>
      </div>
    </div>
  );
}