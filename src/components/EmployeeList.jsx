import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function EmployeeList() {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]); // Changed from null to []

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="w-full max-w-6xl mx-auto my-8 p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Employee List</h2>
        <button
          onClick={() => navigate('/add-employee')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all"
        >
          + Add Employee
        </button>
      </div>

      {!loading && (
        <p className="text-center text-lg text-gray-700">Loading employees...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-blue-800 text-white text-left">
                <th className="px-6 py-3 uppercase tracking-wide">Name</th>
                <th className="px-6 py-3 uppercase tracking-wide">Phone</th>
                <th className="px-6 py-3 uppercase tracking-wide">Email</th>
                <th className="px-6 py-3 uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => ( // ✅ Keeping your original map structure
                <tr key={employee.id} className="border-b hover:bg-gray-200 transition-all">
                  <td className="px-6 py-4 whitespace-nowrap">{employee.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{employee.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{employee.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-green-600 hover:text-green-800 mr-4 transition-all">
                      Edit ✏️
                    </button>
                    <button className="text-red-600 hover:text-red-800 transition-all">
                      Delete 🗑️
                    </button>
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
