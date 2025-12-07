import React, { useState } from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  const[para , setpara]= useState("");
  const[email,setemail]=useState("");
  function subscribe(){
    if (email.trim() === "") {
      alert("Please enter your email.");
      return;
    }
     setpara("You successfully subscribe us ");
  }
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Update to Your Email</h1>
      <p>Subscribe To our NewsLtter and stay updated</p>
      <div>
        <input type='email' value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Your email id' />
        <button onClick={subscribe}>Subscribe</button> 
      </div>
            <span><h3>{para}</h3></span>
    </div>

  )
}

export default NewsLetter
