import React from 'react'

export default function Heading() {
  return (
    
    <div className="mb-6 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Welcome back, Admin</h1>
        <p className="text-sm text-gray-500">Wednesday, July 9, 2025</p>
      </div>
      <span className="bg-red-300 text-red-900 px-4 py-1 rounded-full text-sm font-semibold animate-pulse">
        🚨 2 Critical Alerts
      </span>
    </div>
    
  )
}
