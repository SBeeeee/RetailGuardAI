"use client"

import { stats } from "@/components/data"
import { MapPin } from "lucide-react"

export default function HighRiskLocations() {
  const topLocations = [...stats.locationBreakdown]
    .sort((a, b) => b.count - a.count)
    .slice(0, 5)

  const getBadgeStyle = (risk) => {
    switch (risk) {
      case "High":
        return "bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium"
      case "Medium":
        return "bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-medium"
      default:
        return "bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium"
    }
  }

  return (
    <div className="border rounded-lg shadow-sm p-4 space-y-4 bg-white">
      <h2 className="text-lg font-semibold flex items-center">
        <MapPin className="w-5 h-5 mr-2" />
        High-Risk Locations
      </h2>
      {topLocations.map((loc, index) => (
        <div key={index} className="flex justify-between items-center text-sm">
          <div>
            <p className="font-medium">{loc.location}</p>
            <p className="text-gray-500">{loc.count} incidents</p>
          </div>
          <span className={getBadgeStyle(loc.risk)}>{loc.risk}</span>
        </div>
      ))}
    </div>
  )
}
