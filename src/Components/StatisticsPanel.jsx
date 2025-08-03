import React from "react";
import statData from "../data/stat";
import hireData from "../data/hireData";
import HireVsCancleCard from "./HireVsCancleCard";
import ExpencesCard from "./ExpencesCard";
import expencesData from "../data/expences";
import IncomeCard from "./IncomeCard";

const StatisticsPanel = () => {
  return (
    <div className="max-w-sm mx-auto p-4 space-y-4 bg-[#F8F7F1]">
      <div className="">
        <p className="font-semibold">Todays Statistics</p>
        <p className="text-sm text-gray-600">Tue, 14 Nov, 2022, 11:30 AM</p>
      </div>

      {/* income data */}

      {statData.map((item) => (
        <IncomeCard
          key={item.id}
          title={item.title}
          amount={item.amount}
          comparison={item.comparison}
          lastWeek={item.lastWeek}
          change={item.change}
        />
      ))}

      {/* ExpencesCard */}

      {
        expencesData.map((item) =>(
          <ExpencesCard 
            key={item.id}
            title = {item.title}
            amount = {item.amount}
            comparison = {item.comparison}
            lastWeek = {item.lastWeek}
            change = {item.change}
          />
        ))
      }

      {/* hire vs cancel card */}

      <div className="bg-white shadow rounded-xl p-5 space-y-2 mb-3">
        <div className="flex justify-between items-center text-gray-500 text-sm">
          <h3 className="text-xl text-gray-600">Hire vs cancel</h3>
          <span className="bg-gray-100 px-2 py-1 rounded text-xs ">Today</span>
        </div>


        {
          hireData.map((item) =>(
            <HireVsCancleCard key={item.id}
            label={item.label} percent={item.percent}
            color={item.color}
            isPositive={item.isPositive}
            />
          ))
        }

      </div>



    </div>
  );
};

export default StatisticsPanel;
