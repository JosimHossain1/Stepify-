'use client';
import axios from 'axios';
import { DeleteIcon } from 'lucide-react';
import React from 'react';

const DeleteUser = ({ id }: { id: string }) => {
  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(`/api/users/${id}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DeleteIcon
      onClick={() => handleDelete(id)}
      className='text-red-600 hover:text-red-800 cursor-pointer'
    />
  );
};

export default DeleteUser;
