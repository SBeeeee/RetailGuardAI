"use client"

export default function KeyInsights() {
  return (
    <div className="border rounded-lg shadow-sm p-4 space-y-4 bg-white">
      <h2 className="text-lg font-semibold">Key Insights</h2>

      <div className="p-3 bg-red-50 border-l-4 border-red-400 rounded">
        <p className="text-sm font-medium text-red-800">High Alert</p>
        <p className="text-sm text-red-700">
          Las Vegas showing 40% increase in fraud attempts
        </p>
      </div>

      <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <p className="text-sm font-medium text-yellow-800">Trend Alert</p>
        <p className="text-sm text-yellow-700">
          Electronics category fraud up 25% this week
        </p>
      </div>

      <div className="p-3 bg-green-50 border-l-4 border-green-400 rounded">
        <p className="text-sm font-medium text-green-800">Good News</p>
        <p className="text-sm text-green-700">
          Overall fraud rate decreased by 8% this month
        </p>
      </div>
    </div>
  )
}
