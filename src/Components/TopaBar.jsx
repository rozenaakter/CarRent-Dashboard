import React from "react";
import { Bell,Search } from "lucide-react";

const TopBar = () => {
  return (
    
    <div className="w-full px-5 py-3">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-4 sm:gap-6">

        {/* notification icons */}

        <div className="relative">
          <Bell className="text-gray-700 w-5 h-5"/>
          <span className="w-2 h-2 rounded-full bg-red-500 absolute -right-0
           -top-0 ring-2 ring-white"></span>
        </div>

        {/* input/serch  */}

        <div className="flex gap-4 px-3 bg-white rounded-lg shadow py-2">
          <input type="text" placeholder="Search Here" className="focus:outline-none" />
          <span className="text-gray-600"><Search/></span>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
