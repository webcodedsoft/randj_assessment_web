import React from 'react'
import { logOut } from '../../services'

const SignedInLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><a href="/" onClick={logOut}>Log Out</a></li>
      </ul>
    </div>
  )
}

export default SignedInLinks
