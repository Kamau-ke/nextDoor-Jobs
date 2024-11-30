import React from 'react'
import ProfileCard from './ProfileCard'
import JobCard from './JobCard'
function MainSection() {
  return (
    <div className='w-10/12 mx-auto mt-10 '>
      <div className='flex space-x-20'>
      <JobCard/>
      <ProfileCard/>
      </div>
      
    </div>
  )
}

export default MainSection