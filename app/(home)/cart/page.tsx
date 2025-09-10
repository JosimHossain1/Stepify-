'use client';
import AddToCartItems from '@/app/components/Cart/AddToCartItems';
import CartBalance from '@/app/components/Cart/CartBalance';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const CartPage = () => {
  const items = useSelector((state) => state.cart.cart);
  return (
    <div className='max-w-5xl max-lg:max-w-2xl mx-auto p-4'>
      <h1 className='text-2xl font-semibold text-slate-900'>Shopping Cart</h1>
      <div className='grid lg:grid-cols-3 lg:gap-x-8 gap-x-6 gap-y-8 mt-6'>
        <div className='lg:col-span-2 space-y-6'>
          {items.length > 0 ? (
            <AddToCartItems />
          ) : (
            <Link href='/products'>
              {' '}
              <Button>Continue Shopping</Button>
            </Link>
          )}
        </div>
        {/* Cart Balance Section */}
        <CartBalance />
      </div>
    </div>
  );
};

export default CartPage;
