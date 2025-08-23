import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Heart, ShoppingBag, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <header
      className='flex w-[80%] mx-auto mt-4  items-center justify-between mb-8 rounded-full shadow border border-gray-500 py-2 px-8 backdrop-blur-2xl
'
    >
      <div className='text-2xl font-bold'>Stepify.</div>

      <div className='flex items-center gap-2'>
        <Input placeholder='Search products...' className='w-72' />
        <Button size='icon' variant='outline'>
          <Search />
        </Button>
      </div>

      <div className='flex items-center gap-4'>
        <Button size='icon' variant='ghost'>
          <ShoppingBag />
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
