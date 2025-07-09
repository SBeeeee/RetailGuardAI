"use client"

import HighRiskLocations from "./HighRiskLocations"
import CategoryAnalysis from "./CategoryAnalysis"
import KeyInsights from "./KeyInsights"

export default function BottomStatsGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      <HighRiskLocations />
      <CategoryAnalysis />
      <KeyInsights />
    </div>
  )
}
