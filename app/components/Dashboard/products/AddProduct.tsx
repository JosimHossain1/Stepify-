'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import { PlusCircle } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import CreateCategory from '../categories/CreateCategory';



const AddProduct = () => {
  // Category data from API
  const [categories, setCategories] = useState([]);
  const [openCreateCategory, setOpenCreateCategory] = useState(false);

  useEffect(() => {
    // Fetch categories from API
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/categories');
        console.log(response.data);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleAddProduct = async (e) => {
  e.preventDefault();

  const form = e.target;
  const productName = form.productName.value;
  const price = form.price.value;
  const stock = form.stock.value;
  const discount = form.discount.value;
  const description = form.description.value;
  const category = form.category.value;

  const data = { productName, price, stock, discount, description, category };
  console.log(data);
  const response = await axios.post('/api/products', data);

  console.log(response.data.message);
};

  return (
    // Add products form
    <div className='max-w-[80%] mx-auto p-6 bg-white shadow-md rounded-lg mt-5'>
      <h1 className='text-2xl font-bold mb-4'> Add Product </h1>
      <form className='space-y-4' onSubmit={handleAddProduct}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/* Geneeral Information */}
          <div>
            <Card className='p-4 bg-gray-50'>
              <Label>General Information</Label>

              <div>
                <Label htmlFor='productName'>Product Name</Label>
                <Input
                  id='productName'
                  name='productName'
                  type='text'
                  placeholder='Enter product name'
                  className='mt-1 block w-full'
                  required
                />
              </div>
              <div className='grid w-full gap-3'>
                <Label htmlFor='description'>Product Description</Label>
                <Textarea
                  placeholder='Write a short product description'
                  name='description'
                  id='description'
                />
              </div>

              <div className='grid items-center gap-3 mt-4'>
                <Label htmlFor='price'>Size</Label>
                <RadioGroup defaultValue='comfortable' className='flex gap-4'>
                  <div className='flex items-center gap-3'>
                    <RadioGroupItem value='default' id='r1' />
                    <Label htmlFor='r1'>XXL</Label>
                  </div>
                  <div className='flex items-center gap-3'>
                    <RadioGroupItem value='extraLarge' id='r2' />
                    <Label htmlFor='r2'>XL</Label>
                  </div>
                  <div className='flex items-center gap-3'>
                    <RadioGroupItem value='large' id='r3' />
                    <Label htmlFor='r3'>L</Label>
                  </div>
                  <div className='flex items-center gap-3'>
                    <RadioGroupItem value='medium' id='r4' />
                    <Label htmlFor='r4'>M</Label>
                  </div>
                  <div className='flex items-center gap-3'>
                    <RadioGroupItem value='small' id='r5' />
                    <Label htmlFor='r5'>S</Label>
                  </div>
                </RadioGroup>

                <Label htmlFor='price' className='mt-3'>
                  Gender
                </Label>
                <RadioGroup defaultValue='comfortable' className='flex gap-4'>
                  <div className='flex items-center gap-3'>
                    <RadioGroupItem value='default' id='g1' />
                    <Label htmlFor='g1'>Man</Label>
                  </div>
                  <div className='flex items-center gap-3'>
                    <RadioGroupItem value='comfortable' id='g2' />
                    <Label htmlFor='g2'>Women</Label>
                  </div>
                  <div className='flex items-center gap-3'>
                    <RadioGroupItem value='compact' id='g3' />
                    <Label htmlFor='g3'>Others</Label>
                  </div>
                </RadioGroup>
              </div>
            </Card>

            {/* General */}
            <Card className='p-4 bg-gray-50 mt-4'>
              <Label>Price and Stocks</Label>

              <div className='flex'>
                <div className='w-1/2 pr-2'>
                  <Label htmlFor='price'>Price</Label>
                  <Input
                    id='price'
                    name='price'
                    type='number'
                    placeholder='Enter product price'
                    className='mt-1 block w-full'
                    required
                  />
                </div>
                <div className='w-1/2 pl-2'>
                  <Label htmlFor='stock'>Stock</Label>
                  <Input
                    id='stock'
                    name='stock'
                    type='number'
                    placeholder='Enter product stock'
                    className='mt-1 block w-full'
                    required
                  />
                </div>
              </div>

              {/* Discound and Discound Type */}
              <div className='flex mt-4'>
                <div className='w-1/2 pr-2'>
                  <Label htmlFor='discount'>Discount</Label>
                  <Input
                    id='discount'
                    name='discount'
                    type='number'
                    placeholder='Enter discount percentage'
                    className='mt-1 block w-full'
                  />
                </div>
                <div className='w-1/2 pl-2'>
                  <Label htmlFor='discountType'>Discount Type</Label>
                  <Select>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Select discount type' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value='percentage'>Percentage</SelectItem>
                        <SelectItem value='fixed'>Fixed Amount</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </div>

          <div>
            {/*  Images and Others Information */}

            <Card className='p-4 bg-gray-50'>
              <Label>Images and Other Information</Label>
              <Card className='min-h-8 flex items-center justify-center bg-gray-100 mb-4'>
                <Image
                  src={'/jacket.webp'}
                  alt='Product Image'
                  width={200}
                  height={200}
                  className='object-cover rounded-md'
                />
              </Card>
              <div className='flex gap-3'>
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
                <div className='flex items-center justify-center bg-transparent w-20 h-20 rounded-md cursor-pointer border-dashed border border-gray-400'>
                  <PlusCircle className='text-gray-500' />
                </div>
              </div>
            </Card>
            {/* Category */}
            <Card className='p-4 bg-gray-50 mt-4'>
              <Label>Category</Label>

              <Label htmlFor='description'>Product Category</Label>
              <Select
                  onValueChange={(value) => {
                      const input = document.getElementById(
                        'categoryInput',
                      ) as HTMLInputElement;
                      if (input) {
                        input.value = value;
                      }
                    }}
              >
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a category' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {categories.map((category: any) => (
                      <SelectItem
                        key={category.id}
                        value={category.categoryName}
                      >
                        {category.categoryName}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              <input type="hidden" name="category" id='categoryInput' />
              </Select>


              {/* Create Category */}
              <div>
                <Button
                  variant='outline'
                  className='mt-2'
                  type='button'
                  onClick={() => setOpenCreateCategory(!false)}
                >
                  Create Category
                </Button>
              </div>

            {
              openCreateCategory && <CreateCategory />
            }
            </Card>
          </div>
        </div>

        <Button
          type='submit'
          className='cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
          value='Add Product'
        >
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
