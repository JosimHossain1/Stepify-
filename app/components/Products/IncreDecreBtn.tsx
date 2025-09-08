import { Minus, Plus } from 'lucide-react'
import React from 'react'

const IncreDecreBtn = () => {
  return (
           <div className='flex items-center gap-3 mt-auto'>
          <button
            type='button'
            className='flex items-center justify-center w-[18px] h-[18px] cursor-pointer bg-slate-400 outline-none rounded-full'
          >
            <Minus className='text-white w-3' />
          </button>
          <span className='font-semibold text-base leading-[18px]'>1</span>
          <button
            type='button'
            className='flex items-center justify-center w-[18px] h-[18px] cursor-pointer bg-slate-800 outline-none rounded-full'
          >
            <Plus className='text-white w-3' />
          </button>
        </div>
  )
}

export default IncreDecreBtn