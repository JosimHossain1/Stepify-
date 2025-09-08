import { Trash } from 'lucide-react'
import React from 'react'

const RemoveItem = () => {
  return (
    <div>
      <Trash className='w-5 h-5 cursor-pointer hover:text-red-600 inline-block' />
    </div>
  )
}

export default RemoveItem