import React, { useState, useEffect, useCallback } from 'react';
import getTime from '../utils/getTime';
import formatSkills from '../utils/formatSkills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown, faSpinner, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot, faDollarSign, faCalendarAlt, faBriefcase, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function JobCard() {
  const [favoriteJobs, setFavoriteJobs] = useState({});
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const navigate = useNavigate();

  const fetchJobs = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/v1/job', {
        withCredentials: true
      });
      
      setJobs(response.data.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setError(error.response?.data?.message || error.message || 'Failed to load jobs');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const handleRetry = () => {
    setRetryCount(count => count + 1);
    fetchJobs();
  };

  const toggleFavorite = (jobId, event) => {
    event.stopPropagation();
    setFavoriteJobs(prev => ({
      ...prev,
      [jobId]: !prev[jobId]
    }));
    
    // Here you could also implement API call to save favorites to user profile
    // saveJobToFavorites(jobId, !favoriteJobs[jobId]);
  };

  const navigateToJobDetail = (jobId) => {
    navigate(`/job/${jobId}`);
  };



  

  // Loading states
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <FontAwesomeIcon icon={faSpinner} spin className="text-green-600 text-4xl mb-4" />
        <p className="text-gray-600">Loading available jobs...</p>
      </div>
    );
  }

  // Error states
  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded shadow-sm">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500 mr-3" />
          <div>
            <p className="text-red-700 font-medium">Failed to load jobs</p>
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        </div>
        <button 
          onClick={handleRetry} 
          className="mt-3 bg-red-100 hover:bg-red-200 text-red-700 py-1 px-4 rounded text-sm transition duration-300"
        >
          Try Again
        </button>
      </div>
    );
  }

  // Empty state
  if (jobs.length === 0) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center my-8">
        <FontAwesomeIcon icon={faBriefcase} className="text-gray-400 text-5xl mb-4" />
        <h3 className="text-xl font-medium text-gray-700 mb-2">No Jobs Found</h3>
        <p className="text-gray-500 mb-6">There are no job listings available at the moment.</p>
        <button 
          onClick={handleRetry}
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg transition duration-300"
        >
          Refresh Listings
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        {jobs.map((job) => (
          <div 
            key={job._id} 
            onClick={() => navigateToJobDetail(job._id)}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white cursor-pointer"
          >
            <div className="p-5">
              {/* Header with job title and favorite button */}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="inline-flex items-center text-xs text-gray-500 mb-2">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
                    Posted {getTime(job.createdAt)}
                  </span>
                  <h3 className="text-xl md:text-2xl font-medium text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                    {job.title}
                  </h3>
                </div>
                <button 
                  onClick={(e) => toggleFavorite(job._id, e)}
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300 p-2"
                  aria-label={favoriteJobs[job._id] ? "Remove from favorites" : "Add to favorites"}
                >
                  <FontAwesomeIcon 
                    icon={favoriteJobs[job._id] ? faHeartSolid : faHeartRegular} 
                    className="h-5 w-5" 
                  />
                </button>
              </div>
              
              {/* Budget */}
              <div className="flex items-center text-green-700 font-medium mb-4">
                
                <span>Est. Budget: ksh{job.budget}</span>
              </div>
              
              {/* Description */}
              <div className="mb-4">
                <p className="text-gray-600 line-clamp-3">{job.description}</p>
              </div>
              
              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {formatSkills(job.skills).map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Footer info */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 pt-2 border-t border-gray-100">
                <div className="flex items-center">
                  {job.paymentVerified ? (
                    <span className="flex items-center text-green-600">
                      <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
                      Payment Verified
                    </span>
                  ) : (
                    <span className="text-gray-500">Payment Unverified</span>
                  )}
                </div>
                
                {job.location && (
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faLocationDot} className="mr-1" />
                    <span>{job.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobCard;