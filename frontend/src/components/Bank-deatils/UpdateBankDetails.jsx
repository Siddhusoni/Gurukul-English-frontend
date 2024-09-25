import React, { useState } from 'react';
import axios from 'axios';

const UpdateBankDetails = ({ setIsUpdating }) => {
  const [accountName, setAccountName] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [message, setMessage] = useState('');

  const token = localStorage.getItem('token'); // Get the token from localStorage

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:5000/user/updateBankDetails', {
        accountName,
        bankName,
        accountNumber,
        ifscCode,
      }, {
        headers: {
          'authorization': `Bearer ${token}` // Include the token in the headers
        }
      });

      setMessage(response.data.message);
    } catch (error) {
      console.error('There was an error updating bank details!', error);
      if (error.response) {
        setMessage(error.response.data.message || 'There was an error updating bank details.');
      } else {
        setMessage('There was an error updating bank details.');
      }
    }
  };

  const handleBack = () => {
    setIsUpdating(false); // Switch back to insert component
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">Update Bank Details</h1>
      <form className="space-y-4">
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700">Account Name</label>
          <input
            type="text"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700">Bank Name</label>
          <input
            type="text"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700">Account Number</label>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700">IFSC Code</label>
          <input
            type="text"
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white p-2 rounded w-full sm:w-auto"
          >
            Update
          </button>
          <button
            onClick={handleBack}
            className="bg-gray-500 text-white p-2 rounded w-full sm:w-auto"
          >
            Back
          </button>
        </div>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
};

export default UpdateBankDetails;
