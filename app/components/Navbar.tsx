import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div>
      {/* Make navbar with Modern way with tailwind and nextjs modern syntax */}
      <nav className='bg-gray-800 p-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='text-white text-lg font-bold'>Brand</div>
          <ul className='flex space-x-4'>
            <Link href='/' className='text-white hover:text-gray-300'>
              Home
            </Link>
            <Link href='/dashboard' className='text-white hover:text-gray-300'>
              Dashboard
            </Link>
            <Link href='/about' className='text-white hover:text-gray-300'>
              About
            </Link>
            <Link href='/contact' className='text-white hover:text-gray-300'>
              Contact
            </Link>
          </ul>
        </div>
      </nav>
      {/* Add some content to the page */}
    </div>
  );
};

export default Navbar;
