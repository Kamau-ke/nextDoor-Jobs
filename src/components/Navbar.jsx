import React from 'react'
import Button from './button'
import Profile from '../assets/images/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

// // import '../App.css'
function Navbar() {
  return (
    <div className='w-screen h-20 flex flex-1 items-center justify-between px-6'>

    {/* left side of navbar */}
    <div className='flex w-3/5'>

        <div className="mr-14">
            <h2 className='pl-6'>NextDoor-Jobs</h2>
        </div>


        <ul className='flex items-center space-x-4'>
            <li className='cursor-pointer'>Find Jobs <span className='text-gray-400'><FontAwesomeIcon icon={faAngleDown} className=' h-3'/></span></li>
            <li className='cursor-pointer'>Find Talents <span className='text-gray-400'><FontAwesomeIcon icon={faAngleDown} className=' h-3'/></span></li>
            <li className='cursor-pointer'>Manage Finances <span className='text-gray-400'><FontAwesomeIcon icon={faAngleDown} className=' h-3'/></span></li>
            <li className='cursor-pointer'>Messages</li>
        </ul>

    </div>
        
    {/* right side of navbar */}
    <div className=' flex  items-center space-x-4 w-2/5' >

        <div className='w-3/5 flex items-center justify-between border-gray-400 border-2  rounded-3xl '>
            <div className='flex items-center w-4/5'>
                
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='h-4 ml-2 text-gray-600' />
                    
               
                <form className=''>
                    <input type="text"  className='p-1 text-gray-600 w-full' placeholder='Search'/>
                </form>
            </div>

            <div className='flex items-center w-1/5'>
                <span className='text-gray-200 pl-0 pr-1 text-sm'>|</span>
                <div className=''>
                    <h4 className='p-1 cursor-pointer'>Jobs <span className='text-gray-400'><FontAwesomeIcon icon={faAngleDown} className=' h-3'/></span></h4>
                </div>
            </div>
           
          
       </div>

       <div className='relative h-5' >
            <FontAwesomeIcon icon={faBell} className=' h-full cursor-pointer'/>
            <span className='h-3 w-3 absolute -top-1 -right-1 bg-red-700 rounded-full '></span>
       </div>
       
       

     

            <div className='flex items-center'>
                <img src={Profile} alt="profile image" className='w-10 h-10 rounded-full'/>
                {/* <span>john doe</span> */}
            </div>
    </div>

       
    
    </div>
  )
}

export default Navbar

