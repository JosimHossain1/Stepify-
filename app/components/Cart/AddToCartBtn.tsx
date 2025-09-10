import { Button } from '@/components/ui/button';
import { addToCart, totalAmmount } from '@/redux/Features/Cart/CartSlice';
import { Product } from '@/types/productType';
import { ShoppingBag } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const AddToCartBtn = ({
  product,
  outline
}: {
  product: Product;
  outline: boolean;
}) => {

    const dispatch = useDispatch();
  
    const handleAddToCart = (product: Product) => {
      dispatch(addToCart(product));
      dispatch(totalAmmount(product))
      toast.success('Add to cart successfully!')
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
