import React, { useState } from 'react';
import axios from 'axios';

const Donation = () => {
  const [responseMessage, setResponseMessage] = useState('');

  const handleAddChain = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from local storage
      if (!token) {
        setResponseMessage('No token provided. Please log in.');
        return;
      }

      const response = await axios.put(
        'http://localhost:5000/user/updatePaymentStatus',
        {},
        {
          headers: {
            authorization: ` ${token}`
          }
        }
      );
      setResponseMessage(response.data);
    } catch (error) {
      if (error.response) {
        setResponseMessage(error.response.data);
      } else {
        setResponseMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <>
      <div className='p-4 sm:ml-64'>
        <div className="flex flex-col items-center p-8 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">Course Purchase</h2>
          <button
            onClick={handleAddChain}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Buy Now
          </button>
          {responseMessage && (
            <div className="mt-4 p-4 bg-white rounded shadow">
              <p>{responseMessage}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Donation;
