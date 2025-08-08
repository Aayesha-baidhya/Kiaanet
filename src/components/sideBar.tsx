"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { VscListFlat } from "react-icons/vsc";
import { MdOutlineDashboard } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import { TbBooks } from "react-icons/tb";
import { LuFileText } from "react-icons/lu";
import { FaRegFile } from "react-icons/fa";
import { IoList } from "react-icons/io5";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`sidebar bg-white shadow-md h-screen p-4 relative transition-all duration-300 
        ${isCollapsed ? "w-16" : "w-60 sm:w-60 md:w-48 lg:w-64"}`}
    >
      {/* Logo and List Icon */}
      <div className="flex justify-between items-center mb-4">
        {!isCollapsed && (
          <Image src="/logo.svg" alt="Kiaanet Logo" width={80} height={50} />
        )}
        <VscListFlat
          className="text-black text-xl cursor-pointer"
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
      </div>

      {!isCollapsed && (
        <div className="w-full border border-gray-200 py-2 mb-6">
          <h3 className="text-center">Global International</h3>
        </div>
      )}

      {/* Nav Menu */}
      <nav className="space-y-3">
        <div className="hover:bg-blue-100 flex items-center hover:border hover:border-blue-300 px-4 py-2 rounded cursor-pointer">
          <MdOutlineDashboard className="text-blue-500 text-lg flex-shrink-0" />
          <span
            className={`ml-2 transition-all duration-200 overflow-hidden ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"}`}
          >
            Dashboard
          </span>
        </div>
        <div className="hover:bg-blue-100 flex items-center hover:border hover:border-blue-300 px-4 py-2 rounded cursor-pointer">
          <LuGraduationCap className="text-blue-500 text-lg flex-shrink-0" />
          <span
            className={`ml-2 transition-all duration-200 overflow-hidden ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"}`}
          >
            Students
          </span>
        </div>
        <div className="hover:bg-blue-100 flex items-center hover:border hover:border-blue-300 px-4 py-2 rounded cursor-pointer">
          <TbBooks className="text-blue-500 text-lg flex-shrink-0" />
          <span
            className={`ml-2 transition-all duration-200 overflow-hidden ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"}`}
          >
            Courses
          </span>
        </div>
        <div className="hover:bg-blue-100 flex items-center hover:border hover:border-blue-300 px-4 py-2 rounded cursor-pointer">
          <LuFileText className="text-blue-500 text-lg flex-shrink-0" />
          <span
            className={`ml-2 transition-all duration-200 overflow-hidden ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"}`}
          >
            Applications
          </span>
        </div>
        <div className="hover:bg-blue-100 flex items-center hover:border hover:border-blue-300 px-4 py-2 rounded cursor-pointer">
          <FaRegFile className="text-black text-lg flex-shrink-0" />
          <span
            className={`ml-2 transition-all duration-200 overflow-hidden ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"}`}
          >
            Applications List
          </span>
        </div>
        <div className="hover:bg-blue-100 flex items-center hover:border hover:border-blue-300 px-4 py-2 rounded cursor-pointer">
          <IoList className="text-black text-lg flex-shrink-0" />
          <span
            className={`ml-2 transition-all duration-200 overflow-hidden ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"}`}
          >
            New Application
          </span>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
