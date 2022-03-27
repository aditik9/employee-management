import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='header-container flex flex-col justify-center items-center'>
      <div className='Page-heading py-4'>
        <h1 className='text-5xl text-slate-800 font-semibold font-serif'>Employee Management</h1>
      </div>
      <Navbar />
    </div>
  )
}

export default Header