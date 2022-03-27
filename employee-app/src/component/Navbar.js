import React from 'react'

const Navbar = () => {
  return (
    <div className='navigation-bar text-violet-900 font-serif shadow-lg bg-gray-100'>
        <div className='Nav-buttons flex gap-x-6 px-6 text-indigo-800'>
            <button className='px-4 py-2 font-semibold'>Home</button>
            <button className='px-4 py-2 font-semibold'>Employee</button>
            <button className='px-4 py-2 font-semibold'>Others</button>
            <button className='px-4 py-2 font-semibold'>Logout</button>
        </div>
    </div>
  )
}
export default Navbar