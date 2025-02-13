import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import Button from '../components/button'
function JobApplication() {
    const {jobId}=useParams()
    console.log(jobId);
    

    const [job, setJob]=useState({})
    const [error, setError]=useState(null)
    const [loading, setLoading]=useState(true)

    const fetchData=async ()=>{
        try {
           const response=await axios.get(`http://localhost:5000/api/v1/job/${jobId}`) 
           setJob(response.data.job[0])
        
           
        } catch (error) { 
            setError(error.message)
        }
    }

    const dataLoaded=React.useRef(false)

    useEffect(()=>{
        if(!dataLoaded.current){
            fetchData()
            dataLoaded.current=true
        }
        
    }, [])

    console.log(job);
    
  
    

    
    
    // const job=axios.get('/api/v1/job/')

  return (
    <div className='overflow-x-hidden'>
        <div className='w-3/4 mx-auto mt-20 '>
            <h1 className='font-semibold text-3xl pb-10'>Submit a proposal</h1>

            {/* About job */}
           
            <div className='border border-gray-300 rounded-3xl p-4'>   
                <h2 className='font-medium text-2xl pb-8'>Job details</h2> 
                <div className='flex'>
                    <div className='w-3/4 '>
                    <h1 className='font-medium text-lg'>{job.title}</h1>
                    <p>{job.description}</p>
                    </div>

                    <div className='border-l border-gray-300 ml-4 max-w-full'>
                    <FontAwesomeIcon icon={faDollarSign} className='ml-4 mt-4'/>
                    <span>{job.budget}</span>
                    </div>
                </div>

                <div className='mt-8 w-full border-t border-gray-300 p-4'>
                    <h2 className='font-medium text-lg pb-8'>Skills and expertise</h2>
                    <div className='flex mb-4'>
                        <h4 className='bg-gray-300 w-28 py-2 rounded-full text-center ml-4 '>JavaScript</h4>

                        <h4 className='bg-gray-300 w-28 py-2 rounded-full text-center ml-4 '>Node</h4>
                </div>
                </div>
            </div>

            {/* cover letter  */}

            <div className='border border-gray-300 rounded-3xl mt-8 mb-12 h-96'>
                <h1 className='font-medium text-2xl p-4'>Cover Letter</h1>
                <textarea  className='border border-gray-300 rounded-2xl w-11/12 h-3/4 ml-12 pl-2 pt-2' />
            </div>

            <div className='mb-12'>
             <Button text='Submit Proposal'/>
            </div>
           
        </div>
    </div>
  )
}

export default JobApplication