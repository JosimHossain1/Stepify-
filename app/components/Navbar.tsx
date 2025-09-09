'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Heart, ShoppingBag, Search } from 'lucide-react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import CartItem from './Cart/CartItem';

export default function Navbar() {
  const { cart, wishlist } = useSelector((state) => state.cart);

  return (
    <header
      className='flex w-[80%] mx-auto mt-4  items-center justify-between mb-8 rounded-full shadow border border-gray-500 py-2 px-8 backdrop-blur-2xl
'
    >
      <div className='text-2xl font-bold'>
        <Link href={'/'}>Stepify.</Link>
      </div>

      <div className='flex items-center gap-2'>
        <Input placeholder='Search products...' className='w-72' />
        <Button size='icon' variant='outline'>
          <Search />
        </Button>
      </div>

      <div className='relative flex items-center gap-4'>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='outline'>
              <ShoppingBag />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Shopping Cart</SheetTitle>
              <SheetDescription>
                Review your items and proceed to checkout.
              </SheetDescription>
            </SheetHeader>
            <div className='mt-4 space-y-4 px-6 scroll-auto'>
              <CartItem increaseOptions={true} />
              <CartItem increaseOptions={true} />
            </div>
            <SheetFooter>
              <Button type='submit'>Proceed to Checkout</Button>
              <SheetClose asChild>
                <Button variant='outline'>
                   Continue Shopping
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        <span className='absolute top-0.5 right-0.5 grid min-h-[24px] min-w-[24px] translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-red-600 py-1 px-1 text-xs text-white'>
          {cart.length}
        </span>
      </div>

      <Button size='icon' variant='ghost' className='relative'>
        <Link href='/wishlist'>
          <Heart />
        </Link>
         <span className='absolute top-0.5 right-0.5 grid min-h-[24px] min-w-[24px] translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-red-600 py-1 px-1 text-xs text-white'>
          {wishlist.length}
        </span>
      </Button>
      <Avatar>
        <AvatarImage src='https://i.pravatar.cc/40' />
      </Avatar>
    </header>
  );
}
