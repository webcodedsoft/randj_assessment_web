import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../../services'

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn({ email, password });
    if (result.isVerified) {
      navigate("/dashboard")
    } else {
      navigate("/verify")
    }
  }

  return (
    <div className="container">
        <form className="white" onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1 z-depth-0">Sign In</button>
          </div>
        </form>
      </div>
  )
}