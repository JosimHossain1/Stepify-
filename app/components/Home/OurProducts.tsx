'use client';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export function OurProducts() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();

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
    <div className='flex w-[83%] mx-auto flex-col gap-6'>
      <Tabs defaultValue='All Products' className='w-full'>
        {/* 🔹 Tab buttons */}
        <TabsList className='sticky top-0 z-10 bg-background grid w-full grid-cols-5'>
          <TabsTrigger value='All Products'>All Products</TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.categoryName}>
              {category.categoryName}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* 🔹 Tab contents */}
        <TabsContent value='All Products'>
          <Card>
            {/* Filter product base on categoryName */}
            <div className='grid grid-cols-12'>
              {products.map((filteredProduct) => (
                <Card key={filteredProduct.id} className='m-4 p-4 col-span-3'>
                  <h1>{filteredProduct.productName}</h1>
                  <p>{filteredProduct.description}</p>
                  <p>${filteredProduct.price}</p>
                  <p>{filteredProduct.stock}</p>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        {categories.map((category) => (
          <TabsContent key={category._id} value={category.categoryName}>
            <Card>
              {/* Filter product base on categoryName */}
              <div className='grid grid-cols-12'>
                {products
                  .filter(
                    (product) => product.category === category.categoryName,
                  )
                  .map((filteredProduct) => (
                    <Link
                      className=' col-span-3'
                      key={filteredProduct._id}
                      href={`/products/${filteredProduct.id}`}
                    >
                      <Card className='m-4 p-4'>
                        <h1>{filteredProduct._id}</h1>
                        <h1>{filteredProduct.productName}</h1>
                        <p>{filteredProduct.description}</p>
                        <p>${filteredProduct.price}</p>
                        <p>{filteredProduct.stock}</p>
                        <Link href={`/products/${filteredProduct._id}`} className='text-blue-500'>
                          View Details
                        </Link>
                      </Card>
                    </Link>
                  ))}
              </div>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
