import React, { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { Routes, Route, useNavigate } from "react-router-dom";

import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import SideHome from './components/SideHome/SideHome';
import Transation from './components/TransationH.jsx/Transation';
import Donation from './components/donation/Donation';
import BankDetails from './components/Bank-deatils/BankDetails';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import DowlondCourse from './components/DowlondCourse/DowlondCourse';
import UserReferral from './components/userRefrral/UserReferral';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/sideHome'); // Redirect to /sideHome after login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login'); // Redirect to home page after logout
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      {isLoggedIn && <Sidebar />}
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resetpassword" element={<ForgotPassword />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          {isLoggedIn && (
            <>
              <Route path="/sideHome" element={<SideHome />} />
              <Route path="/transation" element={<Transation />} />
              <Route path="/Donation" element={<Donation />} />
              <Route path="/BankDetail" element={<BankDetails />} />
              <Route path="/resetpassword" element={<ForgotPassword />} />
              <Route path="/dowlond" element={<DowlondCourse />} />
              <Route path="/UserReferral" element={<UserReferral />} />
            </>
          )}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
