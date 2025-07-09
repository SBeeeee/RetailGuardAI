"use client"
import FraudTrendCard from "./FraudTrendCard"
import CategoryPieCard from "./CategoryPieCard"
import LocationRiskCard from "./LocationRiskCard"
import TransactionVolumeCard from "./TransactionVolumeCard"
export default function Graphs() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <FraudTrendCard />
      <CategoryPieCard />
      <LocationRiskCard />
      <TransactionVolumeCard />
    </div>
  )
}
