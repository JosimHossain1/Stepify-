'use client';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import axios from 'axios';
import { HeartPlus } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const RelatedProduct = ({ category }) => {
  const [products, setProducts] = useState([]);
  // Fetch related products logic can be added here
  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await axios.get(`/api/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    };
    fetchRelatedProducts();
  }, []);

  const relatedProducts = products
    .filter((product) => product?.category === category)
    .slice(0, 4);
  return (
    <div>
      <h1 className='text-xl font-bold'>Related Products</h1>
      <div className='grid grid-cols-4  mt-4'>
        {/* Map through related products and display them */}
        {relatedProducts.map((product) => (
          <Card key={product._id} className='border p-4 mx-auto'>
            <Image
              src={'/jacket.webp'}
              alt='Product Image'
              width={200}
              height={200}
              className='object-cover rounded-md'
            />
            <h4 className='text-lg font-semibold'>{product.productName}</h4>
            <p className='text-sm text-gray-600'>{product.description}</p>
            <p className='text-md font-bold'>${product.price}</p>

            <div className='grid grid-cols-12 gap-2'>
              <Button className='w-full mt-2 col-span-9'>Add to Cart</Button>
              <Button variant='outline' className='mt-2 col-span-3'>
                <HeartPlus className='h-5 w-5' />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
