import React, { useState } from 'react'
import JobCard from '../components/JobCard'
import Navbar from '../components/Navbar'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faSort, faSearch } from '@fortawesome/free-solid-svg-icons'

function HomePage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filterOptions = [
    { id: 'all', label: 'All Jobs' },
    { id: 'recent', label: 'Recent' },
    { id: 'remote', label: 'Remote' },
    { id: 'fulltime', label: 'Full-Time' },
    { id: 'contract', label: 'Contract' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar - fixed at top */}
      <Navbar />
      
      {/* Main content - with padding for fixed navbar */}
      <main className="flex-grow pt-24 pb-16 bg-gray-50">
        {/* Hero section */}
        <section className="bg-green-800 text-white py-12 mb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Your Next Door Opportunity</h1>
              <p className="text-lg md:text-xl opacity-90 mb-6">
                Connect with local employers and discover jobs in your neighborhood
              </p>
              
              {/* Search box */}
              <div className="relative max-w-2xl">
                <input 
                  type="text" 
                  placeholder="Search jobs, skills, or companies..." 
                  className="w-full py-3 px-5 pr-12 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-700">
                  <FontAwesomeIcon icon={faSearch} className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Job listings section */}
        <section className="container mx-auto px-4">
          {/* Filters bar */}
          <div className="mb-6 flex flex-wrap justify-between items-center">
            <div className="flex items-center mb-2 md:mb-0">
              <h2 className="text-xl font-semibold text-gray-800 mr-4">Available Jobs</h2>
              <div className="hidden md:flex space-x-1">
                {filterOptions.map(option => (
                  <button
                    key={option.id}
                    className={`px-4 py-2 text-sm rounded-full transition duration-200 ${
                      activeFilter === option.id 
                        ? 'bg-green-600 text-white' 
                        : 'bg-white hover:bg-gray-100 text-gray-700'
                    }`}
                    onClick={() => setActiveFilter(option.id)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              
              {/* Mobile filters toggle */}
              <button 
                className="md:hidden flex items-center bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-700"
                onClick={() => setShowFilters(!showFilters)}
              >
                <FontAwesomeIcon icon={faFilter} className="mr-2" />
                Filter
              </button>
            </div>
            
            {/* Sort options */}
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">Sort by:</span>
              <select className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500">
                <option value="recent">Most Recent</option>
                <option value="salary">Highest Salary</option>
                <option value="relevance">Relevance</option>
              </select>
            </div>
          </div>
          
          {/* Mobile filters (collapsible) */}
          {showFilters && (
            <div className="md:hidden bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-wrap gap-2">
                {filterOptions.map(option => (
                  <button
                    key={option.id}
                    className={`px-4 py-2 text-sm rounded-full transition duration-200 ${
                      activeFilter === option.id 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                    onClick={() => {
                      setActiveFilter(option.id);
                      setShowFilters(false);
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Job cards */}
          <JobCard />
          
          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <nav className="inline-flex rounded-md shadow-sm">
              <button className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-l-md">
                Previous
              </button>
              <button className="py-2 px-4 border-t border-b border-gray-300 bg-green-600 text-sm font-medium text-white">
                1
              </button>
              <button className="py-2 px-4 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="py-2 px-4 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-r-md">
                Next
              </button>
            </nav>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default HomePage