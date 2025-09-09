import { Product } from '@/types/productType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AddToCartBtn from '../Cart/AddToCartBtn';
import AddToWishlistBtn from '../wishlist/AddToWishlistBtn';
import { Eye, ShoppingBag, Star, StarHalf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductCard = ({ products }: { products: Product }) => {
  return (
    <div className=''>
      <div className='mx-auto'>
        <div className='grid grid-cols-3 gap-3 '>
          {products.map((product: Product) => (
            <div key={product._id} className='bg-gray-100 pb-4'>
              <div className='relative'>
                <Link
                  key={product._id}
                  href={`/products/${product._id}`}
                  className='group'
                >
                  <Image
                    alt='Product'
                    height={200}
                    width={200}
                    src='/jacket.webp'
                    className='relative aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8'
                  />
                </Link>

                {product.discount && (
                  <span className='absolute top-1 right-1 px-3 rounded-full text-white my-1 py-1 text-md bg-[#FC5732] '>
                    -{product.discount}%
                  </span>
                )}

                <div className='absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-700 text-white text-xs w-full h-28 flex justify-center pr-2 pb-4 items-end'>
                  <div className='grid grid-cols-3 gap-2'>
                    <AddToWishlistBtn outline={false} product={product} />
                    <Button className='cursor-pointer'>
                      <ShoppingBag className='w-5 h-5' />
                    </Button>
                    <Link href={`/products/${product._id}`}>
                      <Button className='cursor-pointer'>
                        <Eye className='w-5 h-5' />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='px-2 mt-1'>
                <div className='flex items-center gap-1'>
                  {/* rating */}

                  <Star className='w-3 h-3' />
                  <Star className='w-3 h-3' />
                  <Star className='w-3 h-3' />
                  <Star className='w-3 h-3' />
                  <StarHalf className='w-3 h-3' />

                  <span className='text-gray-500 ml-2'>(5)</span>
                </div>

                <Link href={`/products/${product._id}`} className='text-md text-gray-500'>
                  {product.productName}
                </Link>

                <p className='text-md font-semibold text-gray-900 mb-1 flex items-center gap-2'>
                  <del className='delete'>$750</del> - ${product.price}
                </p>

                <div className='text-center mb-3 flex gap-2'>
                  <span className='w-5 h-5 block bg-red-400 rounded-full border-2 border-white'></span>
                  <span className='w-5 h-5 block bg-blue-200 rounded-full border-2 border-white'></span>
                  <span className='w-5 h-5 block bg-purple-300 rounded-full border-2 border-white'></span>
                  <span className='w-5 h-5 block bg-gray-500 rounded-full border-2 border-white'></span>
                </div>
                <AddToCartBtn outline={true} product={product} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
