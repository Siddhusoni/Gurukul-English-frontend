import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/transactions')
     .then(response => {
        setTransactions(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="p-4 sm:ml-64">
      <div className="container mt-5 mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Date Range</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left text-xs font-medium font-bold uppercase tracking-wider">S.No</th>
                <th className="px-4 py-2 text-left text-xs font-medium font-bold uppercase tracking-wider">Date</th>
                <th className="px-4 py-2 text-left text-xs font-medium font-bold uppercase tracking-wider">Amount</th>
                <th className="px-4 py-2 text-left text-xs font-medium font-bold uppercase tracking-wider">Credit/Debit</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((transaction, index) => (
                <tr key={transaction.id}>
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}.</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{transaction.date}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{transaction.amount}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{transaction.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transaction;