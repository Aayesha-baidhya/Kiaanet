import React from 'react';

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
      <div className="text-sm text-gray-500">
        <p className="font-semibold text-black">Admin Dashboard</p>
        <p>Dashboard / Admin Dashboard</p>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition">
          Add New Student
        </button>
        <button className="bg-gray-100 text-sm px-4 py-2 rounded hover:bg-gray-200 transition">
          Fees Details
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
