"use client"
import { stats } from "@/components/data"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const chartConfig = {
  flagged: { color: "#ef4444" },
  blocked: { color: "#f97316" },
  safe: { color: "#22c55e" },
}

export default function TransactionVolumeCard() {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-5">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Transaction Volume</h2>
        <p className="text-sm text-gray-500">Daily transaction processing volume</p>
      </div>
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={stats.dailyTrend} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })
              }
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="safe" stackId="a" fill={chartConfig.safe.color} name="Safe" />
            <Bar dataKey="flagged" stackId="a" fill={chartConfig.flagged.color} name="Flagged" />
            <Bar dataKey="blocked" stackId="a" fill={chartConfig.blocked.color} name="Blocked" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
