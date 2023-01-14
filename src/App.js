import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './components/auth/SignIn';
import Navbar from './components/layout/Navbar';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import { ToastContainer } from "react-toastify";
import OTPVerification from './components/auth/OTPVerification';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
        <div className="App">
          <Navbar />
        <Routes>
          {["/", "/signin"].map((path) => (
            <Route exact path={path} key={path} element={<SignIn /> } />
          ))}
          <Route exact path="/signup" element={<SignUp /> } />
          <Route exact path="/dashboard" element={<Dashboard /> } />
          <Route exact path="/verify" element={<OTPVerification /> } />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
