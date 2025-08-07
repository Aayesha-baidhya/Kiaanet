import Navbar from '@/components/navBar'
import SideBar from '@/components/sideBar'
import DashboardHeader from '@/components/dashboardHeader'
import React from 'react'

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <DashboardHeader />
        <main className="p-6 bg-gray-50 h-full overflow-y-auto">
         
        </main>
      </div>
    </div>
  )
}
