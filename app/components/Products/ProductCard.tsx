'use client';
import { Button } from '@/components/ui/button';
import { addToCart } from '@/redux/Features/Cart/CartSlice';
import { Product } from '@/types/productType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = ({ products }: { products: Product }) => {
  const cartsValues = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className='bg-white'>
      <div className='mx-auto'>
        <div className='grid grid-cols-4 gap-3'>
          {products.map((product: Product) => (
            <>
              <Link
                key={product._id}
                href={`/products/${product._id}`}
                className='group'
              >
                <Image
                  alt={product.imageAlt}
                  height={200}
                  width={200}
                  src='/jacket.webp'
                  className='aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8'
                />
              </Link>
              <p className='mt-1 text-lg font-medium text-gray-900'>
                ${product.price}
              </p>

              <h3 className='mt-4 text-lg font-semibold text-gray-500'>
                {product.productName}
              </h3>

              <Button
                onClick={() => handleAddToCart(product)}
                variant='outline'
                className='mt-4 w-full bg-gray-50 border-0 cursor-pointer'
              >
                Add to Cart
              </Button>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
