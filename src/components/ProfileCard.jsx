import React from 'react'
import Profile from'../assets/images/profile.jpg'
function ProfileCard() {
  return (
    <div>
        <div>
            <img src={Profile} className='h-30'/>
        </div>
    </div>
  )
}

export default ProfileCard