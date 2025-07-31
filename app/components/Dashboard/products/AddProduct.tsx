'use client';
import axios from 'axios';
import React from 'react';

const handleAddProduct = async (e) => {
  e.preventDefault();

  const form = e.target;
  const title = form.title.value;
  const price = form.price.value;
  const description = form.description.value;

  const data = { title, price, description };
  const response = await axios.post('/api/products', data);

  console.log(response.data.message);
};

const AddProduct = () => {
  return (
    // Add products form
    <div className='max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-5'>
      <h1 className='text-2xl font-bold mb-4'> Add Product </h1>
      <form className='space-y-4' onSubmit={handleAddProduct}>
        {/* Title */}
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Product Name
          </label>
          <input
            type='text'
            name='title'
            placeholder='Enter product name'
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500'
          />
        </div>
        {/* Price */}
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Price
          </label>
          <input
            type='number'
            name='price'
            placeholder='Enter product price'
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500'
          />
        </div>
        {/* Description */}
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Description
          </label>
          <input
            type='text'
            name='description'
            placeholder='Enter product description'
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500'
          />
        </div>
        <button
          type='submit'
          className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
