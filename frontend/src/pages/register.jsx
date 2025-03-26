import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
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
        const response= await axios.post('http://localhost:5000/api/v1/users/register', formData, 
          {withCredentials:true}
        )
        setSuccess(response.data.msg || 'Registration successfull')
        navigate('/home')
  
      } catch (error) {
        setError(error.response.data.message || 'Registration failed')
        console.log(error);
  
      }
    }
  

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      {error && <div className='bg-red text-white absolute top-4'>{error}</div>}
      <div className='w-5/12 h-fit space-y-4'>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
          <div className='flex w-full justify-between'>
            <div className='w-1/2'>
              <label htmlFor="name" className='block'>First name</label>
              <input 
                type="text" 
                required 
                onChange={(e)=>setFirstName(e.target.value)} 
                className='border-2 border-gray-200 w-11/12 h-10 rounded-lg'
              />
            </div>

            <div className='w-1/2'>
              <label htmlFor="name" className='block'>Last name</label>
              <input 
                type="text" 
                required 
                onChange={(e)=>setLastName(e.target.value)}  
                className='border-2 border-gray-200 w-full h-10 rounded-lg' 
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className='block'>Email</label>
            <input 
              type="text" 
              required 
              onChange={(e)=>setEmail(e.target.value)} 
              className='border-2 border-gray-200 w-full h-10 rounded-lg' 
            />
          </div>
        
          <div>
            <label htmlFor="phone" className='block'>Phone</label>
            <input 
              type="text" 
              required 
              onChange={(e)=>setPhone(e.target.value)}  
              className='border-2 border-gray-200 w-full h-10 rounded-lg'
            />
          </div>

          <div>
            <label htmlFor="Country" className='block'>Location</label>
            <input 
              type="text" 
              required 
              onChange={(e)=>setCountry(e.target.value)}  
              className='border-2 border-gray-200 w-full h-10 rounded-lg'
            />
          </div>

          <div>
            <label htmlFor="password" className='block'>Password</label>
            <input 
              type="password" 
              required 
              onChange={(e)=>setPassword(e.target.value)}  
              className='border-2 border-gray-200 w-full h-10 rounded-lg'
            />
          </div>

          <button 
            type="submit" 
            className='bg-green-600 text-white py-2 rounded-lg hover:bg-green-700'
          >
            Signup
          </button>
        </form>

        <div className='text-center mt-4'>
          <p>
            Already have an account? {' '}

            <Link to='/login' className='text-blue-500 hover:underline'> Login here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register