'use client';
import Image from 'next/image';
import React from 'react';
import IncreDecreBtn from '../Products/IncreDecreBtn';
import { useDispatch, useSelector } from 'react-redux';
import { Trash } from 'lucide-react';
import { removeFromWishlist } from '@/redux/Features/Cart/CartSlice';
import toast, { Toaster } from 'react-hot-toast';

const CartItem = ({ increseOptions }: { increseOptions: boolean }) => {
  const items = useSelector((state) => state.cart.wishlist);
  const dispatch = useDispatch();
  const handleRemoveItem = (id : string) => {
    dispatch(removeFromWishlist(id));
    toast.success('Removed from Wishlish!')
  };
  console.log(items);
  return (
    <>
      {items.map((item) => (
        <div
          key={item._id}
          className='flex gap-4 mt-4 bg-white px-4 py-6 rounded-md shadow-sm border border-gray-200'
        >
          <div className='flex gap-6 sm:gap-4 max-sm:flex-col'>
            <div className='w-24 h-24  shrink-0'>
              <Image
                width={60}
                height={60}
                src='https://readymadeui.com/images/sunglass6.webp'
                className='object-contain'
                alt='Stylish Sunglasses'
              />
            </div>
            <div className='flex flex-col gap-4'>
              <div>
                <h3 className='text-sm sm:text-base font-semibold text-slate-900'>
                  {item.productName}
                </h3>
              </div>
              <div className='mt-auto'>
                <h3 className='text-sm font-semibold text-slate-900'>
                  ${item.price}
                </h3>
              </div>
              <IncreDecreBtn />
            </div>
          </div>

          <div className='ml-auto flex flex-col'>
            <div className='flex items-start gap-4 justify-end'>
              <Trash
                onClick={() => handleRemoveItem(item._id)}
                className='w-5 h-5 cursor-pointer hover:text-red-600 inline-block'
              />
            </div>
            {increseOptions && <IncreDecreBtn />}
          </div>
        </div>
      ))}
      <Toaster/>
    </>
  );
};

export default CartItem;
