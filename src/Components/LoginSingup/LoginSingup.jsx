import React, { useState } from 'react'
import './LoginSingup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'


export const LoginSingup = () => {
    const[action,setAction]=useState("sing up")
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==="Login"?<div></div>:<div className='input'>
                <img src={user_icon} alt=''/>
                <input type='text' placeholder='Name'/>
            </div>}
            
            <div className='input'>
                <img src={email_icon} alt=''/>
                <input type='email' placeholder='Email'/>
            </div>
            <div className='input'>
                <img src={password_icon} alt=''/>
                <input type='password' placeholder='Password'/>
            </div>
        </div>
        {action==="sing Up"?<div></div>:<div className='forgot-password'>Lost password? <span>click here!</span></div>}
        
        <div className='submit-container'>
            <div className={action==="login"?"submit gray":"submit"} onClick={()=>{setAction("sing Up")}}>sign up</div>
            <div className={action==="sing Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>login</div>
        </div>
    </div>
  )
}
