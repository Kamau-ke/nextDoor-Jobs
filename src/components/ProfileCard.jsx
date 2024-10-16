import React from 'react'
import Profile from'../assets/images/profile.jpg'
function ProfileCard() {
  return (
    <div className='bg-slate-50 w-1/4 h-56 rounded-3xl'>
        <div className='flex space-x-2 m-6'>
            <img src={Profile} className='h-16 w-16 rounded-full'/>
            <div className='mt-2'>
                <h3 className='underline'>Kamau Wamkuu.</h3>
                <h2>Full Stack Developer...</h2>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard