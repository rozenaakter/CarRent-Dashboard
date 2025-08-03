import React from "react";
import { SlidersHorizontal } from "lucide-react";
import TableRow from "./TableRow";
import carData from '../data/carData'



const CarStatusTable = () => {
  return (
    <section className="p-1 lg:p-3">
      <div className="shadow rounded-lg p-2 bg-white sm:p-4 lg:p-8 overflow-hidden">

        {/* filter icon */}

        <div className="flex justify-between items-start sm:items-center gap-4 pl-3 pr-3 lg:pl-0 lg:pr-0 mb-4">
          <h3 className="text-lg font-semibold sm:text-lg ">Live Car Status</h3>
          <button className="flex items-center gap-1 text-gray-600 font-semibold hover:text-black ">
            <SlidersHorizontal className="w-4 h-4" />
            Filter
            </button>

        </div>

        {/* live box */}

        <div className="overflow-hidden">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="">
              <tr className="text-left border-b border-gray-300">
                <th className="py-2 px-3 sm:px-4">No.</th>
                <th className="py-3 px-3 sm:px-4">Car no.</th>
                <th className="py-2 px-3 sm:px-4">Driver</th>
                <th className="py-2 px-3 sm:px-4">Status</th>
                <th className="py-2 px-3 sm:px-4">Earning</th>
                <th className="py-2 px-3 sm:px-4"></th>
              </tr>
            </thead>

            <tbody>
              {
                carData.map((car) =>(
                  <TableRow key={car.id} {...car} />
                ))
              }
            </tbody>
          </table>
        </div>
        
      </div>
      
    </section>
  );
};

export default CarStatusTable;
