import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function JobCard() {
  const [isSolid, setIsSolid] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const navigate=useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/job',{
          withCredentials:true
        });
        console.log(response);
        
        setData(response.data.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const toggleHeart = () => {
    setIsSolid(!isSolid);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data.length === 0 ? (
        <p>Loading jobs...</p>
      ) : (
        data.map((job) => (
          <div key={job._id} onClick={()=>navigate(`/job/${job._id}`)} className="w-9/12 border border-gray border-x-0 pl-2 cursor-pointer hover:bg-gray-100 group">
            <span className="text-xs">Posted {job.postedAt} days ago</span>
            <div className="flex justify-between">
              <div>
                <h3 className="text-2xl mb-2.5 group-hover:text-green-600">{job.title}</h3>
                <p className="text-xs mb-5">
                   Est Budget: ${job.budget}
                </p>
              </div>
              <div className="space-x-3 mr-6 -top-2">
                <FontAwesomeIcon icon={faThumbsDown} className="h-6 cursor-pointer" />
                <FontAwesomeIcon icon={isSolid ? faHeartSolid : faHeartRegular} className="h-6 cursor-pointer" onClick={toggleHeart} />
              </div>
            </div>
            <div className="mb-4">
              <p>{job.description}</p>
            </div>
            <div className="flex mb-4">
              
                <h4 className="bg-gray-300 w-28 py-2 rounded-full text-center ml-4">
                  {job.skills}
                </h4>
             
            </div>
            <div className="flex space-x-10 mb-4 text-sm">
              <p>{job.paymentVerified ? 'Payment Verified' : 'Payment Unverified'}</p>
              <div>
                {[...Array(job.rating)].map((_, index) => (
                  <FontAwesomeIcon key={index} icon={faStarSolid} style={{ color: '#FFD43B' }} />
                ))}
              </div>
              <p>$ Spent</p>
              <div>
                <FontAwesomeIcon icon={faLocationDot} className="mr-1" />
                <span>{job.location}</span>
              </div>
            </div>
            <p className="text-sm">
              Proposals: <span>10-30</span>
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default JobCard;
