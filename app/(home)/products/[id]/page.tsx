'use client';
import Rating from '@/app/components/Home/Rating';
import RelatedProduct from '@/app/components/Home/RelatedProduct';
import Review from '@/app/components/Home/Review';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import axios from 'axios';
import {
  HeartPlus,
  ShoppingBag,
  StarHalfIcon,
  StarIcon,
} from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ProductDetailsPage = () => {
  // Fetch product details using the id from the URL
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    fetchSingleProduct();
  }, [id]);

  console.log(product);
  return (
    <div className='w-[83%] mx-auto'>
      <div className='w-[80%] mx-auto my-10 '>
        <h1>Product Details Page</h1>
        {!product ? (
          <p>Loading...</p>
        ) : (
          <Card className='p-6 mt-4 grid grid-cols-12 gap-6'>
            <div className='p-4 col-span-5'>
              <Card className='min-h-8 flex items-center justify-center bg-gray-50 mb-4'>
                <Image
                  src={'/jacket.webp'}
                  alt='Product Image'
                  width={200}
                  height={200}
                  className='object-cover rounded-md'
                />
              </Card>
              <Card className='grid grid-cols-4 gap-2 p-2 bg-gray-50 '>
                <Image
                  src={'/jacket.webp'}
                  alt='Product Image'
                  width={80}
                  height={80}
                  className='object-cover rounded-md'
                />
                <Image
                  src={'/jacket.webp'}
                  alt='Product Image'
                  width={80}
                  height={80}
                  className='object-cover rounded-md'
                />
                <Image
                  src={'/jacket.webp'}
                  alt='Product Image'
                  width={80}
                  height={80}
                  className='object-cover rounded-md'
                />
                <Image
                  src={'/jacket.webp'}
                  alt='Product Image'
                  width={80}
                  height={80}
                  className='object-cover rounded-md'
                />
              </Card>
            </div>
            <div className='col-span-7'>
              <CardTitle className='text-2xl font-semibold mb-2'>
                {product.productName}
              </CardTitle>
              <CardDescription className='text-gray-600 mb-4 text-md'>
                This is a detailed description of the product. It provides
                information about the features, specifications, and benefits of
                the product.
              </CardDescription>
              {/* Review */}
              <div className='flex items-center mb-4'>
                <div className='flex text-yellow-400 gap-0.5'>
                  <StarIcon className='h-4 w-4' />
                  <StarIcon className='h-4 w-4' />
                  <StarIcon className='h-4 w-4' />
                  <StarHalfIcon className='h-4 w-4' />
                  <StarHalfIcon className='h-4 w-4' />
                </div>
                <span className='text-gray-400 ml-1'>(120 reviews)</span>
              </div>
              {/* Price, Stock, SKU, Brand */}

              <CardTitle className='text-xl font-bold mb-4'>$99.99</CardTitle>
              <p className='text-green-600 mb-4'>In Stock</p>
              <p className='text-gray-600 mb-4'>SKU: 12345</p>
              <p className='text-gray-600 mb-4'>Brand: Example Brand</p>
              {/* Size */}
              <div className='mb-4'>
                <p className='text-gray-600 mb-2'>Size:</p>

                {/* Size for shoes */}
                {product.category === 'Shoes' ? (
                  <div className='grid grid-cols-6 gap-2 mt-2'>
                    <Button variant='outline' size='sm'>
                      46
                    </Button>
                    <Button variant='outline' size='sm'>
                      45
                    </Button>
                    <Button variant='outline' size='sm'>
                      44
                    </Button>
                    <Button variant='outline' size='sm'>
                      43
                    </Button>
                    <Button variant='outline' size='sm'>
                      42
                    </Button>
                    <Button variant='outline' size='sm'>
                      41
                    </Button>
                    <Button variant='outline' size='sm'>
                      40
                    </Button>
                    <Button variant='outline' size='sm'>
                      39
                    </Button>
                    <Button variant='outline' size='sm'>
                      38
                    </Button>
                    <Button variant='outline' size='sm'>
                      37
                    </Button>
                  </div>
                ) : (
                  <div className='grid grid-cols-6 gap-2 mt-2'>
                    <Button variant='outline' size='sm'>
                      S
                    </Button>
                    <Button variant='outline' size='sm'>
                      M
                    </Button>
                    <Button variant='outline' size='sm'>
                      L
                    </Button>
                    <Button variant='outline' size='sm'>
                      XL
                    </Button>
                    <Button variant='outline' size='sm'>
                      XXL
                    </Button>
                    <Button variant='outline' size='sm'>
                      Over Size
                    </Button>
                  </div>
                )}
              </div>
              {/* Category */}
              <p className='text-gray-600 mb-4'>Category: {product.category}</p>

              <div className='grid grid-cols-12  gap-4 mt-6'>
                <Button
                  className='w-full col-span-10 cursor-pointer'
                  variant='default'
                >
                  <ShoppingBag className='h-5 w-5' />
                  Add to Cart
                </Button>
                <Button variant='outline' className='col-span-2'>
                  <HeartPlus className='h-5 w-5' />
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>

      {/* Related Products */}
      {product ? (
        <RelatedProduct category={product.category} />
      ) : (
        <h1>No related products found</h1>
      )}

      {/* Rating */}
      <Rating />

      {/* Reviews */}
      <Review />
      <Review />
    </div>
  );
};

export default ProductDetailsPage;
