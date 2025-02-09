import React from 'react';
import { useNavigate } from 'react-router-dom';

function EmployeeList() {
  const navigate = useNavigate();

  return (
    <div className='w-full max-w-6xl mx-auto my-8 p-6 bg-gray-100 rounded-lg shadow-lg'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-2xl font-bold text-gray-800'>Employee List</h2>
        <button
          onClick={() => navigate("/AddEmployee")}
          className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all'
        >
          + Add Employee
        </button>
      </div>
      <div className='overflow-x-auto'>
        <table className='w-full border-collapse bg-white shadow-md rounded-lg'>
          <thead>
            <tr className='bg-blue-800 text-white text-left'>
              <th className='px-6 py-3 uppercase tracking-wide'>Name</th>
              <th className='px-6 py-3 uppercase tracking-wide'>Phone</th>
              <th className='px-6 py-3 uppercase tracking-wide'>Email</th>
              <th className='px-6 py-3 uppercase tracking-wide'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2].map((_, index) => (
              <tr key={index} className='border-b hover:bg-gray-200 transition-all'>
                <td className='px-6 py-4 text-gray-800'>Sanjay Lohana</td>
                <td className='px-6 py-4 text-gray-800'>03322067460</td>
                <td className='px-6 py-4 text-gray-800'>sklohana232@gmail.com</td>
                <td className='px-6 py-4'>
                  <button className='text-green-600 hover:text-green-800 mr-4 transition-all'>Edit ✏️</button>
                  <button className='text-red-600 hover:text-red-800 transition-all'>Delete 🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;
