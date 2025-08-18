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
    <div className='mx-auto p-6 bg-white shadow-md rounded-lg mt-5'>
      <h1 className='text-2xl font-bold mb-4'> Create Employee </h1>
      <form className='space-y-4' onSubmit={handleAddemployee}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/* Geneeral Information */}
          <div>
            {/* General Information */}
            <Card className='p-4 bg-gray-50'>
              <Label>General Information</Label>

              <div>
                <Label htmlFor='employeeName'>Employee Name</Label>
                <Input
                  id='employeeName'
                  name='employeeName'
                  type='text'
                  placeholder='Enter Employee Name'
                  className='mt-1 block w-full'
                  required
                />
              </div>
              <div>
                <Label htmlFor='employeeEmail'>Email Address</Label>
                <Input
                  id='employeeEmail'
                  name='employeeEmail'
                  type='email'
                  placeholder='Enter Email Address'
                  className='mt-1 block w-full'
                  required
                />
              </div>
              <div>
                <Label htmlFor='employeePhone'>Phone Number</Label>
                <Input
                  id='employeePhone'
                  name='employeePhone'
                  type='tel'
                  placeholder='Enter Phone Number'
                  className='mt-1 block w-full'
                  required
                />
              </div>
              <div>
                <Label htmlFor='employeeDOB'>Date of Birth</Label>
                <Input
                  id='employeeDOB'
                  name='employeeDOB'
                  type='date'
                  placeholder='Select Date of Birth'
                  className='mt-1 block w-full'
                  required
                />
              </div>
              <div>
                <Label htmlFor='employeeID'>National ID / Passport</Label>
                <Input
                  id='employeeID'
                  name='employeeID'
                  type='text'
                  placeholder='Enter National ID or Passport'
                  className='mt-1 block w-full'
                  required
                />
              </div>

              <div className='grid items-center gap-3 mt-4'>
                <Label className='mt-3'>Gender</Label>
                <RadioGroup defaultValue='male' className='flex gap-4'>
                  <div className='flex items-center gap-3'>
                    <RadioGroupItem value='male' id='genderMale' />
                    <Label htmlFor='genderMale'>Male</Label>
                  </div>
                  <div className='flex items-center gap-3'>
                    <RadioGroupItem value='female' id='genderFemale' />
                    <Label htmlFor='genderFemale'>Female</Label>
                  </div>
                  <div className='flex items-center gap-3'>
                    <RadioGroupItem value='other' id='genderOther' />
                    <Label htmlFor='genderOther'>Other</Label>
                  </div>
                </RadioGroup>
              </div>
            </Card>
            {/* Additional Personal Info */}
            <Card className='p-4 bg-gray-50 mt-4'>
              <Label>📝 Additional Personal Info</Label>

              <div className='flex gap-2'>
                <div className='w-1/2'>
                  <Label htmlFor='maritalStatus' className='mb-1'>
                    Marital Status
                  </Label>
                  <Select>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Select Marital Status' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Marital Status</SelectLabel>
                        <SelectItem value='single'>Single</SelectItem>
                        <SelectItem value='married'>Married</SelectItem>
                        <SelectItem value='divorced'>Divorced</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                {/* Blood Group */}
                <div className='w-1/2'>
                  <Label htmlFor='bloodGroup' className='mb-1'>
                    Blood Group
                  </Label>
                  <Select>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Select Blood Group' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Blood Groups</SelectLabel>
                        <SelectItem value='A+'>A+</SelectItem>
                        <SelectItem value='A-'>A-</SelectItem>
                        <SelectItem value='B+'>B+</SelectItem>
                        <SelectItem value='B-'>B-</SelectItem>
                        <SelectItem value='O+'>O+</SelectItem>
                        <SelectItem value='O-'>O-</SelectItem>
                        <SelectItem value='AB+'>AB+</SelectItem>
                        <SelectItem value='AB-'>AB-</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className='flex gap-2 mt-2'>
                <div className='w-1/2'>
                  <Label htmlFor='emergencyContact'>Emergency Contact</Label>
                  <Input
                    id='emergencyContact'
                    name='emergencyContact'
                    type='tel'
                    placeholder='Emergency Contact'
                    className='mt-1 block w-full'
                    required
                  />
                </div>
                <div className='w-1/2'>
                  {/* Make Gender by select */}
                  <Label htmlFor='national'>Nationality</Label>
                  <Input
                    id='national'
                    name='national'
                    type='text'
                    placeholder='Enter Nationality'
                    className='mt-1 block w-full'
                    required
                  />
                </div>
              </div>
              <div>
                <div>
                  <Label htmlFor='permanentAddress'>Full Address</Label>
                  <Textarea
                    id='permanentAddress'
                    name='permanentAddress'
                    placeholder='Enter Permanent Address'
                    className='mt-1 block w-full'
                    required
                  />
                </div>
              </div>
            </Card>

            {/* Job Information */}
            <Card className='p-4 bg-gray-50 mt-4'>
              <Label>💼 Job Information</Label>

              <div className='flex gap-2'>
                <div className='w-1/2'>
                  <Label htmlFor='jobTitle'>Job Title</Label>
                  <Input
                    id='jobTitle'
                    name='jobTitle'
                    type='text'
                    placeholder='Enter Job Title'
                    className='mt-1 block w-full'
                    required
                  />
                </div>
                <div className='w-1/2'>
                  <Label htmlFor='department'>Department</Label>
                  <Input
                    id='department'
                    name='department'
                    type='text'
                    placeholder='Enter Department'
                    className='mt-1 block w-full'
                    required
                  />
                </div>
              </div>

              <div className='flex gap-2 mt-2'>
                <div className='w-1/2'>
                  <Label htmlFor='employmentType'>Employment Type</Label>
                  <Input
                    id='employmentType'
                    name='employmentType'
                    type='text'
                    placeholder='Full-time / Part-time'
                    className='mt-1 block w-full'
                    required
                  />
                </div>
                <div className='w-1/2'>
                  <Label htmlFor='joiningDate'>Joining Date</Label>
                  <Input
                    id='joiningDate'
                    name='joiningDate'
                    type='date'
                    placeholder='Select Joining Date'
                    className='mt-1 block w-full'
                    required
                  />
                </div>
              </div>

              <div className='flex gap-2 mt-2'>
                <div className='w-1/2'>
                  <Label htmlFor='reportingTo'>Reporting To</Label>
                  <Input
                    id='reportingTo'
                    name='reportingTo'
                    type='text'
                    placeholder='Enter Reporting Manager'
                    className='mt-1 block w-full'
                    required
                  />
                </div>
                <div className='w-1/2'>
                  <Label htmlFor='workLocation'>Work Location</Label>
                  <Input
                    id='workLocation'
                    name='workLocation'
                    type='text'
                    placeholder='Enter Work Location'
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
