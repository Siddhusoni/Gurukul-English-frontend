import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SideHome = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user'); // Ensure this matches your backend route
        const { total, data } = response.data;
        setTotalUsers(total);
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center mx-auto sm:mx-0">
            <h2 className="text-2xl font-semibold mb-4">Total amount</h2>
            <p className="text-gray-700">00.00</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center mx-auto sm:mx-0">
            <h2 className="text-2xl font-semibold mb-4">Total user</h2>
            <p className="text-gray-700">{totalUsers}</p>
          </div>
        </div>
      </div>

      <div className="p-4 sm:ml-64">
        <div className="container mt-5 mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">User List</h2>
          <table className="min-w-full max-w-xs mx-auto bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left text-xs font-medium font-bold uppercase tracking-wider">S.No</th>
                <th className="px-4 py-2 text-left text-xs font-medium font-bold uppercase tracking-wider">Name</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}.</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{user.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SideHome;
