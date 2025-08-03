import React from "react";
import {CarFront, CalendarCheck, Clock, ChevronDown } from "lucide-react";
import CarStatusTable from "./CarStatusTable";

const CarAvailability = () => {
  return (
    <section className="flex flex-col gap-8 p-3">
      {/* Top filter section */}
      <div className="bg-white shadow rounded-xl p-5 space-y-5 pb-8 ">
        <h2 className="text-lg font-semibold">Car Availability</h2>
        <div className="flex flex-col justify-between md:flex-row md:items-center gap-3">
          {/* Car Number Selector */}
          <div className="flex items-center border border-gray-300 rounded p-2 w-full md:w-auto px-2">
            <CarFront  className="mr-4 text-gray-600"/>
            
            <span className=" text-gray-700">Car number</span>
            <ChevronDown className="w-5 h-5 text-gray-500 ml-8" />
          </div>

          {/* Date Picker */}
         <div className="flex">
           <div className="flex gap-3 items-center border border-gray-300 rounded-tl-md rounded-bl-md p-2 w-full md:w-auto px-6">
            <CalendarCheck  className=" text-gray-500 mr-2" />
            <span className=" text-gray-700">Nov 20, 2022</span>
          </div>

          {/* Time Picker */}
          <div className="flex gap-3 items-center border border-gray-300 rounded-tr-md rounded-br-md	 p-2 w-full md:w-auto px-6">
            <Clock className=" text-gray-500 mr-2" />
            <span className=" text-gray-700">10 AM</span>
            <ChevronDown className="w-5 h-5 text-gray-500 ml-8" />
          </div>
         </div>

          {/* Check button */}
          <button className="bg-[#006AFF] hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded w-full md:w-auto">
            Check
          </button>
        </div>
      </div>

      
    </section>
  );
};

export default CarAvailability;
