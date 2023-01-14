import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDocument } from 'react-firebase-hooks/firestore';
import { useNavigate } from 'react-router-dom'
import { auth, verifyOTP } from '../../services'
import { getFirestore, doc } from 'firebase/firestore';
import app from '../../config/fbConfig';
import { toast } from 'react-toastify';

export default function OTPVerification() {
  const navigate = useNavigate();
  const [otp, setOTP] = useState();

const [user] = useAuthState(auth);
 const [value, loading] = useDocument(
    doc(getFirestore(app), 'users', user && (user || {}).uid),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userOTP = value.data().otp;
    if (userOTP === Number(otp)) {
      await verifyOTP((user || {}).uid);
      navigate("/dashboard")
    } else {
      toast.error("Invalid OTP");
    }
  }

  return (
    <div className="container">
        <form className="white" onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3">Verification</h5>
        {!loading && <center><p>Valid OTP: {value.data().otp}</p></center>}
          <div className="input-field mt9">
            <label htmlFor="text">Enter OTP</label>
            <input type="text" id='text' name='text' onChange={(e) => setOTP(e.target.value)} />
          </div>
          {!loading && (
            <div className="input-field">
              <button className="btn blue lighten-1 z-depth-0">Verify</button>
            </div>
          )}
        </form>
      </div>
  )
}