import React, { useState } from 'react';
import '../CSS/Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";
import Navbar from '../Components/Navbar';
const Login = () => {
  const dispatch = useDispatch();
  const[email,setemail] = useState("");
  const[password,setpassword]=useState("");
  const navigate = useNavigate();

  const handlelogin = async (e) => {
    e.preventDefault();
  
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email, password}),
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      alert(data.message);
    } else {
      localStorage.setItem("token", data.token);
      alert(data.message);
      dispatch(loginSuccess(data.user));
      navigate('/Shop');
    }
  };

  return (
    <>
    <Navbar/>
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>LOGIN </h1>
         
         <div className='loginsignup-fields'>
        <form onSubmit={handlelogin}>
        <input type='email' placeholder='write your email' onChange={(e)=>setemail(e.target.value)}/>
        <input type="password" placeholder='write your password' onChange={(e)=>setpassword(e.target.value)}/>
        <button type='Submit'>Continue</button>
        </form>
        </div>
        
         <p className="loginsignup-login">
            Dont't have an account ? <Link to="/signup">Sign up</Link>
        </p>
      
      </div>
     

       <div className='loginsignup-agree'>
          <input type='checkbox' name='' id=''/>
        <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
     
      
    </div>
    </>
  )
}

export default Login
