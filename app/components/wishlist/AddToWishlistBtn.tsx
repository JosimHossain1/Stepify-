'use client';
import { Button } from '@/components/ui/button';
import { addToWishList } from '@/redux/Features/Cart/CartSlice';
import { Product } from '@/types/productType';
import { Heart, HeartOff } from 'lucide-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

const AddToWishlistBtn = ({
  product,
  outline,
}: {
  product: Product;
  outline: boolean;
}) => {
  const wishlistItems = useSelector((state) => state.cart.wishlist);
  console.log(wishlistItems);
  const dispatch = useDispatch();

  const handleAddToWishlist = (product: Product) => {
    dispatch(addToWishList(product));
    toast.success(`added`);
  };

  return (
    <>
      <Button
        onClick={() => handleAddToWishlist(product)}
        variant={outline ? 'outline' : 'default'}
        className='w-full cursor-pointer'
      >
        <Heart className='h-5 w-5' />
      </Button>
      <Toaster />
    </>
  );
};

export default AddToWishlistBtn;
