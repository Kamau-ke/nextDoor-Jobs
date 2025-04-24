import React, {useState, useEffect, useCallback, useContext} from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import { AuthContext } from '../context/AuthContext';

function UserJobListing() {
  const {userId}=useContext(AuthContext)

  const [jobs, setJobs]=useState([])
  const [error, setError]=useState(null)
  const [loading, setLoading]=useState(true)

  // const fetchJobs=useCallback(async ()=>{
  //   setLoading(true)
  //     try {
  //         const res=await axios.get(`http://localhost:5000/api/v1/job/user/${userId}`, {withCredentials:true})
  //         setJobs(res.data.jobs)
          
  //     } catch (error) {
  //         setError(error)
  //     }finally{
  //       setLoading(false)
  //     }
  // }, [userId])

  useEffect( ()=>{

    const fetchJobs =async ()=>{
      try {
        const res=await axios.get(`http://localhost:5000/api/v1/job/user/${userId}`, {withCredentials:true})
        setJobs(res.data.jobs)
        console.log(res);
        
        
      } catch (error) {
        setError(error)
      }finally{

        setLoading(false)
      }
    }

    fetchJobs()
   
  },[userId])



  //updatedAt: "2025-04-16T06:42:07.248Z"
  
  
  

 
  

  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed navbar with proper z-index */}
      <header className="sticky top-0 z-10 w-full bg-white shadow-sm">
        <div className="container mx-auto">
          <Navbar />
        </div>
      </header>

      {/* Main content with padding to avoid navbar overlap */}
      <main className="flex-grow container mx-12 py-6 px-4 mt-16">
        {
          jobs.map(job=>(

            <div key={job._id} className="max-w-4xl mb-4">
            <div className="border border-gray-300 rounded-lg shadow-sm p-6 bg-white hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">{job.title}</h2>
                <div className="flex items-center space-x-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">2 Days</span>
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">KSH:{job.budget}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-600">{job.description}</p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Budget:</h3>
                <p className="text-gray-600">KSH: {job.budget}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Skills Required:</h3>
                <div className="flex flex-wrap gap-2">
  
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm">Automotive Repair</span>
                  
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                  Edit
                </button>
                <button className="py-2 px-4 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                  View Applications
                </button>
              </div>
            </div>
          </div>

          ))
        }
       
      </main>

      {/* Footer that spans full width */}
      <footer className="w-full bg-gray-100 mt-12">
        <div className="w-full  py-6 px-4">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default UserJobListing;