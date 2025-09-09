'use client'
import { removeFromWishlist } from '@/redux/Features/Cart/CartSlice';
import { Trash } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const RemoveItem = ({item}) => {

}
  return (
    <div>
      <Trash onClick={() => handleRemoveItem(item)} className='w-5 h-5 cursor-pointer hover:text-red-600 inline-block' />
    </div>
  )
}

export default RemoveItem