"use client"

import { stats } from "@/components/data"
import { ShoppingCart } from "lucide-react"

export default function CategoryAnalysis() {
  return (
    <div className="border rounded-lg shadow-sm p-4 space-y-4 bg-white">
      <h2 className="text-lg font-semibold flex items-center">
        <ShoppingCart className="w-5 h-5 mr-2" />
        Category Analysis
      </h2>
      {stats.categoryBreakdown.map((cat, index) => (
        <div key={index} className="flex justify-between items-center text-sm">
          <div>
            <p className="font-medium">{cat.category}</p>
            <p className="text-gray-500">{cat.count} flagged</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">{cat.percentage}%</p>
            <div className="w-20 h-2 bg-gray-200 rounded-full mt-1">
              <div
                className="h-2 bg-blue-600 rounded-full"
                style={{ width: `${cat.percentage}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
