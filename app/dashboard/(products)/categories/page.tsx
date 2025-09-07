'use client';
import CreateCategory from '@/app/components/Dashboard/categories/CreateCategory';
import ShowCategory from '@/app/components/Dashboard/categories/ShowCategory';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CategoryPage = () => {
  // Category data from API
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from API
    const fetchCategories = async () => {
      try {
        const response = await axios.get('api/categories');
        console.log(response.data);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  return (
    // make two grid grid more space for showCategory component and less space for create category component
    <div className='grid grid-cols-12 gap-4'>
      <div className='col-span-5'>
        <CreateCategory />
      </div>
      <div className='col-span-7'>
        <ShowCategory data={categories} />
      </div>
    </div>
  );
};

export default CategoryPage;
