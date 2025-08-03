import React from 'react';
import TopaBar from './TopaBar';
import CarAvailability from './CarAvailability';
import CarStatusTable from './CarStatusTable';

const TableDetails = () => {
  return (
    <div>
      <TopaBar/>
      <CarAvailability/>
      {/* Live Car Status Table */}
      <CarStatusTable />
    </div>
  );
};

export default TableDetails;