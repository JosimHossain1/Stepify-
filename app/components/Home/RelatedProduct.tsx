'use client';
import { Card } from '@/components/ui/card';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import AddToCartBtn from '../Cart/AddToCartBtn';
import AddToWishlistBtn from '../wishlist/AddToWishlistBtn';

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
              <span className='col-span-9'>
                <AddToCartBtn product={product} outline={false}/>
              </span>
              <span className='col-span-3'>
                <AddToWishlistBtn product={product} outline={true}/>
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
