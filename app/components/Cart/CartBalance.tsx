'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tag } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const CartBalance = () => {
  const subTotal = useSelector((state) => state.cart.totalAmmount);
  const shipping = subTotal ? 2 : 0;
  const tax = subTotal ? 4 : 0;;

  const totalBalace = subTotal + shipping + tax;
  const user = true;
  return (
    <div className='bg-white rounded-md px-4 py-6 h-max shadow-sm border border-gray-200'>
      <ul className='text-slate-500 font-medium space-y-4'>
        <li className='flex flex-wrap gap-4 text-sm'>
          Subtotal{' '}
          <span className='ml-auto font-semibold text-slate-900 flex'>
            ${subTotal}
          </span>
        </li>
        <li className='flex flex-wrap gap-4 text-sm'>
          Shipping{' '}
          <span className='ml-auto font-semibold text-slate-900'>
            ${subTotal ? shipping : 0}
          </span>
        </li>
        <li className='flex flex-wrap gap-4 text-sm'>
          Tax{' '}
          <span className='ml-auto font-semibold text-slate-900'>
            ${subTotal ? tax : 0}
          </span>
        </li>
        <hr className='border-slate-300' />
        <li className='flex flex-wrap gap-4 text-sm font-semibold text-slate-900'>
          Total <span className='ml-auto'>{totalBalace}</span>
        </li>
      </ul>

      <div>
        {/* Apply Coupon */}
        <div className='my-1'>
          <Label htmlFor='coupon' className='mt-4 mb-2'>
            <Tag className='w-4 h-4' />
            Apply Coupon
          </Label>
          <form className='flex gap-2'>
            <Input
              type='text'
              placeholder='Coupon code'
              className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <Button type='submit' variant='secondary'>
              Apply
            </Button>
          </form>
        </div>
      </div>
      <div className='mt-8 space-y-4'>
        {user ? (
          <Link href='/checkout' className='w-full'>
            <Button variant='default' className='w-full cursor-pointer mb-3'>
              Proceed to Checkout
            </Button>
          </Link>
        ) : (
          <Link href='/login' className='w-full'>
            <Button variant='default' className='w-full cursor-pointer mb-3'>
              Login to Checkout
            </Button>
          </Link>
        )}

        <Link href='/products' className='w-full'>
          <Button variant='outline' className='w-full cursor-pointer'>
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartBalance;
