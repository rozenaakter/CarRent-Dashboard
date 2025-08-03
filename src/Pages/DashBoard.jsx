
import React from 'react';
import SideBar from '../Components/SideBar';
import StatisticsPanel from '../Components/StatisticsPanel';
import { Table } from 'lucide-react';
import TableDetails from '../Components/TableDetails';

const DashBoard = () => {
  return (
    <section className='flex flex-col lg:flex-row min-h-screen'>
      {/* sidebar */}
      <div className='w-full lg:w-2/12 bg-black'>
        <SideBar/>
      </div>

      {/* StatisticsPanel section */}
      <div className="w-full lg:w-3/12">
        <StatisticsPanel/>
      </div>

      {/* Table details  */}
      <div className='w-full lg:w-7/12'>
        <TableDetails/>
        
      </div>
      
    </section>
  );
};

export default DashBoard;