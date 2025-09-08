import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Heart, ShoppingBag, Search } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function Navbar() {
  return (
    <header
      className='flex w-[80%] mx-auto mt-4  items-center justify-between mb-8 rounded-full shadow border border-gray-500 py-2 px-8 backdrop-blur-2xl
'
    >
      <div className='text-2xl font-bold'>
        <Link href={'/'}>Stepify.</Link>
      </div>

      <div className='flex items-center gap-2'>
        <Input placeholder='Search products...' className='w-72' />
        <Button size='icon' variant='outline'>
          <Search />
        </Button>
      </div>

      <div className='flex items-center gap-4'>
        <Button size='icon' variant='ghost'>
          <div className='relative inline-flex'>
            <button
              className='rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              type='button'
            >
              <Link href={'/cart'}>
            <ShoppingBag />
          </Link>
            </button>
            <span className='absolute top-0.5 right-0.5 grid min-h-[24px] min-w-[24px] translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-red-600 py-1 px-1 text-xs text-white'>
              5
            </span>
          </div>

          
        </Button>
        <Button size='icon' variant='ghost'>
          <Heart />
        </Button>
        <Avatar>
          <AvatarImage src='https://i.pravatar.cc/40' />
        </Avatar>
      </div>
    </header>
  );
}
