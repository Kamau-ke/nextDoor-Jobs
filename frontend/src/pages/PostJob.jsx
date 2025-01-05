import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import axios from 'axios'
function PostJob() {

  const [title, setTitle]=useState('')
  const [description, setDescription]=useState('')
  const [position, setPosition]=useState('')
  const [skills, setSkills]=useState('')
  const [country, setCountry]=useState('')
  const [budget, setBudget]=useState('')

  const [success, setSuccess]=useState(null)
  const [error, setError]=useState(null)

  const handleSubmit=async (e)=>{
    e.preventDefault()

    const formData={
      title,
      description,
      position,
      skills,
      country,
      budget
    }


    try {
     const response=await axios.post('http://localhost:5000/api/v1/job', formData)
     setSuccess(response || 'Job posted successfuly')
     console.log(response);
     
    } catch (error) {
      setError(error)
      console.log(error);
      
    }
    
    
  }

  return (
    <div>
      <Navbar/>
      <div className='w-screen h-screen  flex justify-center'>
      <form action="" onSubmit={handleSubmit} className='w-3/4 flex flex-col  mt-12 '>
        <label htmlFor="">Name of your job?</label>
        <input type="text" onChange={e=>{setTitle(e.target.value)}} className='border border-slate-500 p-2 mb-5 w-1/4'/>

        <label htmlFor="">Give a blief description</label>
        <textarea onChange={e=>{setDescription(e.target.value)}}  className='border border-slate-500 p-8 mb-5 w-1/2 '/>

        <label htmlFor="">How much are you willing to pay?</label>
        <input type="text" onChange={e=>{setBudget(e.target.value)}}  className='border border-slate-500 p-2 mb-5 w-1/4'/>

        <label htmlFor="">Position <span className='text-slate-600'>[ optional ]</span></label>
        <input type="text" onChange={e=>{setPosition(e.target.value)}}  className='border border-slate-500 p-2 mb-5 w-1/4'/>

        <label htmlFor="">Which skills are required?</label>
        <textarea onChange={e=>{setSkills(e.target.value)}}   className='border border-slate-500 p-8 mb-5 w-1/2'/>

        <label htmlFor="">Country <span className='text-slate-600'>[ optional ]</span></label>
        <input type="text" onChange={e=>{setCountry(e.target.value)}}  className='border border-slate-500 p-2 mb-5 w-1/4'/>


        <button type='submit' className='p-2 bg-green-500 text-white rounded w-1/2'>Post Job</button>
      </form> 
      </div>
    </div>
  )
}

export default PostJob