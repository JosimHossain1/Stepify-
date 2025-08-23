import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Categories = () => {
  return (
    <section className='my-8 grid bg-white grid-cols-4 gap-6 w-[83%] mx-auto'>
      <Card className='bg-[#F3F3F3]'>
        <CardContent className='p-4 px-6'>
          <div>
            <p className='text-xl font-semibold'>Headphones</p>
            <p className='text-sm text-gray-500'>3 Items</p>
          </div>
          <div className='flex justify-center'>
            <Image
              src='/headphone.webp'
              width={150}
              height={150}
              alt='Product Category'
            />
          </div>
          <Link href='' >
            <Button variant={'outline'} className='cursor-pointer rounded-full'>
              Shop Now
            </Button>
          </Link>
        </CardContent>
      </Card>
      <Card className='bg-[#F3F3F3]'>
        <CardContent className='p-4 px-6'>
          <div>
            <p className='text-xl font-semibold'>Shoes</p>
            <p className='text-sm text-gray-500'>10 Items</p>
          </div>
          <div className='flex justify-center'>
            <Image
              src='/shoes.png'
              width={150}
              height={150}
              alt='Product Category'
            />
          </div>
          <Link href='' >
            <Button variant={'outline'} className='cursor-pointer rounded-full'>
              Shop Now
            </Button>
          </Link>
        </CardContent>
      </Card>
      <Card className='bg-[#F3F3F3]'>
        <CardContent className='p-4 px-6'>
          <div>
            <p className='text-xl font-semibold'>Cable</p>
            <p className='text-sm text-gray-500'>63 Items</p>
          </div>
          <div className='flex justify-center'>
            <Image
              src='/cable.webp'
              width={150}
              height={150}
              alt='Product Category'
            />
          </div>
          <Link href='' >
            <Button variant={'outline'} className='cursor-pointer rounded-full'>
              Shop Now
            </Button>
          </Link>
        </CardContent>
      </Card>
     <Link href='' className='cursor-pointer'>
      <Card className='bg-[#F3F3F3]'>
        <CardContent className='p-4 px-6'>
          <div>
            <p className='text-xl font-semibold'>Cloths</p>
            <p className='text-sm text-gray-500'>28 Items</p>
          </div>
          <div className='flex justify-center'>
            <Image
              src='/tshirt.webp'
              width={200}
              height={200}
              alt='Product Category'
            />
          </div>
          <Link href='' >
            <Button variant={'outline'} className='cursor-pointer rounded-full'>
              Shop Now
            </Button>
          </Link>
        </CardContent>
      </Card></Link>
    </section>
  );
};

export default Categories;
