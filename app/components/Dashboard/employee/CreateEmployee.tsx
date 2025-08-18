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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import { PlusCircle } from 'lucide-react';
import React from 'react';

const handleAddemployee = async (e) => {
  e.preventDefault();

  const form = e.target;
  const employeeName = form.employeeName.value;
  const price = form.price.value;
  const stock = form.stock.value;
  const discount = form.discount.value;
  const description = form.description.value;

  const data = { employeeName, price, stock, discount, description };
  console.log(data);
  const response = await axios.post('/api/employees', data);

  console.log(response.data.message);
};

const CreateEmployee = () => {
  return (
    // Add employees form
    <div className='max-w-[80%] mx-auto p-6 bg-white shadow-md rounded-lg mt-5'>
      <h1 className='text-2xl font-bold mb-4'> Create Employee </h1>
      <form className='space-y-4' onSubmit={handleAddemployee}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/* Geneeral Information */}
          <div>
            <Card className='p-4 bg-gray-50'>
              <Label>General Information</Label>

              <div>
                <Label htmlFor='employeeName'>Employee Name</Label>
                <Input
                  id='employeeName'
                  name='employeeName'
                  type='text'
                  placeholder='Enter Full Name'
                  className='mt-1 block w-full'
                  required
                />
              </div>
              <div>
                <Label htmlFor='employeeName'>Email Address</Label>
                <Input
                  id='employeeName'
                  name='employeeName'
                  type='text'
                  placeholder='Enter Full Name'
                  className='mt-1 block w-full'
                  required
                />
              </div>
              <div>
                <Label htmlFor='employeeName'>Phone Number</Label>
                <Input
                  id='employeeName'
                  name='employeeName'
                  type='text'
                  placeholder='Enter Full Name'
                  className='mt-1 block w-full'
                  required
                />
              </div>
              <div>
                <Label htmlFor='employeeName'>Date of Birth</Label>
                <Input
                  id='employeeName'
                  name='employeeName'
                  type='text'
                  placeholder='Enter Full Name'
                  className='mt-1 block w-full'
                  required
                />
              </div>
              <div>
                <Label htmlFor='employeeName'>National ID/ Passport</Label>
                <Input
                  id='employeeName'
                  name='employeeName'
                  type='text'
                  placeholder='Enter Full Name'
                  className='mt-1 block w-full'
                  required
                />
              </div>

              <div className='grid items-center gap-3 mt-4'>
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

            {/* Job Information */}
            <Card className='p-4 bg-gray-50 mt-4'>
              <Label>💼 Job Information</Label>

              <div className='flex'>
                <div className='w-1/2 pr-2'>
                  <Label htmlFor='price'>Job Title</Label>
                  <Input
                    id='JobTitle'
                    name='JobTitle'
                    type='number'
                    placeholder='Enter Employee Job Title'
                    className='mt-1 block w-full'
                    required
                  />
                </div>
                <div className='w-1/2 pr-2'>
                  <Label htmlFor='price'>Department</Label>
                  <Input
                    id='JobTitle'
                    name='JobTitle'
                    type='number'
                    placeholder='Enter Employee Job Title'
                    className='mt-1 block w-full'
                    required
                  />
                </div>
              </div>

              <div className='flex'>
                <div className='w-1/2 pr-2'>
                  <Label htmlFor='price'>Employement Type</Label>
                  <Input
                    id='JobTitle'
                    name='JobTitle'
                    type='number'
                    placeholder='Enter Employee Job Title'
                    className='mt-1 block w-full'
                    required
                  />
                </div>
                <div className='w-1/2 pr-2'>
                  <Label htmlFor='price'>Joining Date</Label>
                  <Input
                    id='JobTitle'
                    name='JobTitle'
                    type='number'
                    placeholder='Enter Employee Job Title'
                    className='mt-1 block w-full'
                    required
                  />
                </div>
              </div>
              <div className='flex'>
                <div className='w-1/2 pr-2'>
                  <Label htmlFor='price'>Reporting To</Label>
                  <Input
                    id='JobTitle'
                    name='JobTitle'
                    type='number'
                    placeholder='Enter Employee Job Title'
                    className='mt-1 block w-full'
                    required
                  />
                </div>
                <div className='w-1/2 pr-2'>
                  <Label htmlFor='price'>Work Location</Label>
                  <Input
                    id='JobTitle'
                    name='JobTitle'
                    type='number'
                    placeholder='Enter Employee Job Title'
                    className='mt-1 block w-full'
                    required
                  />
                </div>
              </div>
            </Card>

            <Card className='p-4 bg-gray-50 mt-4'>
              <Label>📝 Additional Personal Info</Label>

              <div className='flex'>
                <div className='w-1/2 pr-2'>
                  <Label htmlFor='price'>Marital Status</Label>
                  <Input
                    id='JobTitle'
                    name='JobTitle'
                    type='number'
                    placeholder='Enter Employee Job Title'
                    className='mt-1 block w-full'
                    required
                  />
                </div>
                <div className='w-1/2 pr-2'>
                  <Label htmlFor='price'>Emergency Contact </Label>
                  <Input
                    id='JobTitle'
                    name='JobTitle'
                    type='number'
                    placeholder='Enter Employee Job Title'
                    className='mt-1 block w-full'
                    required
                  />
                </div>
              </div>
              <div className='flex'>
                <div className='w-1/2 pr-2'>
                  <Label htmlFor='price'>Blood Group</Label>
                  <Input
                    id='JobTitle'
                    name='JobTitle'
                    type='number'
                    placeholder='Enter Employee Job Title'
                    className='mt-1 block w-full'
                    required
                  />
                </div>
                <div className='w-1/2 pr-2'>
                  <Label htmlFor='price'>Permanent Address </Label>
                  <Input
                    id='JobTitle'
                    name='JobTitle'
                    type='number'
                    placeholder='Enter Employee Job Title'
                    className='mt-1 block w-full'
                    required
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Images and Others Information */}
          <div>
            {/*  Images and Others Information */}

            <Card className='p-4 bg-gray-50'>
              <Label>📂 Employment Records</Label>

              <div className='flex items-center gap-4'>
                {/* <Image
                  src='/images/employee.png'
                  alt='Employee Image'
                  width={100}
                  height={100}
                  className='rounded-full'
                /> */}
                <Button variant='outline' className='flex items-center gap-2'>
                  <PlusCircle className='h-4 w-4' />
                  Upload Profile Image
                </Button>
                <Button variant='outline' className='flex items-center gap-2'>
                  <PlusCircle className='h-4 w-4' />
                  Upload Resume
                </Button>
              </div>
              {/* Previus company */}
              <div className='mt-4'>
                <Label htmlFor='previousCompany'>Previous Company</Label>
                <Input
                  id='previousCompany'
                  name='previousCompany'
                  type='text'
                  placeholder='Enter Previous Company Name'
                  className='mt-1 block w-full'
                />
              </div>

              {/* Education */}
              <div className='mt-4'>
                <Label htmlFor='education'>Education</Label>
                <Textarea
                  id='education'
                  name='education'
                  placeholder='Enter Education Details'
                  className='mt-1 block w-full'
                />
              </div>
            </Card>
            <Card className='p-4 bg-gray-50 mt-4'>
              <Label>📊 Salary & Payroll Info</Label>

              <div className='flex'>
                <div className='w-1/2 pr-2'>
                  <Label htmlFor='basicSalary'>Basic Salary</Label>
                  <Input
                    id='basicSalary'
                    name='basicSalary'
                    type='number'
                    placeholder='Enter Basic Salary'
                    className='mt-1 block w-full'
                    required
                  />
                </div>
                <div className='w-1/2 pr-2'>
                  <Label htmlFor='allowances'>Allowances</Label>
                  <Input
                    id='allowances'
                    name='allowances'
                    type='number'
                    placeholder='Employee Allowances'
                    className='mt-1 block w-full'
                    required
                  />
                </div>
              </div>
            </Card>

            {/*  System and Access control */}
            <Card className='p-4 bg-gray-50 mt-4'>
              <Label>⚙️ System & Access Control</Label>
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Roles' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {/* SelectLebel for employee */}
                    <SelectLabel>Roles</SelectLabel>
                    <SelectItem value='admin'>Admin</SelectItem>
                    <SelectItem value='manager'>Manager</SelectItem>
                    <SelectItem value='employee'>Employee</SelectItem>
                    <SelectItem value='hr'>HR</SelectItem>
                    <SelectItem value='accountant'>Accountant</SelectItem>
                    <SelectItem value='customer'>Customer</SelectItem>
                    <SelectItem value='vendor'>Vendor</SelectItem>
                    <SelectItem value='support'>Support</SelectItem>
                    <SelectItem value='guest'>Guest</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Login Credential */}
              <Label>Login Credentials</Label>
              <div className='flex'>
                <div className='w-1/2 pr-2'>
                  <Label htmlFor='userId'>User ID</Label>
                  <Input
                    id='userId'
                    name='userId'
                    type='text'
                    placeholder='Employee User ID'
                    className='mt-1 block w-full'
                    required
                  />
                </div>
                <div className='w-1/2 pr-2'>
                  <Label htmlFor='password'>Password</Label>
                  <Input
                    id='password'
                    name='password'
                    type='password'
                    placeholder='Employee Password'
                    className='mt-1 block w-full'
                    required
                  />
                </div>
              </div>
            </Card>

            <Card className='p-4 bg-gray-50 mt-4'>
              <Label>🏢 Branch</Label>
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select Branch' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Branches</SelectLabel>
                    <SelectItem value='head-office'>Head Office</SelectItem>
                    <SelectItem value='dhaka'>Dhaka</SelectItem>
                    <SelectItem value='chittagong'>Chittagong</SelectItem>
                    <SelectItem value='rajshahi'>Rajshahi</SelectItem>
                    <SelectItem value='khulna'>Khulna</SelectItem>
                    <SelectItem value='sylhet'>Sylhet</SelectItem>
                    <SelectItem value='barishal'>Barishal</SelectItem>
                    <SelectItem value='rangpur'>Rangpur</SelectItem>
                    <SelectItem value='mymensingh'>Mymensingh</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Card>
          </div>
        </div>

        <Button
          type='submit'
          className='cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
          value='Add employee'
        >
          Create employee
        </Button>
      </form>
    </div>
  );
};

export default CreateEmployee;
