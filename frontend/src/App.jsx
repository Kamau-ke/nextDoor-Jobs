import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobApplications from './pages/JobApplication';
import Applications from './pages/Applications'
import Register from './pages/Register'
import LoginPage from './pages/Login'
import Logout from './pages/Logout'
import PostJob from './pages/PostJob';
import UserJobListing from './pages/userJobListing';
import LandingPage from './pages/LandingPage';

function App() {
  // const [user, setUser]=useState(null)

 


  
  return (
    <div className='h-screen w-screen bg-white overflow-x-hidden'>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/job/:jobId" element={<JobApplications/>} />
          <Route path='/logout' element={<Logout/>} />
          <Route path='/post-job' element={<PostJob/>}/>
          <Route path='/listings' element={<UserJobListing/>}/>
          <Route path='/applications' element={<Applications/>}/>
          <Route path='/landingpage' element={<LandingPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
