import React from 'react';
import UpdateUser from '../Users/UpdateUser';
import DeleteUser from '../Users/DeleteUser';

const ShowProduct = ({ products }) => {
  return (
    <div>
      {/* Design a table for show product data */}
      <h1 className='text-2xl font-bold mb-4'>Product List</h1>
      <div className='max-w-4xl mx-auto'>
        <table className='min-w-full bg-white shadow-md rounded-lg overflow-hidden'>
          <thead>
            <tr className='bg-gray-800 text-white'>
              <th className='py-2 px-4'>Title</th>
              <th className='py-2 px-4'>Price</th>
              <th className='py-2 px-4'>Description</th>
              <th className='py-2 px-4'>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className='border-b hover:bg-gray-100'>
                <td className='py-2 px-4'>{product.title}</td>
                <td className='py-2 px-4'>${product.price}</td>
                <td className='py-2 px-4'>{product.description}</td>
                {/* Action */}
                <td className='py-2 px-4 flex items-center space-x-8'>
                  {/* Add Update and Delete buttons here */}
                  <UpdateUser id={product._id} />
                  <DeleteUser id={product._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowProduct;
