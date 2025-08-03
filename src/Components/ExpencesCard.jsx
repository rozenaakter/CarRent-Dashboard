
import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const ExpencesCard = ({ title, amount, comparison, lastWeek, change }) => {
  const isPositive = change >= 0;

  return (
    <div className="bg-white shadow rounded-xl p-5 space-y-2">
      <div className="flex justify-between items-center text-gray-500 text-sm border-b border-gray-300 pb-4">
        <h3 className="text-xl text-gray-600">{title}</h3>
        <span className="bg-gray-100 px-2 py-1 rounded text-xs ">Today</span>
      </div>

      <div className="flex justify-between py-1">
        <div className="text-3xl font-bold text-black">${amount}</div>
        <div className="flex justify-between items-center gap-1">
          <span
          className={`font-semibold ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isPositive ? <ArrowUp size={17} /> : <ArrowDown  size={17}/>} 
        </span>
        <span className="text-sm">{Math.abs(change)}%</span>
        </div>
        
      </div>

      <div className="text-sm text-gray-500">{comparison}</div>

      <div className="flex justify-between items-center text-black font-semibold text-sm">
        <span className="">Last week {title.toLowerCase()}</span>
        <p>{lastWeek}</p>
      </div>
    </div>
  );
};

export default ExpencesCard;
