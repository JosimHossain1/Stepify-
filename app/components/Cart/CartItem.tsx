import Image from 'next/image';
import React from 'react';
import IncreDecreBtn from '../Products/IncreDecreBtn';
import Wishlist from '../wishlist/Wishlist';
import RemoveItem from '../wishlist/RemoveItem';

const CartItem = ({ increseOptions }: { increseOptions: boolean }) => {
  return (
    <div className='flex gap-4 bg-white px-4 py-6 rounded-md shadow-sm border border-gray-200'>
      <div className='flex gap-6 sm:gap-4 max-sm:flex-col'>
        <div className='w-24 h-24 max-sm:w-24 max-sm:h-24 shrink-0'>
          <Image
            width={40}
            height={40}
            src='https://readymadeui.com/images/sunglass6.webp'
            className='w-full h-full object-contain'
            alt='Stylish Sunglasses'
          />
        </div>
        <div className='flex flex-col gap-4'>
          <div>
            <h3 className='text-sm sm:text-base font-semibold text-slate-900'>
              Round Glass
            </h3>
            <p className='text-[13px] font-medium text-slate-500 mt-2 flex items-center gap-2'>
              Color:{' '}
              <span className='inline-block w-4 h-4 rounded-sm bg-black'></span>
            </p>
          </div>
          <div className='mt-auto'>
            <h3 className='text-sm font-semibold text-slate-900'>$20.00</h3>
          </div>
        </div>
      </div>

      <div className='ml-auto flex flex-col'>
        <div className='flex items-start gap-4 justify-end'>
         <Wishlist />

          <RemoveItem />
        </div>
        {increseOptions && <IncreDecreBtn />}
      </div>
    </div>
  );
};

export default CartItem;
