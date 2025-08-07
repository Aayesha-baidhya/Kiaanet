import React from 'react';
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="w-full bg-white h-16 px-6 flex items-center justify-end shadow-sm border-b border-gray-200">
      <div className="flex items-center gap-4">
        
       
        <div className="group p-2 border border-gray-300 rounded-md cursor-pointer hover:shadow-sm">
          <MdOutlineDarkMode className="text-xl text-gray-600 group-hover:text-black" />
        </div>

    {/* Icons with dot */}
        <div className="relative group p-2 border border-gray-300 rounded-md cursor-pointer hover:shadow-sm">
          <IoMdNotificationsOutline className="text-xl text-gray-600 group-hover:text-black" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-orange-300 rounded-full" />
        </div>

        
        <div className="relative group p-2 border border-gray-300 rounded-md cursor-pointer hover:shadow-sm">
          <IoChatbubbleEllipsesOutline className="text-xl text-gray-600 group-hover:text-black" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-green-300 rounded-full" />
        </div>

        {/* Profile */}
        <div className="bg-blue-600 text-white w-9 h-9 flex items-center justify-center rounded-full font-semibold">
          GS
        </div>
      </div>
    </header>
  );
};

export default Navbar;
