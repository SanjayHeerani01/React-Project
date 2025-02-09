import React from 'react'


function AddEmployee() {
    return (
        <div className='max-w-xl mx-40 bg-slate-800 my-20 rounded shadow py-4 px-8'>
            <div className='text-4xl tracking-wider font-semibold text-center py-4 px-8'>
            <h1>Add 💻 Employee</h1>
            </div>
            <div className='mx-10 my-2'>
            <input className='w-full py-2 my-4 text-slate-800 bg-white text-black-800 text-semibold' placeholder='Name'></input>
            <input className='w-full py-2 my-4 text-slate-800 bg-white text-black-800 text-semibold' placeholder='Phone'></input>
            <input className='w-full py-2 my-4 text-slate-800 bg-white text-black-800 text-semibold' placeholder='Email'></input>
            </div>
            <div className='text-3xl flex my-4 space-x-4 tracking-wider font-bold text-center py-4 px-8'>
            <button className='bg-green-400 hover:bg-green-700 py-2 px-6 rounded'>Save</button>
            <button className='bg-blue-400 hover:bg-blue-700 py-2 px-6 rounded'>Clear</button>
            <button className='bg-red-400 hover:bg-red-700 py-2 px-6 rounded'>Cancel</button>
            </div>
        </div>
    )
}

export default AddEmployee
