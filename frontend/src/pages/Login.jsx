import React from 'react'
import Button from '../components/button'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    const [error, setError]=useState(null)
    const [success, setSuccess]=useState(null)
    const navigate=useNavigate()

  const handleSubmit=async (e)=>{
    e.preventDefault()
    const formData={
      email, 
      password
    }


    try {
      const response=await axios.post('http://localhost:5000/api/v1/users/login', formData,
       {withCredentials:true})
      setSuccess(response.data.msg || 'Login successfull')
      console.log(response);
      
      navigate('/home')
    } catch (error) {
      setError(error || 'Login failed')
    }
   


  }

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
          
        <form action="" onSubmit={handleSubmit} className='flex flex-col items-center w-1/4 h-3/4 border border-gray-500 rounded-xl '>
            <h2 className='p-4 font-semibold text-2xl mb-4' >Login to your Account</h2>
            {/* error */}
            <h3 className='p-2 w-3/4  bg-red-500 border rounded-xl text-white text-center mb-8 hidden'>Invalid credentials</h3>
    
            <div className='flex flex-col space-y-8  w-3/4'>
              <div>
                <label htmlFor="" >Email</label>
                <input type="text" onChange={e=>setEmail(e.target.value)}  className='mt-1 p-2 bg-slate-100 w-full rounded-lg' required/>
              </div>

              <div>
                <label htmlFor="">Password</label>
                <input type="password" onChange={e=>setPassword(e.target.value)} className='mt-1 p-2 bg-slate-100 w-full rounded-lg' required/>
              </div>
              
            </div>
            
            <div className='mt-4'>
              <button className='bg-green-700 p-2 w-60 rounded-xl mb-4 font-semibold text-white block'>Login</button>
              <button className='w-60 p-2 border border-green-700 rounded-xl'>sign up</button>
            </div>
        </form>
    </div>
  )
}

export default Login