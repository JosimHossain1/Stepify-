'use client';

import { ShowBranches } from '@/app/components/Dashboard/branches/ShowBrancesh';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductPage = () => {
  const [branches, setBranches] = useState([]);

  // Fetch profuct
  useEffect(() => {
    const fetchbranch = async () => {
      try {
        const response = await axios.get('/api/branch');
        setBranches(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchbranch();
  }, []);

  return (
    <div>
      <ShowBranches data={branches} />
    </div>
  );
};

export default ProductPage;
