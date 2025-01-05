import React from 'react'
import JobCard from '../components/JobCard'
import Navbar from '../components/Navbar'
import Footer from './Footer'
function HomePage() {
  return (
    <div className='w-screen h-screen'>
        <Navbar/>

        <div className='w-10/12 mx-auto mt-10  flex flex-col '>
            <JobCard/>
           
            
        </div>
         <Footer/>  
    </div>
  )
}

export default HomePage