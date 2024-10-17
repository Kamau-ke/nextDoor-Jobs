import React from 'react'
import Profile from'../assets/images/profile.jpg'
function ProfileCard() {
  return (
    <div className='bg-slate-50 w-1/5 h-56 rounded-3xl'>
        <div className=' p-8 flex space-x-2 '>
            <img src={Profile} className='h-16 w-16 rounded-full'/>
            <div className='mt-2'>
                <h3 className='underline bold'>Kamau Wamkuu.</h3>
                <h2>Full Stack Developer ...</h2>
            </div>
           
        </div>
        <a href="#" className='underline text-green-600 pl-8'>complete your profile</a> 

        <div className="relative h-1 w-9/12 bg-gray-300 rounded ml-8 mt-1">
          <div className="h-full w-[85%] bg-gray-500 rounded"></div>
          <span className="absolute top-3 left-[112%] transform -translate-x-1/2 -translate-y-full text-gray-700 text-sm font-semibold">85%</span>
      </div>

    </div>
  )
}

export default ProfileCard