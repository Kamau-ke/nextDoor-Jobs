import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
  const navigate=useNavigate()

  useEffect(()=>{
    const logoutUser=async()=>{
      try {
        const res=await axios.get('http://localhost:5000/api/v1/users/logout', {
          withCredentials:true
        })

        console.log(res);

        navigate('/login')
      } catch (error) {
        navigate('/home')
      }
        
    }

    logoutUser()
    
    
  },[navigate])
  return (
    <div>
      <p>Logging out...</p>
    </div>
  )
}

export default Logout