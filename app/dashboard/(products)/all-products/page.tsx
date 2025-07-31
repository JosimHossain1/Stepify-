'use client';
import ShowProduct from '@/app/components/Dashboard/products/ShowProduct';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductPage = () => {

  const [products, setProducts] = useState([]);


  // Fetch profuct
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      
      <ShowProduct data={products} />
    </div>
  );
};

export default ProductPage;
