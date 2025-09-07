'use client';
import { Card } from '@/components/ui/card';
import axios from 'axios';
import { Heart, HeartPlus } from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ProductDetailsPage = () => {

  // Fetch product details using the id from the URL
  const {id} = useParams()
  const [product, setProduct] = useState(null)

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
  return <div className='w-[83%] mx-auto my-10 '>
    <h1>Product Details Page</h1>
    {product && (
      <Card className='p-6 mt-4'>
        <HeartPlus className='h-6 w-6 mb-4 text-red-500 cursor-pointer' />
        <h2>{product.productName}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Stock: {product.stock}</p>
      </Card>
    )}

  </div>;
};

export default ProductDetailsPage;
