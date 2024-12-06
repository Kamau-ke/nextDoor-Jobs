import React from 'react'
import Button from '../components/button'
function Login() {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
        <form action="" className='flex flex-col w-5/12 h-1/2 border border-gray-500 rounded-xl '>
            <label htmlFor="">Email</label>
            <input type="text"/>
            <label htmlFor="">Password</label>
            <input type="password"/>
            <Button text='Login'/>
        </form>
    </div>
  )
}

export default Login