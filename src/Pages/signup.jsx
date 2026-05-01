import React, { useState } from 'react';
import '../CSS/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handlesignup = async (e) => {
    e.preventDefault();

    const response = await fetch('https://ecommerce-backend-fotr.onrender.com/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message);
    } else {
      alert(data.message);
      navigate('/'); // redirect to login after signup
    }
  };

  return (
    <>
      <Navbar />
      <div className='loginsignup'>
        <div className='loginsignup-container'>
          <h1>SIGN UP</h1>

          <div className='loginsignup-fields'>
            <form onSubmit={handlesignup}>
              <input 
                type='text' 
                placeholder='write your name'
                value={name}
                onChange={(e) => setname(e.target.value)} 
              />
              <input 
                type='email' 
                placeholder='write your email' 
                value={email}
                onChange={(e) => setemail(e.target.value)} 
              />
              <input 
                type="password" 
                placeholder='write your password'
                value={password} 
                onChange={(e) => setpassword(e.target.value)} 
              />
              <button type='submit'>Continue</button>
            </form>
          </div>

          <p className="loginsignup-login">
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>

        <div className='loginsignup-agree'>
          <input type='checkbox' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </>
  );
};

export default Signup;