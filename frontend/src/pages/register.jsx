import React from 'react'
import Button from '../components/button'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function Register() {

 const [firstName, setFirstName]= useState('')
 const [lastName, setLastName]= useState('')
 const [email, setEmail]= useState('')
 const [phone, setPhone]= useState('')
 const [country, setCountry]= useState('')
 const [password, setPassword]= useState('')
 const [error, setError]=useState(null)
 const [success, setSuccess]=useState(null)

 const navigate=useNavigate()

  const handleSubmit=async (e)=>{
    e.preventDefault()
    const formData={
      firstName,
      lastName,
      email,
      phone,
      country,
      password
    }

    try {
      const response= await axios.post('http://localhost:5000/api/v1/users/register', formData, {
        headers: {'Content-Type': 'application/json'}
      })
      setSuccess(response.data.msg || 'Registration successfull')
      navigate('/home')
      
    } catch (error) {
      setError(error.response.data.message || 'Registration failed')
      console.log(error);
      
    }
  }


  return (
    <div className='w-screen h-screen  flex items-center justify-center  '>
      <div className='bg-red text-white '>{error}</div>
    <form action="" onSubmit={handleSubmit} className='flex flex-col w-5/12 h-fit space-y-4'>

    <div className='flex w-full justify-between'>
    <div className='w-1/2'>
    <label htmlFor="name" className='block'>First name</label>
    <input type="text" required onChange={(e)=>setFirstName(e.target.value)} className='border-2 border-gray-200 w-11/12 h-10 rounded-lg'/>
    </div>

    <div className=' w-1/2'>
    <label htmlFor="name" className='block'>last name</label>
    <input type="text" required onChange={(e)=>setLastName(e.target.value)}  className='border-2 border-gray-200 w-full h-10 rounded-lg' />
    </div>

    </div>
    
    <div>
      <label htmlFor="email" className='block'>Email</label>
      <input type="text" required onChange={(e)=>setEmail(e.target.value)} className='border-2 border-gray-200 w-full h-10 rounded-lg' />
    </div>
  
  
    <div>
      <label htmlFor="phone"className='block' >Phone</label>
      <input type="text" required onChange={(e)=>setPhone(e.target.value)}  className='border-2 border-gray-200 w-full h-10 rounded-lg'/>
    </div>


    <div>
      <label htmlFor="Country" className='block'>Location</label>
      <input type="text" required onChange={(e)=>setCountry(e.target.value)}  className='border-2 border-gray-200 w-full h-10 rounded-lg'/>
    </div>

    

    <div>
      <label htmlFor="password" className='block'>Password</label>
      <input type="password" required onChange={(e)=>setPassword(e.target.value)}  className='border-2 border-gray-200 w-full h-10 rounded-lg'/>
    </div>

    <Button text='submit'/>
   </form>
    </div>
  )
}

export default Register