
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './verifyEmail.scss'

const VerifySuccess = () => {
    const navigate = useNavigate();
  return (
    <div className='top-ver'>
        <h3>Your email id has been successfully verified.</h3>
        <button className='login-ver' onClick={()=>{navigate('/login')}}>Login Now</button>
    </div>
  )
}

export default VerifySuccess;