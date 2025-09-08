
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowBigRight } from 'lucide-react';

const HeroContent = () => {

  return (
    <main className='h-fit  backdrop-blur-lg bg-gradient-to-b from-[#D1DCDD] to-[#EFF0DB]'>
      <div className='w-[83%] grid grid-cols-12 gap-6 mx-auto py-10 '>
        {/* Left / Hero Section */}
        <section className='col-span-8'>
          <Card className='bg-gradient-to-b from-[#F4F7F4] to-[#ECFBF6] '>
            <CardContent className='flex flex-col md:flex-row items-center gap-6 p-6'>
              <div className='flex-1'>
                <h1 className='text-4xl font-bold leading-tight'>
                  Sequoia Inspiring Musico.
                </h1>
                <p className='text-gray-500 mt-2'>
                  Making your dream music come true with Sequoia’s clear sounds.
                </p>
                <Button className='mt-4'>View All Products →</Button>
              </div>
              <div className='flex-1'>
                <Image
                  src='/headphone.webp'
                  width={400}
                  height={400}
                  alt='Headphone'
                  className='w-full'
                />
              </div>
            </CardContent>
          </Card>

        
        </section>

        {/* Right Sidebar */}
        <aside className='col-span-4 space-y-6'>
          <Card className='bg-gradient-to-r from-[#ecf0fc] to-[#ececec]'>
            <CardContent className='px-4 py-0'>
              <h2 className='font-semibold mb-3'>Available Colors</h2>
              <div className='flex gap-2'>
                <div className='w-6 h-6 rounded-full bg-[#4A3A98]'></div>
                <div className='w-6 h-6 rounded-full bg-red-500'></div>
                <div className='w-6 h-6 rounded-full bg-green-500'></div>
                <div className='w-6 h-6 rounded-full bg-yellow-500'></div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-4'>
              <Image
                src='/headphone.webp'
                width={160}
                height={160}
                alt='Earbuds'
                className='rounded-lg mb-3 flex mx-auto'
              />
              <div className='flex justify-between'>
                <ArrowBigRight />
                <h3 className='font-medium'>New Gen X-Bud</h3>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </main>
  );
};

export default HeroContent;
