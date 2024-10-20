import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faQuestion } from '@fortawesome/free-solid-svg-icons'
import Button from '../components/button'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign'
function AboutJob() {
  return (
    <div className='w-9/12 bg-slate-100  absolute right-0 z-30 bottom-0 top-0 overflow-hidden'>
            <div>
            <FontAwesomeIcon icon={faArrowLeft} className='ml-4 mt-4 h-6 cursor-pointer'/>
            </div>

            <div className='flex justify-between h-full'>
                {/* div 1 */}
            <div className='w-9/12'>
            <div className='border-b border-gray-300 h-28 flex items-center justify-center'>
               <h3 className='text-2xl font-semibold'>React Developer Needed</h3>
            </div>
            

            <div className='border-b border-gray-300 h-48'>
              <p className='p-2'>
              We need a React designer to quickly convert this nonfunctional design to working code for another developer to finish it. We want the chat functionality to work with local data, someone else will connect the API. However, we should see additional chats added like it would normally. We used a plugin to generate the code, so something may need to get cleaned up so it can be proper for another developer to finish working. We need someone who can work quick! We have a 4 hours turn around needed. This could turn into more work. To get an interview, explain what you have to do in your own words.
              </p>
            </div>

            <div className='border-b border-gray-300 h-20'> 
              <FontAwesomeIcon icon={faDollarSign} className='ml-4 mt-4'/>
              <span>$10 fixed</span>
            </div>

            <div className='border-b border-gray-300 h-48'>
              <h2 className='p-4'>Skills and Expertise</h2>
              <div className='flex space-x-2 ml-4 '>
                <h4 className='p-2 bg-gray-400 rounded-full w-fit'>HTML</h4>
                <h4 className='p-2 bg-gray-400 rounded-full w-fit'>CSS</h4>
                <h4 className='p-2 bg-gray-400 rounded-full w-fit'>JavaScript</h4>
                <h4 className='p-2 bg-gray-400 rounded-full w-fit'>Node</h4>
              </div>
              
            </div>

            <div>
              <h2 className='p-4 '>Activity on this Job</h2>
              <div className='ml-4'>
                <p >Proposals: 10 to 50</p>
              </div>
            </div>
            </div>
            
           {/* div 2 */}
            <div className='w-3/12 border-l border-gray-300  h-5/6'>
              <div className='m-6'> 
                <Button text='Apply now'/>

                <div className='mt-2'>
                  <h2 className='p-4' >About the client</h2>

                </div>
              </div>
            </div>
            </div>
          

    </div>
  )
}

export default AboutJob