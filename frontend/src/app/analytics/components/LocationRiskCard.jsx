"use client"
import { stats} from "@/components/data"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function LocationRiskCard() {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-5">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Risk by Location</h2>
        <p className="text-sm text-gray-500">Fraud frequency across different regions</p>
      </div>
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={stats.locationBreakdown} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="location" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
