import Link from 'next/link';
import React from 'react';

const DashNav = () => {
  return (
    <div>
      {/* Navbar for dashboard */}
      <nav className='bg-gray-800 p-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='text-white text-lg font-bold'>Dashboard</div>
          <ul className='flex space-x-4'>
            <Link
              href='/dashboard/users'
              className='text-white hover:text-gray-300'
            >
              Users
            </Link>
            <Link
              href='/dashboard/products'
              className='text-white hover:text-gray-300'
            >
              Products
            </Link>
            <Link
              href='/dashboard/profile'
              className='text-white hover:text-gray-300'
            >
              Profile
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default DashNav;
