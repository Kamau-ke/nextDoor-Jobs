// import { useEffect, useState } from 'react'
// import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Register from'./pages/register'
import JobCard from './components/JobCard'

import JobApplication from './pages/JobApplication'
import Login from './pages/login'
import PostJob from './pages/PostJob'
import AboutJob from './pages/AboutJob'
import HomePage from './pages/HomePage'

function App() {
  

  return (
    <div className='h-screen w-screen bg-white overflow-x-hidden'>
      <Router>
      <Routes>
      
        <Route path='/' element={<HomePage/>} />
        <Route path='/job/:id' element={JobApplication} />
        
      </Routes>
      </Router>
    </div>
  );
}

export default App
