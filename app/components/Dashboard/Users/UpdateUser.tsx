import axios from 'axios'
import { PencilIcon } from 'lucide-react'
import React from 'react'

const UpdateUser = ({id} : {id : string}) => {
  const handleUpdateUser = async(id : string) =>{
    const response = await axios.patch(`/api/users/${id}`, {name : "New Data Comming"})
    console.log(response)

  }
  return (
    <PencilIcon onClick={()=>handleUpdateUser(id)} className='text-blue-600 hover:text-blue-800 mr-2 cursor-pointer' />
  )
}

export default UpdateUser