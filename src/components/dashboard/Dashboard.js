import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../services';
import { getFirestore, doc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import app from '../../config/fbConfig';
import { useNavigate } from 'react-router-dom';


export default function Dashboard() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  
  const [value, loading] = useDocument(
    doc(getFirestore(app), 'users', user && (user || {}).uid),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  if (!user) {
     navigate("/signin")
  }

  return (
    <div className="dashboard container">
        <div className="col">
        {!loading && (
           <div className="col s12 m12">
          <p>Name: {value.data().name}</p>
          <p>Email: {value.data().email}</p>
          </div>
        )}
        </div>
      </div>
  )
}