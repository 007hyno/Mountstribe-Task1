import React from 'react'
import MainLayout from '../layout/MainLayout'
import {useState,useEffect} from 'react'

import '../assets/css/login-style.css'

function LoginPage() {
   
  // const location = useLocation();
  const [email,setEmail] = useState() 
  const [password,setPassword] = useState()
  const [style1,setStyle1] = useState('input')
  const [style2,setStyle2] = useState('input')
  // const navigate = useNavigate(); 

  return (
    <MainLayout>
<div className='login-container'>
        <div className='form-cont col-xl-6 col-lg-6 col-md-6 col-sm-12'>
        <h1 className='center-text form-login'>Login Page </h1>
        <form onSubmit={"onLogin" }>
            <div className='cont'>
            <label 
            htmlFor="">Email 
            </label>
            <input 
            className='form-control'
            placeholder='Enter Email'
            type="text"
            value={email}
            name='email'
            onChange={(e)=>{
                setEmail(e.target.value)
                }}/>
            </div>

            <div className='cont'>
            <label htmlFor="">Password </label>
            <input type="password"
            className='form-control'
            placeholder='Enter Password'
            name='password'
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            />
            </div>
            
            <div>
                <button type='submit'
                className='login-button btn btn-primary btn-block mb-4 w-100 my-4'
                >Login</button>
            </div>
        </form>
        <p className='center-text'>Create an account <a href="/register">Sign up</a></p>
    </div>
    </div>

    </MainLayout>
  )
}

export default LoginPage