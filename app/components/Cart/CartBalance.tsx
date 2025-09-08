import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartBalance = () => {
  return (
     <div className='bg-white rounded-md px-4 py-6 h-max shadow-sm border border-gray-200'>
          <ul className='text-slate-500 font-medium space-y-4'>
            <li className='flex flex-wrap gap-4 text-sm'>
              Subtotal{' '}
              <span className='ml-auto font-semibold text-slate-900'>
                $200.00
              </span>
            </li>
            <li className='flex flex-wrap gap-4 text-sm'>
              Shipping{' '}
              <span className='ml-auto font-semibold text-slate-900'>
                $2.00
              </span>
            </li>
            <li className='flex flex-wrap gap-4 text-sm'>
              Tax{' '}
              <span className='ml-auto font-semibold text-slate-900'>
                $4.00
              </span>
            </li>
            <hr className='border-slate-300' />
            <li className='flex flex-wrap gap-4 text-sm font-semibold text-slate-900'>
              Total <span className='ml-auto'>$206.00</span>
            </li>
          </ul>
          <div className='mt-8 space-y-4'>
            <Link href='/checkout' className='w-full'>
              <Button variant='default' className='w-full cursor-pointer'>
                Proceed to Checkout
              </Button>
            </Link>

            <Link href='/products' className='w-full mt-5'>
              <Button variant='outline' className='w-full cursor-pointer'>
                Continue Shopping
              </Button>
            </Link>
          </div>

        </div>
  )
}

export default CartBalance