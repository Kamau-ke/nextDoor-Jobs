import React from 'react'
import Button from '../components/button'

function Register() {
  return (
    <div className='Register-page '>
    <form action="" className='Register-form'>
    <label htmlFor="name">First name</label>
    <input type="text"  placeholder="Your name"/>

    <label htmlFor="name">last name</label>
    <input type="text"  />

    <label htmlFor="email">Email</label>
    <input type="text"  />
    

    <label htmlFor="phone">Phone</label>
    <input type="text" />

    <label htmlFor="skills">Skills</label>
    <input type="text" />

    <label htmlFor="location">Location</label>
    <input type="text"/>

    <label htmlFor="dob">Date of birth</label>
    <input type="date"/>

    <label htmlFor="password">Password</label>
    <input type="password"/>

    <Button text='submit' />
   </form>
    </div>
  )
}

export default Register