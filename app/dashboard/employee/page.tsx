
import Link from 'next/link';
import React from 'react';

const page = () => {
  return <div>
    All Employees Page
    <br />
    <Link href="/dashboard/employee/create-employee">
      Create Employee
    </Link>
  </div>;
};

export default page;
