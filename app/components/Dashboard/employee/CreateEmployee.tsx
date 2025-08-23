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
import { PlusCircle } from 'lucide-react';
import React from 'react';
import axios from 'axios';

const handleAddemployee = async (e) => {
  e.preventDefault();

  // Create random employee ID
  // const employeeId = `EMP-${Math.floor(Math.random() * 1000)}`;

  const form = e.target;
  const name = form.employeeName.value.trim();
  const email = form.employeeEmail.value.trim();
  const phone = form.employeePhone.value.trim();
  const dateOfBirth = form.employeeDOB.value.trim();
  const nationalId = form.employeeID.value.trim();
  const gender = form.gender.value.trim();

  const maritalStatus = form.maritalStatus.value.trim();
  const bloodGroup = form.bloodGroup.value.trim();
  const emergencyContact = form.emergencyContact.value.trim();
  const nationality = form.nationality.value.trim();
  const address = form.permanentAddress.value.trim();

  const jobTitle = form.jobTitle.value.trim();
  const department = form.department.value.trim();
  const employmentType = form.employmentType.value.trim();
  const dateOfJoining = form.joiningDate.value.trim();
  const reportingManager = form.reportingTo.value.trim();
  const workLocation = form.workLocation.value.trim();

  const previousCompany = form.previousCompany.value.trim();
  const education = form.education.value.trim();

  const basicSalary = form.basicSalary.value.trim();
  const allowances = form.allowances.value.trim();

  const branch = form.branch.value.trim();
  const role = form.role.value.trim();
  const userId = form.userId.value.trim();
  const password = form.password.value.trim();

  const data = {
    name,
    email,
    phone,
    dateOfBirth,
    nationalId,
    gender,
    maritalStatus,
    bloodGroup,
    emergencyContact,
    nationality,
    address,
    jobTitle,
    department,
    employmentType,
    dateOfJoining,
    reportingManager,
    workLocation,
    previousCompany,
    education,
    basicSalary,
    allowances,
    branch,
    role,
    userId,
    password,
  };

  console.log(data);
  try {
    const response = await axios.post('/api/employee', data);

    console.log(response.data.message);
    alert('Employee added successfully!');

    // ✅ reset form
    form.reset();
  } catch (error) {
    console.error('Error adding employee:', error);
  }
};

const CreateEmployee = ({ roles, departments, branches }) => {
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
                />
              </div>

              <div className='grid items-center gap-3 mt-4'>
                <Label className='mt-3'>Gender</Label>
                <RadioGroup
                  defaultValue='male'
                  name='gender'
                  className='flex gap-4'
                >
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
                  <Select
                    onValueChange={(value) => {
                      const input = document.getElementById(
                        'maritalStatusInput',
                      ) as HTMLInputElement;
                      if (input) {
                        input.value = value;
                      }
                    }}
                  >
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
                    <input
                      type='hidden'
                      id='maritalStatusInput'
                      name='maritalStatus'
                    />
                  </Select>
                </div>
                {/* Blood Group */}
                <div className='w-1/2'>
                  <Label htmlFor='bloodGroup' className='mb-1'>
                    Blood Group
                  </Label>
                  <Select
                    onValueChange={(value) => {
                      const input = document.getElementById(
                        'bloodGroupInput',
                      ) as HTMLInputElement;
                      if (input) {
                        input.value = value;
                      }
                    }}
                  >
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
                  {/* hidden input for form submission */}
                  <input type='hidden' id='bloodGroupInput' name='bloodGroup' />
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
                  />
                </div>
                <div className='w-1/2'>
                  {/* Make Gender by select */}
                  <Label htmlFor='nationality'>Nationality</Label>
                  <Input
                    id='nationality'
                    name='nationality'
                    type='text'
                    placeholder='Enter Nationality'
                    className='mt-1 block w-full'
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
                  />
                </div>
                <div className='w-1/2'>
                  <Label htmlFor='departmentInput' className='mb-1'>
                    Department
                  </Label>
                  <Select
                    onValueChange={(value) => {
                      const input = document.getElementById(
                        'departmentInput',
                      ) as HTMLInputElement;
                      if (input) {
                        input.value = value;
                      }
                    }}
                  >
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Select Department' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Department</SelectLabel>

                        {departments.map((department) => (
                          <SelectItem
                            key={department.id}
                            value={department.departmentName}
                          >
                            {department.departmentName.charAt(0).toUpperCase() +
                              department.departmentName.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {/* hidden input for form submission */}
                  <input type='hidden' id='departmentInput' name='department' />
                </div>
              </div>

              <div className='flex gap-2 mt-2'>
                <div className='w-1/2'>
                  <Label htmlFor='employmentType' className='mb-1'>
                    Employment Type
                  </Label>
                  <Select
                    onValueChange={(value) => {
                      const input = document.getElementById(
                        'employmentTypeInput',
                      ) as HTMLInputElement;
                      if (input) {
                        input.value = value;
                      }
                    }}
                  >
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Select Employment Type' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Emplyment Type</SelectLabel>
                        <SelectItem value='Full-time'>Full-time</SelectItem>
                        <SelectItem value='Part-time'>Part-time</SelectItem>
                        <SelectItem value='Contract'>Contract</SelectItem>
                        <SelectItem value='Internship'>Internship</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                    <input
                      type='hidden'
                      id='employmentTypeInput'
                      name='employmentType'
                    />
                  </Select>
                </div>
                <div className='w-1/2'>
                  <Label htmlFor='joiningDate'>Joining Date</Label>
                  <Input
                    id='joiningDate'
                    name='joiningDate'
                    type='date'
                    placeholder='Select Joining Date'
                    className='mt-1 block w-full'
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
                  />
                </div>
              </div>
            </Card>
            <Card className='p-4 bg-gray-50 mt-4'>
              <Label>🏢 Branch</Label>
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
                  <SelectValue placeholder='Select Branch' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Department</SelectLabel>

                    {branches.map((branch) => (
                      <SelectItem key={branch.id} value={branch.name}>
                        {branch.name.charAt(0).toUpperCase() +
                          branch.name.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* hidden input for form submission */}
              <input type='hidden' id='branchInput' name='branch' />
            </Card>
            {/*  System and Access control */}
            <Card className='p-4 bg-gray-50 mt-4'>
              <Label>⚙️ System & Access Control</Label>
              <Select
                onValueChange={(value) => {
                  const input = document.getElementById(
                    'roleInput',
                  ) as HTMLInputElement;
                  if (input) {
                    input.value = value;
                  }
                }}
              >
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Roles' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {roles.map((role) => (
                      <SelectItem key={role.id} value={role.roleName}>
                        {role.roleName.charAt(0).toUpperCase() +
                          role.roleName.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
                <input type='hidden' id='roleInput' name='role' />
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
