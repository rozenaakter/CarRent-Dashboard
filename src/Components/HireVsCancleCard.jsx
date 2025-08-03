import React from 'react';
import { ArrowUp,ArrowDown} from 'lucide-react';


const HireVsCancleCard = ({label, percent, color, isPositive}) => {
  return (
    <div className='flex justify-between items-center text-sm text-gray-700'>
      <div className='flex items-center gap-2'>
        <span className= {`w-3 h-3 rounded-full ${color}`}></span>
        {label}
      </div>
      <div className='flex items-center gap-1'>{percent} %
      <span className= {isPositive ? 'text-green-500' : 'text-red-500'}>{isPositive ?  <ArrowUp size={17} /> : <ArrowDown size={17} />}</span>
      </div>
    </div>
  );
};

export default HireVsCancleCard;