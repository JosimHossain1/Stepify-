'use client';
import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '@/redux/Features/Cart/CartSlice';
import AddToWishlistBtn from '../wishlist/AddToWishlistBtn';

const AddToCartItems = () => {
  const items = useSelector((state) => state.cart.cart);
  const totalAmmount = useSelector((state) => state.cart.totalAmmount);
  const dispatch = useDispatch();
  const handleRemoveItem = (id) => {
    console.log(id);
    dispatch(removeFromCart(id));
  };

  return (
    <>
      {items.map((item) => (
        <div key={item._id} className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6'>
          <div className='space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0'>
            <a href='#' className='shrink-0 md:order-1'>
              <Image
                width={60}
                height={60}
                className='h-20 w-20 dark:hidden'
                src='https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg'
                alt='imac image'
              />
              <Image
                width={60}
                height={60}
                className='hidden h-20 w-20 dark:block'
                src='https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg'
                alt='imac image'
              />
            </a>

            <label htmlFor='counter-input' className='sr-only'>
              Choose quantity:
            </label>
            <div className='flex items-center justify-between md:order-3 md:justify-end'>
              <div className='flex items-center'>
                <button
                  type='button'
                  id='decrement-button-2'
                  data-input-counter-decrement='counter-input-2'
                  className='inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700'
                >
                  <svg
                    className='h-2.5 w-2.5 text-gray-900 dark:text-white'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 18 2'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M1 1h16'
                    />
                  </svg>
                </button>
                <input
                  type='text'
                  id='counter-input-2'
                  data-input-counter
                  className='w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white'
                  placeholder=''
                  value='1'
                  required
                />
                <button
                  type='button'
                  id='increment-button-2'
                  data-input-counter-increment='counter-input-2'
                  className='inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700'
                >
                  <svg
                    className='h-2.5 w-2.5 text-gray-900 dark:text-white'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 18 18'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M9 1v16M1 9h16'
                    />
                  </svg>
                </button>
              </div>
              <div className='text-end md:order-4 md:w-32'>
                <p className='text-base font-bold text-gray-900 dark:text-white'>
                  ${item.price}
                </p>
              </div>
            </div>

            <div className='w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md'>
              <a
                href='#'
                className='text-base font-medium text-gray-900 hover:underline dark:text-white'
              >
                Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case
                with Midnight Sport Band
              </a>

              <div className='flex items-center gap-4'>
                <AddToWishlistBtn product={item} outline={true}/>

                <button
                  onClick={() => handleRemoveItem(item._id)}
                  type='button'
                  className='inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500'
                >
                  <svg
                    className='me-1.5 h-5 w-5'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M6 18 17.94 6M18 18 6.06 6'
                    />
                  </svg>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AddToCartItems;
