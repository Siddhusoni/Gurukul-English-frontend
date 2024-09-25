import React from 'react';
import axios from 'axios';

const CourseDownload = () => {
  const downloadCourse = async () => {
    try {
      // Retrieve token from localStorage or wherever you store it
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('No token available');
      }

      // Make a GET request to your backend endpoint that triggers the download
      const response = await axios.get('http://localhost:5000/user/download-course', {
        responseType: 'blob', // Important for downloading binary files like PDF
        headers: {
          authorization: `${token}` // Include the token in the Authorization header
        }
      });

      // Create a blob object from the response data
      const blob = new Blob([response.data], { type: 'application/pdf' });

      // Create a link element, hide it, direct it towards the blob, and then 'click' it programmatically
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'english.pdf'; // Change filename if needed
      document.body.appendChild(link);
      link.click();

      // Clean up and remove the link element afterwards
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error('Error downloading course:', error);
      // Handle errors, such as displaying a notification or message to the user
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">Download Course</h2>
        <div className="flex justify-center mt-6">
          <button
            onClick={downloadCourse}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Download English Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDownload;
