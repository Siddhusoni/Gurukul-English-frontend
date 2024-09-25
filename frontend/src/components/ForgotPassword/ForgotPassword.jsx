import React, { useState } from 'react';
import axios from 'axios';

function ForgotPassword() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      try {
        const response = await axios.post('http://localhost:5000/reset-password', { mobileNumber, newPassword });
        setSuccess('Password reset successfully');
      } catch (error) {
        setError('Error resetting password');
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <section className="bg-gray-50 dark:bg-gray-900 w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 max-w-lg">
          <div className="w-full bg-white rounded-lg shadow dark:border dark:border-gray-700 sm:max-w-md p-6 dark:bg-gray-800">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Change Password
            </h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div>
                <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Mobile Number</label>
                <input 
                  type="number" 
                  name="mobile" 
                  id="mobile" 
                  value={mobileNumber} 
                  onChange={handleMobileNumberChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                  placeholder="1234567890" 
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  value={newPassword} 
                  onChange={handleNewPasswordChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                  placeholder="••••••••" 
                  required
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                <input 
                  type="password" 
                  name="confirm-password" 
                  id="confirm-password" 
                  value={confirmPassword} 
                  onChange={handleConfirmPasswordChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                  placeholder="••••••••" 
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForgotPassword;
