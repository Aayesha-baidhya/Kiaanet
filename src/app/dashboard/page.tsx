import Navbar from '@/components/navBar'
import SideBar from '@/components/sideBar'
import DashboardHeader from '@/components/dashboardHeader'
import React from 'react'

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
    {/* //   <SideBar /> */}
    <div className="flex flex-col flex-1">
    {/* //     <Navbar /> */}
        <DashboardHeader />
        <div className="mx-6 mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-2xl">
          <span className="text-sm">
          <strong className="font-semibold">Fahed III,C</strong> has paid Fees for the <strong>“Term1”</strong>
          </span>
          <button className="self-start sm:self-center text-green-700 hover:text-green-900">
            ✕
          </button>
        </div>
        {/* Info Card Section */}
      <div className="mx-6 mt-4 flex flex-col md:flex-row items-start md:items-center justify-between bg-[#0C1D36] text-white px-6 py-5 ">
       <div>
           <h2 className="text-lg font-semibold">Gaurav Shrestha</h2>
          <p className="text-sm text-gray-300">Have a Good day at work</p>
       </div>

          <p className="mt-3 md:mt-0 text-sm text-gray-300">
            Updated Recently on 15 Jun 2024
          </p>
        </div>
        </div>


        <main className="p-6 bg-gray-50 h-full overflow-y-auto">
         
        </main>
      </div>
    
  )
}
