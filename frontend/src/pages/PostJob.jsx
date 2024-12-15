import React from 'react'

function PostJob() {
  return (
    <div>
      <form action="">
        <label htmlFor="">Title</label>
        <input type="text" className='border border-black p-2 '/>

        <label htmlFor="">description</label>
        <textarea  className='border border-black p-2 '/>

        <label htmlFor="">Budget</label>
        <input type="text" className='border border-black p-2 '/>

        <label htmlFor="">Position</label>
        <input type="text" className='border border-black p-2 '/>

        <label htmlFor="">Skills</label>
        <input type="text" className='border border-black p-2 '/>

        <label htmlFor="">Country</label>
        <input type="text" className='border border-black p-2 '/>


        <button type='submit' className='p-2 bg-green-500 text-white rounded '>Post Job</button>
      </form> 
    </div>
  )
}

export default PostJob