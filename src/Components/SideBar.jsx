import React from 'react';
import FrameLogo from '../assets/images/Frame.png';
import rectangle from '../assets/images/Rectangle 5.png'
import { LayoutGrid, CarTaxiFront,Bell, Settings, Bold, CreditCard, FolderSync, NotepadText,LogOut} from 'lucide-react';

const SideBar = () => {
  return (
    <section className='text-white px-6 py-4'>
      {/* logo */}
      <div className='py-4 flex items-center gap-2'>
        <img src={FrameLogo} alt="logo" className='w-8 h-8 object-contain' />
        <h1 className='text-2xl font-bold'>CAR RENT</h1>
      </div>

      {/* dashboard content */}
      <nav className='list-none space-y-4 py-6'>
        <li className=''>
          <a href="">
            <div className='flex items-center gap-3 bg-primary py-1.5 rounded-sm shadow-lg '>
              <img src= {rectangle} alt="" className='h-6' />
              <LayoutGrid size={25} />
              <h2>Dashboard</h2>
            </div>
          </a>
        </li>

        <li className='py-2'>
          <a href="">
            <div className='flex items-center gap-3 px-4'>
              <CarTaxiFront />
              <h2>Drivers</h2>
            </div>
          </a>
        </li>

        <li className='mb-5'>
          <a href="">
            <div className='flex items-center gap-3 px-4'>
              <Bold />
              <h2>Bookings</h2>
            </div>
          </a>
        </li>

        <li className='mb-5'>
          <a href="">
            <div className='flex items-center gap-3 px-4'>
              <Bell />
              <h2>Notifications</h2>
            </div>
          </a>
        </li>

        <li className='border-b border-gray-600 pb-8'>
          <a href="">
            <div className='flex items-center gap-3 px-4'>
              <Settings />
              <h2>Settings</h2>
            </div>
          </a>
        </li>

        <p className='px-4 py-2 text-gray-400'>Report</p>

        <li className='mb-5'>
          <a href="">
            <div className='flex items-center gap-3 px-4'>
              <CreditCard />
              <h2>Payment Details</h2>
            </div>
          </a>
        </li>

        <li className='mb-5'>
          <a href="">
            <div className='flex items-center gap-3 px-4'>
              <FolderSync />
              <h2>Transactions</h2>
            </div>
          </a>
        </li>

        <li className='mb-5'>
          <a href="">
            <div className='flex items-center gap-3 px-4'>
              <NotepadText />
              <h2>Car Report</h2>
            </div>
          </a>
        </li>

        <div className='flex gap-4 items-center px-4 bg-[#474747] py-2 rounded-sm shadow-lg mt-8 cursor-pointer'>
        <LogOut />
        <h2>Logout</h2>
      </div>

      </nav>
      
    </section>
  );
};

export default SideBar;
