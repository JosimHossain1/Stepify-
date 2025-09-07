'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import React from 'react';
import axios from 'axios';

const handleAddcategory = async (e) => {
  e.preventDefault();

  try {
    const form = e.target;
    const categoryName = form.categoryName.value;
    const slug = form.slug.value;
    const parentCategory = form.parentCategory.value;

    const data = {categoryName, slug, parentCategory };
    console.log(categoryName, slug, parentCategory);

    const response = await axios.post('/api/categories', data);

    if (response.status === 201) {
      alert('Category added successfully!');
      form.reset();
    } else {
      alert('Failed to add category. Please try again.');
    }
  } catch (error) {
    console.error('Error adding category:', error);
    alert(error || 'Something went wrong!');
  }
};

const CreateCategory = () => {
  return (
    // Add categorys form
    <div className='mx-auto p-6 bg-white shadow-md rounded-lg mt-5'>
      <h1 className='text-2xl font-bold mb-4'> Create New Category </h1>
      <form className='space-y-4 flex flex-col' onSubmit={handleAddcategory}>
        <Card className='p-4 bg-gray-50'>
          <div className='flex gap-4'>
            <div className='w-1/2'>
              <Label htmlFor='categoryName'>Category Name</Label>
              <Input
                id='categoryName'
                name='categoryName'
                type='text'
                placeholder='Category Name'
                className='block w-full mt-2'
              />
            </div>
            <div className='w-1/2'>
              <Label htmlFor='categoryName'>Slug</Label>
              <Input
                id='slug'
                name='slug'
                type='text'
                placeholder='Slug Name'
                className='block w-full mt-2'
              />
            </div>
       
          </div>
          <div>
            <Label className='mb-2'>Parent Category</Label>
            <Select
              onValueChange={(value) => {
                const input = document.getElementById(
                  'parentCategoryInput',
                ) as HTMLInputElement;
                if (input) {
                  input.value = value;
                }
              }}
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select Parent Category' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Parent Categorye</SelectLabel>
                  <SelectItem value='John Doe'>John Doe</SelectItem>
                  <SelectItem value='Jane Smith'>Jane Smith</SelectItem>
                  <SelectItem value='Alice Johnson'>Alice Johnson</SelectItem>
                  <SelectItem value='Bob Brown'>Bob Brown</SelectItem>
                </SelectGroup>
              </SelectContent>
              <input type='hidden' id='parentCategoryInput' name='parentCategory' />
            </Select>
          </div>
        </Card>

        <Button
          type='submit'
          className='cursor-pointer w-fit self-end'
          value='Add category'
        >
          Create Category
        </Button>
      </form>
    </div>
  );
};

export default CreateCategory;
