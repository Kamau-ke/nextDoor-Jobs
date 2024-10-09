import React from 'react'
import Button from './button'
import Profile from '../assets/images/profile.jpg'
// import '../App.css'
function Navbar() {
  return (
    <div className='w-screen h-20 flex justify-evenly items-center'>

        <div className="flex-1 pl-8">
            <h2>NextDoor-Jobs</h2>
        </div>

        <ul className='flex flex-1 '>
            <li className='cursor-pointer'>Find Jobs</li>
            <li className='pl-3 cursor-pointer'>Find Talents</li>
        </ul>

       <div className='flex flex-1 border-black border-2  w-8 rounded-xl '>
            <form className='flex-grow ml-2 '>
                <input type="text"  className='' placeholder='Search'/>
            </form>
            <div className='mr-4'>
                <h4>Jobs</h4>
            </div>
       </div>

        <div className='Nav-buttons'>

            <div>
                <img src={Profile} alt="profile image" className='w-10 h-10 rounded-full'/>
                {/* <span>john doe</span> */}
            </div>

            {/* <div className="buttons">
                <Button text='login'/>
                <Button text='sign up'/>
            </div> */}
        </div>
       
       
    
    </div>
  )
}

export default Navbar