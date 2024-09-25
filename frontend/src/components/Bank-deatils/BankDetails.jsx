import React, { useState } from 'react';
import axios from 'axios';
import UpdateBankDetails from './UpdateBankDetails'; // Import the update component

const BankDetails = () => {
  const [userId, setUserId] = useState('');
  const [accountName, setAccountName] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [message, setMessage] = useState('');
  const [isUpdating, setIsUpdating] = useState(false); // State to switch between insert and update

  const token = localStorage.getItem('token'); // Get the token from localStorage

  const handleInsert = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user/insertBankDetails', {
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
      console.error('There was an error inserting bank details!', error);
      if (error.response) {
        setMessage(error.response.data.message || 'There was an error inserting bank details.');
      } else {
        setMessage('There was an error inserting bank details.');
      }
    }
  };

  const handleUpdateClick = () => {
    setIsUpdating(true); // Switch to update component
  };

  return (
    <div className="p-4 sm:ml-64">
      {!isUpdating ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Bank Details</h1>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">Account Name</label>
              <div className="flex">
                <input
                  type="text"
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">Bank Name</label>
              <div className="flex">
                <input
                  type="text"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">Account Number</label>
              <div className="flex">
                <input
                  type="text"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">IFSC Code</label>
              <div className="flex">
                <input
                  type="text"
                  value={ifscCode}
                  onChange={(e) => setIfscCode(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleInsert}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Submit
              </button>
              <button
                onClick={handleUpdateClick}
                className="bg-green-500 text-white p-2 rounded"
              >
                Update
              </button>
            </div>
          </form>
          {message && <p className="mt-4 text-red-500">{message}</p>}
        </>
      ) : (
        <UpdateBankDetails setIsUpdating={setIsUpdating} />
      )}
    </div>
  );
};

export default BankDetails;
