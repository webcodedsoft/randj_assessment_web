import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import { auth } from '../../services';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  const links = !loading && (user || {}).uid ? <SignedInLinks /> : <SignedOutLinks />;

  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">RandJ</Link>
        {links}
      </div>
    </nav>
  )
}

export default Navbar
