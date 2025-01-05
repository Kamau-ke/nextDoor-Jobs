import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'

function JobCard() {
    const [isSolid, setIsSolid]=useState(false)

    const toggleHeart=()=>{
        setIsSolid(!isSolid)
    }

  return (

    <div className='w-9/12 border border-gray border-x-0 pl-2 cursor-pointer hover:bg-gray-100 group '>
        <span className='text-xs'>Posted 2 days ago</span>
        <div className='flex justify-between'>
            <div>
                <h3 className='text-2xl mb-2.5 group-hover:text-green-600'>React Developer Needed</h3>
                <p className='text-xs mb-5'>Fixed-price -Intermediate -Est Budget:$25</p>
            </div>

            <div className='space-x-3 mr-6 -top-2'>
                <FontAwesomeIcon icon={faThumbsDown} className='h-6 cursor-pointer' />
                <FontAwesomeIcon icon={isSolid ? faHeartSolid: faHeartRegular} className='h-6 cursor-pointer' onClick={toggleHeart} />
            </div>
        </div>
        <div className='mb-4'>
            <p>We need a React designer to quickly convert this nonfunctional design to working code for another developer to finish it. We want the chat functionality to work with local data, someone else will connect the API. However, we should see additional chats added like it would normally. We used a plugin to generate the code, so something may need to get cleaned up so it can be proper for another developer to finish working. We need someone who can work quick! We have a 4 hours turn around needed. This could turn into more work. To get an interview, explain what you have to do in your own words.</p>
        </div>

        <div className='flex mb-4'>
            <h4 className='bg-gray-300 w-28 py-2 rounded-full text-center ml-4 '>JavaScript</h4>

            <h4 className='bg-gray-300 w-28 py-2 rounded-full text-center ml-4 '>Node</h4>
        </div>

        <div className='flex space-x-10 mb-4 text-sm'> 
            <p>Payment Verified</p>

            <div className='hidden'>
            <FontAwesomeIcon icon={faStarRegular} />
            <FontAwesomeIcon icon={faStarRegular} />
            <FontAwesomeIcon icon={faStarRegular}/>
            <FontAwesomeIcon icon={faStarRegular}/>
            <FontAwesomeIcon icon={faStarRegular}/>
            </div>
            <div>
            <FontAwesomeIcon icon={faStarSolid} style={{color: "#FFD43B",}} />
            <FontAwesomeIcon icon={faStarSolid} style={{color: "#FFD43B",}} />
            <FontAwesomeIcon icon={faStarSolid} style={{color: "#FFD43B",}}/>
            <FontAwesomeIcon icon={faStarSolid} style={{color: "#FFD43B",}}/>
            <FontAwesomeIcon icon={faStarSolid} style={{color: "#FFD43B",}}/>
            </div>

            <p>$20K+ <span>Spent</span> </p>
            <div>
            <FontAwesomeIcon icon={faLocationDot} className='mr-1'/><span>United States</span>
            </div>
        </div>

        <p className='text-sm'>Proposals: <span>10 to 50</span></p>

    </div>
  )
}

export default JobCard