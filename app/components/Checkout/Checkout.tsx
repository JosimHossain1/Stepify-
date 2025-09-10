'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import PaymentWay from './PaymentWay';

const Checkout = () => {
  const subTotal = useSelector((state) => state.cart.totalAmmount);
  const shipping = subTotal ? 2 : 0;
  const tax = subTotal ? 4 : 0;

  const totalBalace = subTotal + shipping + tax;
  const user = true;

  return (
    <div className='w-[83%] mx-auto my-10'>
      <h1 className='text-3xl font-bold mb-6'>Checkout Page</h1>

      <div className='grid grid-cols-12'>
        {/* Checkout form goes here */}
        <Card className=' col-span-8 mr-10 p-6 border border-gray-300 rounded-md'>
          <form className='mb-6'>
            <div className='mb-4'>
              <Label htmlFor='name' className='block text-sm font-medium mb-2'>
                Name
              </Label>
              <Input
                type='text'
                id='name'
                className='border border-gray-300 p-2 w-full'
                placeholder='Enter your name'
              />
            </div>
            <div className='mb-4'>
              <Label htmlFor='email' className='block text-sm font-medium mb-2'>
                Email
              </Label>
              <Input
                type='email'
                id='email'
                className='border border-gray-300 p-2 w-full'
                placeholder='Enter your email'
              />
            </div>
            <div className='mb-4'>
              <Label
                htmlFor='address'
                className='block text-sm font-medium mb-2'
              >
                Address
              </Label>
              <Input
                type='text'
                id='address'
                placeholder='Enter your address'
              />
            </div>
          </form>
        </Card>

        {/* Order balance goes here */}
        <div className='col-span-4'>
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
            <h1 className='scroll-m-20 text-xl font-semibold tracking-tight mt-4'>Select Payment Method</h1>
            <PaymentWay/>
          </div>
            <div className='mt-8 space-y-4'>
              <Link href='/checkout' className='w-full'>
                <Button
                  variant='default'
                  className='w-full cursor-pointer mb-3'
                >
                  Place an Order
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
