import React from 'react'
import Button from './button'
import Profile from '../assets/images/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

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

       <div className='flex flex-1 items-center border-gray-400 border-2  w-8 rounded-3xl '>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='h-5 ml-1 text-gray-700' />
            <form className='flex-grow ml-2 '>
                <input type="text"  className='p-1 text-gray-600' placeholder='Search'/>
            </form>

            <h1 className='text-gray-200 pr-2 text-sm'>|</h1>

            <div className='mr-4'>
                <h4 className='p-1'>Jobs</h4>
            </div>
          
       </div>
       
       <FontAwesomeIcon icon={faBell} className='ml-4 h-5 cursor-pointer'/>

     

            <div className='flex flex-1'>
                <img src={Profile} alt="profile image" className='w-10 h-10 rounded-full'/>
                {/* <span>john doe</span> */}
            </div>

           
       
       
    
    </div>
  )
}

export default Navbar