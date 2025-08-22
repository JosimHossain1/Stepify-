'use client';

import { ShowBranches } from '@/app/components/Dashboard/branches/ShowBrancesh';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const BranchPage = () => {
  const [branches, setBranches] = useState([]);

  // Fetch profuct
  useEffect(() => {
    const fetchbranch = async () => {
      try {
        const response = await axios.get('/api/branch');
        console.log(response.data.data);
        setBranches(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchbranch();
  }, []);

  return (
    <div>
      {/* Show create button on write side */}
      <div className='mb-4'>
        <Link href='/dashboard/create-branch'>
          <Button className='cursor-pointer'>
            Create Branch
          </Button>
        </Link>
      </div>
      <ShowBranches data={branches} />
    </div>
  );
};

export default BranchPage;
