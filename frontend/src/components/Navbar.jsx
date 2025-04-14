import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown, faBars, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../context/AuthContext' // Adjust the import path as needed

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get user from AuthContext
  const { email } = useContext(AuthContext);
  console.log(email);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="w-full h-20 bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo and Navigation */}
        <div className="flex items-center">
          <Link to="/" className="font-bold text-xl text-green-800 mr-10">NextDoor-Jobs</Link>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li className="group relative">
              <Link to="/jobs" className="font-medium hover:text-green-700 transition duration-300">
                Find Jobs
              </Link>
            </li>
            <li>
              <Link to="/messages" className="font-medium hover:text-green-700 transition duration-300">
                Messages
              </Link>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center border-b border-gray-300 focus-within:border-green-700 transition duration-300 w-1/4">
          <form onSubmit={handleSearch} className="w-full flex items-center">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 w-full outline-none text-gray-700" 
              placeholder="Search jobs..."
              aria-label="Search jobs"
            />
            <button type="submit" aria-label="Search">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="h-5 w-5 text-gray-500 hover:text-green-700" />
            </button>
          </form>
        </div>

        {/* Auth Buttons or User Info */}
        <div className="hidden md:flex space-x-4">
          {!email ? (
            // Show these buttons when email is not logged in
            <>
              <Link to="/login" className="bg-green-800 px-5 py-2 text-white rounded-md hover:bg-green-900 transition duration-300">
                Login
              </Link>
              <Link to="/signup" className="bg-green-200 px-5 py-2 text-green-900 font-medium rounded-md hover:bg-green-300 transition duration-300">
                Sign Up
              </Link>
            </>
          ) : (
            // Show these items when email is logged in
            <div className="flex items-center space-x-4">
              <Link to="/post-job" className="bg-green-600 px-5 py-2 text-white rounded-md hover:bg-green-700 transition duration-300 flex items-center">
                <FontAwesomeIcon icon={faPlus} className="mr-2 h-4 w-4" />
                Post Job
              </Link>
              {/* <FontAwesomeIcon icon={faBell} className="h-5 w-5 text-gray-600 hover:text-green-700 cursor-pointer" /> */}
              <div className="flex items-center space-x-2 cursor-pointer group relative">
                <img src="/path-to-profile-image.jpg" alt="Profile" className="h-8 w-8 rounded-full object-cover bg-gray-200" />
                <span className="text-gray-700">{email || 'email'}</span>
                <FontAwesomeIcon icon={faAngleDown} className="h-3 w-3 text-gray-500" />
                
                <div className="absolute right-0 mt-16 w-48 bg-white shadow-lg rounded-md invisible group-hover:visible transition duration-300 opacity-0 group-hover:opacity-100">
                  {/* <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                  <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</Link> */}
                  <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">Logout</button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="px-4 py-3">
            <form onSubmit={handleSearch} className="flex items-center border-b border-gray-300 mb-4">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="p-2 w-full outline-none text-gray-700" 
                placeholder="Search jobs..."
              />
              <button type="submit" aria-label="Search">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="h-5 w-5 text-gray-500 mr-2" />
              </button>
            </form>
            
            <ul className="space-y-4 mb-4">
              <li>
                <Link to="/jobs" className="block font-medium">Find Jobs</Link>
              </li>
              <li>
                <Link to="/messages" className="block font-medium">Messages</Link>
              </li>
              {user && (
                <li>
                  <Link to="/post-job" className="block font-medium text-green-700">Post Job</Link>
                </li>
              )}
            </ul>
            
            {!user ? (
              <div className="flex flex-col space-y-3">
                <Link to="/login" className="bg-green-800 px-5 py-2 text-white rounded-md text-center">
                  Login
                </Link>
                <Link to="/signup" className="bg-green-200 px-5 py-2 text-green-900 font-medium rounded-md text-center">
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                <div className="flex items-center">
                  <img src="/path-to-profile-image.jpg" alt="Profile" className="h-8 w-8 rounded-full object-cover bg-gray-200 mr-2" />
                  <span className="text-gray-700">{user?.email || 'User'}</span>
                </div>
                <button className="text-red-600 font-medium">Logout</button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar