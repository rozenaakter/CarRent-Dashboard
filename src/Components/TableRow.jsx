import React from "react";

const TableRow = ({ id, carNo, driver, driverImg, status, statusColor, earning }) => {
  return (
    <tr className="border-b border-gray-300 hover:bg-gray-50">
      <td className="py-2 px-3 sm:px-4">{id}</td>
      <td className="py-2 px-3 sm:px-4">
        <span className="bg-gray-200 px-3 py-1 rounded">{carNo}</span>
      </td>
      <td className="py-2 px-3 sm:px-4">
        <div className="flex items-center gap-2">
          <img
            src={driverImg}
            alt={driver}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="whitespace-nowrap text-sm sm:text-base font-semibold">{driver}</span>
        </div>
      </td>
      <td className="py-2 px-3 sm:px-4">
        <div className="flex items-center gap-1 lg:gap-2">
          <span className={`w-3 h-3 rounded-full ${statusColor}`} />
          <span className="text-xs sm:text-sm">{status}</span>
        </div>
      </td>
      <td className="py-2 px-3 sm:px-4">{earning}</td>
      <td className="py-2 px-3 sm:px-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs sm:text-sm">
          Details
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
