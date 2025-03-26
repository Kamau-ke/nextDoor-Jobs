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
    <div className='flex w-2/4 relative'>
        <div className="mr-14">
            <h2 className='pl-6'>NextDoor-Jobs</h2>
        </div>
        <ul className='flex items-center space-x-4'>       
        <li className='relative group cursor-pointer '>Find Jobs</li>          
        <li className='cursor-pointer'>Messages</li>           
        </ul>
    </div>

  
        
    {/* right side of navbar */}
    <div className=' flex items-center border-b border-black w-1/5 '>
          <form className='w-full'>
            <input type="text"  className='p-2 text-black w-full  outline-none' placeholder='Search'/>
        </form>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='h-5 float-left text-black' />
    </div>    

    <div className=' w-1/5 space-x-2'>
        <button className='bg-green-900 px-4  py-2  text-white rounded '>Login</button>
        <button className='bg-green-300 px-4  py-2  text-black rounded '>signup</button>
      {/* <span>kamau</span>
        <button>logout</button> */}
    </div>  

    
</div>
   
  )
}

export default Navbar

