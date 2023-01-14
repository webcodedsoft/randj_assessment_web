import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { signUp } from '../../services';


export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp({email, name, password});
    navigate("/verify")
  }
  
  return (
    <div className="container">
        <form className="white" onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' name='password' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name' onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
  )
}
