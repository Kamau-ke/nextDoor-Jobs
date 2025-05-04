import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import getTime from '../utils/getTime'
import formatSkills from '../utils/formatSkills';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import { AuthContext } from '../context/AuthContext';

function UserJobListing() {
  const navigate=useNavigate()
  const {userId} = useContext(AuthContext)

  const [jobs, setJobs] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  
  // State for editing
  const [isEditing, setIsEditing] = useState(false)
  const [editJobId, setEditJobId] = useState(null)
  const [editFormData, setEditFormData] = useState({
    title: '',
    description: '',
    budget: '',
    skills: []
  })

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/v1/job/user/${userId}`, {withCredentials: true})
        setJobs(res.data.jobs)
        console.log(res);
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [userId])

  // Handle opening the edit form
  const handleEditClick = (job) => {
    setIsEditing(true)
    setEditJobId(job._id)
    
    // Handle skills whether it's an array or string
    const skillsString = Array.isArray(job.skills) 
      ? job.skills.join(', ')
      : typeof job.skills === 'string' 
        ? job.skills 
        : '';
    
    setEditFormData({
      title: job.title || '',
      description: job.description || '',
      budget: job.budget || '',
      skills: skillsString
    })
    
    console.log("Editing job:", job)
    console.log("Form data set:", {
      title: job.title || '',
      description: job.description || '',
      budget: job.budget || '',
      skills: skillsString
    })
  }

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEditFormData({
      ...editFormData,
      [name]: value
    })
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Prepare data for API
    const skillsArray = editFormData.skills
      ? editFormData.skills.split(',').map(skill => skill.trim()).filter(skill => skill !== '')
      : [];
      
    const updatedJobData = {
      ...editFormData,
      skills: skillsArray
    }
    
    try {
      console.log("Submitting updated job data:", updatedJobData)
      
      const res = await axios.put(
        `http://localhost:5000/api/v1/job/${editJobId}`, 
        updatedJobData, 
        {withCredentials: true}
      )
      
      console.log("API response:", res.data)
      
      // Update jobs state with edited job
      setJobs(jobs.map(job => 
        job._id === editJobId ? res.data.job : job
      ))
      
      // Close the edit form
      setIsEditing(false)
      setEditJobId(null)
      
    } catch (err) {
      setError(err)
      console.error("Error updating job:", err)
    }
  }

  // Cancel editing
  const handleCancel = () => {
    setIsEditing(false)
    setEditJobId(null)
  }

  // Handle job deletion
  const handleDeleteJob = async (jobId) => {
    // Show confirmation dialog
    if (window.confirm("Are you sure you want to delete this job? This action cannot be undone.")) {
      try {
        // Make DELETE request to API
        await axios.delete(`http://localhost:5000/api/v1/job/${jobId}`, {withCredentials: true})
        
        // Remove job from local state
        setJobs(jobs.filter(job => job._id !== jobId))
      } catch (err) {
        setError(err)
        console.error("Error deleting job:", err)
      }
    }
  }

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
        {loading ? (
          <div className="text-center py-10">
            <p className="text-lg text-gray-600">Loading your job listings...</p>
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-lg text-red-600">Error loading jobs. Please try again later.</p>
          </div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-lg text-gray-600">You haven't posted any jobs yet.</p>
          </div>
        ) : (
          jobs.map(job => (
            <div key={job._id} className="max-w-4xl mb-4">
              {isEditing && editJobId === job._id ? (
                // Edit Form
                <div className="border border-blue-300 rounded-lg shadow-sm p-6 bg-white">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Edit Job</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="title">
                        Job Title
                      </label>
                      <input
                        id="title"
                        name="title"
                        type="text"
                        value={editFormData.title}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="description">
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={editFormData.description}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="budget">
                        Budget (KSH)
                      </label>
                      <input
                        id="budget"
                        name="budget"
                        type="number"
                        value={editFormData.budget}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="skills">
                        Skills Required (comma separated)
                      </label>
                      <input
                        id="skills"
                        name="skills"
                        type="text"
                        value={editFormData.skills}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    
                    <div className="flex space-x-3">
                      <button 
                        type="submit"
                        className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                      >
                        Save Changes
                      </button>
                      <button 
                        type="button"
                        onClick={handleCancel}
                        className="py-2 px-4 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                // Normal Job Display
                <div className="border border-gray-300 rounded-lg shadow-sm p-6 bg-white hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-semibold text-gray-800">{job.title}</h2>
                    <div className="flex items-center space-x-2">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">{getTime(job.createdAt)}</span>
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
                      {formatSkills(job.skills).map((skill, index) => (
                        <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => handleEditClick(job)}
                      className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    >
                      Edit
                    </button>
                    <button onClick={()=>navigate('/applications')} className="py-2 px-4 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                      View Applications
                    </button>
                    <button 
                      onClick={() => handleDeleteJob(job._id)}
                      className="py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </main>

      {/* Footer that spans full width */}
      <footer className="w-full bg-gray-100 mt-12">
        <div className="w-full py-6 px-4">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default UserJobListing;