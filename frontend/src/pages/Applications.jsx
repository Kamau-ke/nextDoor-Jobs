import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from './Footer';

function JobApplications() {
  const navigate = useNavigate();
  
  // Placeholder function for navigation
  const goBackToJobs = () => {
    navigate('/listing');
  };
  
  // Placeholder function for viewing application details
  const handleViewApplication = (application) => {
    // Implementation placeholder
  };
  
  // Placeholder function for closing application details
  const closeApplicationDetails = () => {
    // Implementation placeholder
  };
  
  // Placeholder function for updating application status
  const updateApplicationStatus = (applicationId, newStatus) => {
    // Implementation placeholder
  };
  
  // Placeholder function for getting status colors
  const getStatusColor = (status) => {
    // Implementation placeholder
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed navbar with proper z-index */}
      <header className="sticky top-0 z-10 w-full bg-white shadow-sm">
        <div className="container mx-auto">
          <Navbar />
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto py-6 px-4 mt-16">
        <div>
          {/* Job Info Header */}
          <div className="mb-6">
            <button 
              onClick={goBackToJobs}
              className="mb-4 flex items-center text-blue-600 hover:text-blue-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to My Jobs
            </button>
            
            <h1 className="text-2xl font-bold text-gray-800">Job Applications</h1>
            <p className="text-gray-600 mt-1">Applications: 0</p>
          </div>
          
          {/* Application Details View Template */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 hidden">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-xl font-semibold">Application Details</h2>
              <button 
                onClick={closeApplicationDetails}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Applicant Information</h3>
                <div className="space-y-3">
                  <p><span className="font-medium">Name:</span> Applicant Name</p>
                  <p><span className="font-medium">Email:</span> applicant@example.com</p>
                  <p><span className="font-medium">Phone:</span> (123) 456-7890</p>
                  <p><span className="font-medium">Applied:</span> 4/27/2025</p>
                  <p>
                    <span className="font-medium">Status:</span> 
                    <span className="ml-2 px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                      Pending
                    </span>
                  </p>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-3">Update Status</h3>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-md text-sm hover:bg-yellow-200">
                      Mark Pending
                    </button>
                    <button className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm hover:bg-blue-200">
                      Interviewing
                    </button>
                    <button className="px-3 py-1 bg-green-100 text-green-800 rounded-md text-sm hover:bg-green-200">
                      Accept
                    </button>
                    <button className="px-3 py-1 bg-red-100 text-red-800 rounded-md text-sm hover:bg-red-200">
                      Reject
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Cover Letter</h3>
                <div className="bg-gray-50 p-4 rounded-md h-64 overflow-y-auto">
                  <p className="whitespace-pre-wrap">Cover letter content will appear here.</p>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-3">Resume</h3>
                  <a 
                    href="#"
                    className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <button
                onClick={closeApplicationDetails}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200"
              >
                Back to All Applications
              </button>
            </div>
          </div>
          
          {/* Applications List Template */}
          <div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicant</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applied Date</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">Applicant Name</div>
                          <div className="text-sm text-gray-500">applicant@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">4/27/2025</div>
                      <div className="text-sm text-gray-500">12:00 PM</div>
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleViewApplication({})}
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Empty State Template */}
          <div className="text-center py-10 bg-white rounded-lg shadow-sm hidden">
            <p className="text-lg text-gray-600">No applications have been submitted for this job yet.</p>
          </div>
          
          {/* Loading State Template */}
          <div className="text-center py-10 hidden">
            <p className="text-lg text-gray-600">Loading applications...</p>
          </div>
          
          {/* Error State Template */}
          <div className="text-center py-10 hidden">
            <p className="text-lg text-red-600">Error loading applications. Please try again later.</p>
            <button 
              onClick={goBackToJobs}
              className="mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-medium"
            >
              Back to My Jobs
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-100 mt-12">
        <div className="w-full py-6 px-4">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default JobApplications;