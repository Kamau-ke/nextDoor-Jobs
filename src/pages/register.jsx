import React from 'react'
import Button from '../components/button'

function Register() {
  return (
    <div className='w-screen h-screen  flex items-center justify-center  '>
    <form action="" className='flex flex-col w-5/12 h-fit space-y-4'>

    <div className='flex w-full justify-between'>
    <div className='w-1/2'>
    <label htmlFor="name" className='block'>First name</label>
    <input type="text" className='border-2 border-gray-200 w-11/12 h-10 rounded-lg'/>
    </div>

    <div className=' w-1/2'>
    <label htmlFor="name" className='block'>last name</label>
    <input type="text" className='border-2 border-gray-200 w-full h-10 rounded-lg' />
    </div>

    </div>
    
    <div>
      <label htmlFor="email" className='block'>Email</label>
      <input type="text" className='border-2 border-gray-200 w-full h-10 rounded-lg' />
    </div>
  
  
    <div>
      <label htmlFor="phone"className='block' >Phone</label>
      <input type="text" className='border-2 border-gray-200 w-full h-10 rounded-lg'/>
    </div>


    <div>
      <label htmlFor="Country" className='block'>Location</label>
      <input type="text" className='border-2 border-gray-200 w-full h-10 rounded-lg'/>
    </div>

    

    <div>
      <label htmlFor="password" className='block'>Password</label>
      <input type="password" className='border-2 border-gray-200 w-full h-10 rounded-lg'/>
    </div>

    <Button text='submit' />
   </form>
    </div>
  )
}

export default Register