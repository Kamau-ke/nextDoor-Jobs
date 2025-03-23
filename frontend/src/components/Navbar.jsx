import React from 'react'
import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom'
import Profile from '../assets/images/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import HomePage from '../pages/HomePage'

// // import '../App.css'
function Navbar() {
  return (  
    <div className='w-screen h-20 flex flex-1 items-center justify-between px-6'>

    {/* left side of navbar */}
    <div className='flex w-3/5 relative'>
        <div className="mr-14">
            <h2 className='pl-6'>NextDoor-Jobs</h2>
        </div>
        <ul className='flex items-center space-x-4'>       
        <li className='relative group cursor-pointer '>Find Jobs</li>          
        <li className='cursor-pointer'>Messages</li>           
        </ul>
    </div>

  
        
    {/* right side of navbar */}
    <div className=' flex items-center border-b border-black w-96 '>
          <form className=''>
            <input type="text"  className='p-2 text-black w-full outline-none' placeholder='Search'/>
        </form>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='h-4 ml-2 text-black' />
    </div>    

    <div className='w-96 '>
      <span>kamau</span>
    </div>   
    </div>
   
  )
}

export default Navbar

