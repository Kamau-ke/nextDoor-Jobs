import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
function JobApplication() {
  return (
    <div className='w-9/12 bg-slate-100 absolute right-0 top-0 bottom-0 z-30'>
            <div>
            <FontAwesomeIcon icon={faArrowLeft} className='ml-4 mt-4 h-6 cursor-pointer'/>
            </div>

            <h3>React Developer Needed</h3>

            

    </div>
  )
}

export default JobApplication