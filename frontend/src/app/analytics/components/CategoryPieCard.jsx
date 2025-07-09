"use client"
import { stats } from "@/components/data"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"

const COLORS = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6"]

export default function CategoryPieCard() {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-5">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Fraud by Category</h2>
        <p className="text-sm text-gray-500">Distribution of flagged transactions by category</p>
      </div>
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={stats.categoryBreakdown}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="count"
              label={({ category, percentage }) => `${category} ${percentage}%`}
              labelLine={false}
            >
              {stats.categoryBreakdown.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
