'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  // Fetch products from an API or database

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Simulate fetching data
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {/* Design a card where show the product with price name stock and others */}
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card key={product._id} className="p-4">
            <h2 className="text-lg font-semibold">{product.productName}</h2>
            <p className="text-gray-600">Price: ${product.price}</p>
            <p className="text-gray-600">Stock: {product.stock}</p>

            <p className="text-gray-600">Description: {product.description}</p>
            <Link href={`/products/${product._id}`} className="mt-2">View Details</Link>
            <Button className="mt-2">Add to Cart</Button>
          </Card>
        ))}
        </div>
        

      
    </div>
  );
};

export default HomePage;
