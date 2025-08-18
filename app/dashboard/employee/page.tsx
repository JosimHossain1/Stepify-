import { ShowEmployee } from '@/app/components/Dashboard/employee/ShowEmployee'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='px-10 py-8'>
      {/* Create employee button in right side */}
      <div className='flex justify-end mb-4'>
        <Link
          href='/dashboard/employee/create-employee'
        >
          <Button >
            Create Employee
          </Button>
        </Link>
      </div>

     
      <ShowEmployee />
    </div>
  )
}

export default page