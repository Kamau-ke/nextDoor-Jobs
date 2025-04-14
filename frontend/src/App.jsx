import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobApplication from './pages/JobApplication';
import Register from './pages/Register'
import LoginPage from './pages/Login'
import Logout from './pages/Logout'
import PostJob from './pages/PostJob';

function App() {
  // const [user, setUser]=useState(null)

 


  
  return (
    <div className='h-screen w-screen bg-white overflow-x-hidden'>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/job/:jobId" element={<JobApplication />} />
          <Route path='/logout' element={<Logout/>} />
          <Route path='/post-job' element={<PostJob/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
