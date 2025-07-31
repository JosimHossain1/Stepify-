import axios from 'axios';
import React from 'react';

const AddUser = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    await axios.post('/api/users', { name, email });
  };

  return (
    <div className='max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-5'>
      <h1 className='text-2xl font-bold mb-4'>Add User</h1>
      <form className='space-y-4' onSubmit={handleSubmit}>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Username
          </label>
          <input
            type='text'
            name='name'
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Email
          </label>
          <input
            type='email'
            name='email'
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500'
          />
        </div>
        <button
          type='submit'
          className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
