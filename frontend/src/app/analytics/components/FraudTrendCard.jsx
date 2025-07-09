"use client"
import { stats } from "@/components/data"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts"

const chartConfig = {
  flagged: { label: "Flagged", color: "#ef4444" },
  blocked: { label: "Blocked", color: "#f97316" },
}

export default function FraudTrendCard() {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-5">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Fraud Trends (Last 7 Days)</h2>
        <p className="text-sm text-gray-500">Daily fraud detection patterns</p>
      </div>
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={stats.dailyTrend} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
            <Line type="monotone" dataKey="flagged" stroke={chartConfig.flagged.color} strokeWidth={2} name="Flagged" />
            <Line type="monotone" dataKey="blocked" stroke={chartConfig.blocked.color} strokeWidth={2} name="Blocked" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
