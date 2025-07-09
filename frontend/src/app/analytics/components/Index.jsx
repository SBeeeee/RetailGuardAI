import React from 'react'
import Header from './Header'
import Headerr from '@/app/dashboard/components/Header' 
import Graphs from './Graphs'
import BottomStatsGrid from './BottomStatsGrid'
export default function Index() {
  return (
    <div className="p-4">
      <Header/>
      <Headerr/>
      <Graphs/>
      <BottomStatsGrid/>
    </div>
  )
}
