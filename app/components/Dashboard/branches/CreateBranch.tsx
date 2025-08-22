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

const handleAddbranch = async (e) => {
  e.preventDefault();

  try {
    const form = e.target;
    const name = form.branchName.value;
    const location = form.branchLocation.value;
    const branchHead = form.branchHead.value;

    const data = { name, location, branchHead };

    const response = await axios.post('/api/branch', data);

    if (response.status === 201) {
      alert('Branch added successfully!');
      form.reset();
    } else {
      alert('Failed to add branch. Please try again.');
    }
  } catch (error) {
    console.error('Error adding branch:', error);
    alert(error || 'Something went wrong!');
  }
};

const CreateBranch = () => {
  return (
    // Add branchs form
    <div className='mx-auto md:w-1/2 p-6 bg-white shadow-md rounded-lg mt-5'>
      <h1 className='text-2xl font-bold mb-4'> Create New Branch </h1>
      <form className='space-y-4 flex flex-col' onSubmit={handleAddbranch}>
        <Card className='p-4 bg-gray-50'>
          <div className='flex gap-4 mb-4'>
            <div className='w-1/2'>
              <Label htmlFor='branchName'>Branch Name</Label>
              <Input
                id='branchName'
                name='branchName'
                type='text'
                placeholder='Branch Name'
                className='block w-full mt-2'
              />
            </div>

            <div className='w-1/2 '>
              <Label className='mb-2'>Branch Head</Label>
              <Select
                onValueChange={(value) => {
                  const input = document.getElementById(
                    'branchInput',
                  ) as HTMLInputElement;
                  if (input) {
                    input.value = value;
                  }
                }}
              >
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select Branch Head' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Branche Head</SelectLabel>
                    <SelectItem value='John Doe'>John Doe</SelectItem>
                    <SelectItem value='Jane Smith'>Jane Smith</SelectItem>
                    <SelectItem value='Alice Johnson'>Alice Johnson</SelectItem>
                    <SelectItem value='Bob Brown'>Bob Brown</SelectItem>
                  </SelectGroup>
                </SelectContent>
                <input type='hidden' id='branchInput' name='branchHead' />
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor='branchLocation'>Branch Location</Label>
            <textarea
              id='branchLocation'
              name='branchLocation'
              placeholder='write branch location'
              className='mt-2 block w-full border border-gray-300 rounded-md p-2'
              rows={3}
            ></textarea>
          </div>
        </Card>

        <Button
          type='submit'
          className='cursor-pointer w-fit self-end'
          value='Add branch'
        >
          Create Branch
        </Button>
      </form>
    </div>
  );
};

export default CreateBranch;
