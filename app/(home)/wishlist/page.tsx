import CartItem from '@/app/components/Cart/CartItem'
import React from 'react'

const wishListPage = () => {
  return (
    <div className='w-[83%] mx-auto'>
      <CartItem increseOptions={false}/>
    </div>
  )
}

export default wishListPage