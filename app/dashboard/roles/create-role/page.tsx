'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import React from 'react';
import axios from 'axios';

const handleCreateRoles = async (e) => {
  e.preventDefault();

  try {
    const form = e.target;
    const roleName = form.rolesName.value;

    const response = await axios.post('/api/roles', { roleName });

    if (response.status === 201) {
      alert('Roles Created successfully!');
      form.reset();
    } else {
      alert('Failed to add roles. Please try again.');
    }
  } catch (error) {
    console.error('Error adding roles:', error);
    alert(error || 'Something went wrong!');
  }
};

const CreateRoles = () => {
  return (
    // Add roless form
    <div className='mx-auto md:w-1/2 p-6 bg-white rounded-lg mt-5'>
      <form className='' onSubmit={handleCreateRoles}>
        <Card className='p-4 bg-gray-50'>
          <h6 className='text-xl font-bold'> Create New roles </h6>
          <div>
            <Label htmlFor='rolesName'>Role Name</Label>
            <Input
              id='rolesName'
              name='rolesName'
              type='text'
              placeholder='Write Role Name'
              className='block w-full mt-2'
            />
          </div>

          <Button
            type='submit'
            className='cursor-pointer w-fit self-end'
            value='Add roles'
          >
            Create roles
          </Button>
        </Card>
      </form>
    </div>
  );
};

export default CreateRoles;
