import React, { useState } from 'react';

const UserReferral = () => {
  // Sample referral data (replace with actual data retrieval logic)
  const referralData = {
    referralCode: 'ABCD1234',
    referralLink: 'https://example.com/referral/ABCD1234',
    referralCount: 10, // Replace with actual count
  };

  const [copySuccess, setCopySuccess] = useState(false);

  // Function to copy referral link to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralData.referralLink);
    setCopySuccess(true);

    // Reset copy success message after 3 seconds
    setTimeout(() => {
      setCopySuccess(false);
    }, 3000);
  };

  return (
    <div className="p-4 sm:ml-64">
    <div className="min-h-screen bg-gray-100 flex  justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-3/4 lg:w-1/2">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">User Referral Information</h2>
        <div className="mb-4">
          <p className="text-lg text-gray-700 mb-2">Your Referral Code:</p>
          <p className="text-gray-900 text-xl font-bold">{referralData.referralCode}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg text-gray-700 mb-2">Your Referral Link:</p>
          <div className="flex items-center">
            <a
              href={referralData.referralLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline truncate w-full"
            >
              {referralData.referralLink}
            </a>
            <button
              className="ml-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              onClick={copyToClipboard}
            >
              Copy
            </button>
          </div>
          {copySuccess && (
            <p className="text-sm text-green-500 mt-2">Copied to clipboard!</p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserReferral;
