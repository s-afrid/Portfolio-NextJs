import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='w-full h-4 font-tech md:text-2xl'>
        <ul className='flex justify-around items-center h-20 bg-white text-black'>
            <li>Home</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Timeline</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
