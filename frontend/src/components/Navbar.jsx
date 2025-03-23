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
        
        
        <li className='relative group cursor-pointer '>Find Jobs <span className='text-gray-400'><FontAwesomeIcon icon={faAngleDown} className=' h-3'/></span>
            <div className='hidden group-hover:block absolute top-full left-0 mt-2 p-4 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-20'>
                <div className='absolute -top-2 left-1/4 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white'></div>
                <p className='text-gray-700'>Explore job opportunities</p>
                <p className='text-gray-600 text-sm'>Browse open positions by industry</p>
            </div>
        </li>
          
            <li className='cursor-pointer'>Messages</li>
           
        </ul>

    </div>

  
        
    {/* right side of navbar */}
    <div className=' flex  items-center space-x-4 w-2/5' >

        <div className='w-3/5 flex items-center justify-between border-gray-400 border-2  rounded-3xl lg:flex sm:hidden'>
            <div className='flex items-center w-4/5'>
                
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='h-4 ml-2 text-gray-600' />
                    
               
                <form className=''>
                    <input type="text"  className='p-1 text-gray-600 w-full' placeholder='Search'/>
                </form>
            </div>
           
          
       </div>

       <span>kamau</span>

       <div className='relative h-5' >
            <FontAwesomeIcon icon={faBell} className=' h-full cursor-pointer'/>
            <span className='h-3 w-3 absolute -top-1 -right-1 bg-red-700 rounded-full '></span>
       </div>
       
       

     

        

           
    </div>

       
    
    </div>

    
    
   
  )
}

export default Navbar

