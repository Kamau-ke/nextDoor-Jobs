import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMap } from '@fortawesome/free-regular-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
function JobCard() {
  return (
    <div className='w-3/5 border border-gray border-x-0'>
        <span>Posted 2 days ago</span>
        <div className='flex justify-between'>
            <div>
                <h3>React Developer Needed</h3>
                <p>Fixed-price -Intermediate -Est Budget:$25</p>
            </div>

            <div className='space-x-3 mr-6 -top-2'>
                <FontAwesomeIcon icon={faThumbsDown} className='h-6 cursor-pointer' />
                <FontAwesomeIcon icon={faHeart} className='h-6 cursor-pointer' />
            </div>
        </div>
        <div>
            <p>We need a React designer to quickly convert this nonfunctional design to working code for another developer to finish it. We want the chat functionality to work with local data, someone else will connect the API. However, we should see additional chats added like it would normally. We used a plugin to generate the code, so something may need to get cleaned up so it can be proper for another developer to finish working. We need someone who can work quick! We have a 4 hours turn around needed. This could turn into more work. To get an interview, explain what you have to do in your own words.</p>
        </div>

        <div className='flex'>
            <h4 className='bg-gray-300 w-28 py-2 rounded-full text-center ml-4 '>JavaScript</h4>

            <h4 className='bg-gray-300 w-28 py-2 rounded-full text-center ml-4 '>Node</h4>
        </div>

        <div>
            <p>Payment Verified</p>

            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />

            <p>$20K+ <span>Spent</span> </p>
            <FontAwesomeIcon icon={faLocationDot}/><span>United States</span>
        </div>

    </div>
  )
}

export default JobCard