'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import React from 'react';
import axios from 'axios';

const handleCreateDepartment = async (e) => {
  e.preventDefault();

  try {
    const form = e.target;
    const departmentName = form.departmentName.value;

    const response = await axios.post('/api/department', { departmentName });

    if (response.status === 201) {
      alert('department Created successfully!');
      form.reset();
    }
  } catch (error) {
    console.error('Error adding department:', error);
    alert(error || 'Something went wrong!');
  }
};

const CreateDepartment = () => {
  return (
    // Add department form
    <div className='mx-auto md:w-1/2 p-6 bg-white rounded-lg mt-5'>
      <form className='' onSubmit={handleCreateDepartment}>
        <Card className='p-4 bg-gray-50'>
          <h6 className='text-xl font-bold'> Create New Department </h6>
          <div>
            <Label htmlFor='departmentName'>Department Name</Label>
            <Input
              id='departmentName'
              name='departmentName'
              type='text'
              placeholder='Write department Name'
              className='block w-full mt-2'
            />
          </div>

          <Button type='submit' className='cursor-pointer w-fit self-end'>
            Create Departmenent
          </Button>
        </Card>
      </form>
    </div>
  );
};

export default CreateDepartment;
