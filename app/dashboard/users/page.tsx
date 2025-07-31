'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddUser from '@/app/components/Dashboard/Users/AddUser';
import UpdateUser from '@/app/components/Dashboard/Users/UpdateUser';
import DeleteUser from '@/app/components/Dashboard/Users/DeleteUser';

// Define a User type (based on what you store in DB)
interface User {
  _id: string;
  name: string;
  email: string;
}

const UserPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  // Fetch users from the API

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>('/api/users');
        setUsers(response.data);
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <AddUser />
      <h1 className='text-2xl font-bold mb-4'>User List</h1>

      {/* Center the content */}
      <div className='max-w-4xl mx-auto'>
        <table className='min-w-full bg-white shadow-md rounded-lg overflow-hidden'>
          <thead>
            <tr className='bg-gray-800 text-white'>
              <th className='py-2 px-4'>Username</th>
              <th className='py-2 px-4'>Email</th>
              <th className='py-2 px-4'>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className='border-b hover:bg-gray-100'>
                <td className='py-2 px-4'>{user.name}</td>
                <td className='py-2 px-4'>{user.email}</td>
                {/* Action update and deleter */}
                <td className='py-2 px-4 flex items-center space-x-8'>
                  <UpdateUser id={user._id} />
                  <DeleteUser id={user._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPage;
