import React from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function AddEmployee() {
    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
        .then(response => {
            console.log("Saved",response);
            navigate('/');
        })
        .catch(error => {
            console.log(error);
            alert('Failed to Add Employee');
        });
    }
    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id: '',
            name: '',
            phone: '',
            email: ''
        });
    }
    const [ employee, setEmployee ] = React.useState({
        id: '',
        name: '',
        phone: '',
        email: ''
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({
            ...employee,
            [e.target.name]: value
        });
    }
    const navigate = useNavigate();
    return (
        <div className='max-w-xl mx-40 bg-slate-800 my-20 rounded shadow py-4 px-8'>
            <div className='text-4xl tracking-wider font-semibold text-center py-4 px-8'>
            <h1>Add 💻 Employee</h1>
            </div>
            <div className='mx-10 my-2'>
            <input
            type='text'
            name='name'
            onChange={(e) => handleChange(e)}
            value={employee.name}
            className='w-full py-2 my-4 text-slate-800 bg-white text-black-800 text-semibold' placeholder='Name'></input>
            <input
            type='number'
            name='phone'
            onChange={(e) => handleChange(e)}
            value={employee.phone}
            className='w-full py-2 my-4 text-slate-800 bg-white text-black-800 text-semibold' placeholder='Phone'></input>
            <input 
            type='email'
            name='email'
            value={employee.email}
            onChange={(e) => handleChange(e)}
            className='w-full py-2 my-4 text-slate-800 bg-white text-black-800 text-semibold' placeholder='Email'></input>
            </div>
            <div className='text-3xl flex my-4 space-x-4 tracking-wider font-bold text-center py-4 px-8'>
            <button
            onClick={saveEmployee}
            className='bg-green-400 hover:bg-green-700 py-2 px-6 rounded'>Save</button>
            <button 
            onClick={reset}
            className='bg-blue-400 hover:bg-blue-700 py-2 px-6 rounded'>Clear</button>
            <button 
            onClick={() => navigate('/')}
            className='bg-red-400 hover:bg-red-700 py-2 px-6 rounded'>Cancel</button>
            </div>
        </div>
    )
}

export default AddEmployee
