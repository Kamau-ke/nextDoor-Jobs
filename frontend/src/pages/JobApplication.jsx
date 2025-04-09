import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import Button from '../components/button'

function JobApplication() {
    const { jobId } = useParams()
    
    const [job, setJob] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
               const response = await axios.get(`http://localhost:5000/api/v1/job/${jobId}`, {
                withCredentials: true
               }) 
    
               setJob(response.data.job[0])
               setLoading(false)
            } catch (error) { 
                setError(error.message)
                setLoading(false)
            }
        }

        fetchData()
    }, [jobId])

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-lg">Loading job details...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-lg text-red-500">Error: {error}</p>
            </div>
        )
    }
    
    return (
        <div className="overflow-x-hidden px-4 md:px-6 lg:px-8">
            <div className="w-full max-w-4xl mx-auto mt-8 md:mt-16">
                <h1 className="font-semibold text-2xl md:text-3xl pb-6 md:pb-10">Submit a proposal</h1>

                {/* About job */}
                <div className="border border-gray-300 rounded-xl md:rounded-3xl p-3 md:p-4">   
                    <h2 className="font-medium text-xl md:text-2xl pb-4 md:pb-8">Job details</h2> 
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-3/4">
                            <h1 className="font-medium text-base md:text-lg">{job.title}</h1>
                            <p className="text-sm md:text-base mt-2">{job.description}</p>
                        </div>

                        <div className="border-t md:border-l border-gray-300 mt-4 md:mt-0 md:ml-4 pt-4 md:pt-0 max-w-full">
                            <div className="flex items-center md:ml-4 md:mt-4">
                                <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
                                <span>{job.budget}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 md:mt-8 w-full border-t border-gray-300 p-3 md:p-4">
                        <h2 className="font-medium text-base md:text-lg pb-4 md:pb-8">Skills and expertise</h2>
                        <div className="flex flex-wrap gap-2 md:gap-4">
                            <h4 className="bg-gray-300 px-4 py-2 rounded-full text-center text-sm md:text-base">JavaScript</h4>
                            <h4 className="bg-gray-300 px-4 py-2 rounded-full text-center text-sm md:text-base">Node</h4>
                        </div>
                    </div>
                </div>

                {/* cover letter  */}
                <div className="border border-gray-300 rounded-xl md:rounded-3xl mt-6 md:mt-8 mb-8 md:mb-12">
                    <h1 className="font-medium text-xl md:text-2xl p-3 md:p-4">Cover Letter</h1>
                    <div className="px-3 md:px-4 pb-4">
                        <textarea 
                            className="border border-gray-300 rounded-xl md:rounded-2xl w-full h-48 md:h-64 p-2 md:p-3" 
                            placeholder="Write your cover letter here..."
                        />
                    </div>
                </div>

                <div className="mb-8 md:mb-12">
                    <Button text="Submit Proposal"/>
                </div>
            </div>
        </div>
    )
}

export default JobApplication