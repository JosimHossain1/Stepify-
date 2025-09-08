import CartBalance from '@/app/components/Cart/CartBalance';
import CartItem from '@/app/components/Cart/CartItem';
import React from 'react';

const CartPage = () => {
  return (
    <div className='max-w-5xl max-lg:max-w-2xl mx-auto p-4'>
      <h1 className='text-2xl font-semibold text-slate-900'>Shopping Cart</h1>
      <div className='grid lg:grid-cols-3 lg:gap-x-8 gap-x-6 gap-y-8 mt-6'>
        <div className='lg:col-span-2 space-y-6'>
          <CartItem increseOptions={true} />
        </div>
        {/* Cart Balance Section */}
        <CartBalance />
      </div>
    </div>
  );
};

export default CartPage;
