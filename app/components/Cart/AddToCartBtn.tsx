import { Button } from '@/components/ui/button';
import { addToCart } from '@/redux/Features/Cart/CartSlice';
import { Product } from '@/types/productType';
import { ShoppingBag } from 'lucide-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AddToCartBtn = ({
  product,
  outline
}: {
  product: Product;
  outline: boolean;
}) => {

    const cartItems = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
  
    const handleAddToCart = (product: Product) => {
      dispatch(addToCart(product));
    };
  
  return (
    <Button
      onClick={() => handleAddToCart(product)}
      variant={outline ? 'outline' : 'default'}
      className='w-full border-0 cursor-pointer'
    >
      <ShoppingBag className='h-5 w-5' />
      Add to Cart
    </Button>
  );
};

export default AddToCartBtn;
