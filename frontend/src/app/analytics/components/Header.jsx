import { CalendarDays, Download } from "lucide-react";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Fraud Analytics</h1>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        {/* Date Range Selector */}
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 hover:shadow-sm cursor-pointer">
          <CalendarDays className="w-4 h-4 mr-2 text-gray-500" />
          <span>Last 30 Days</span>
        </div>

        {/* Export Button */}
        <button className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>
    </div>
  );
}
