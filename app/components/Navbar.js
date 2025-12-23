import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='w-full h-20 font-tech md:text-2xl hidden md:block m-0 bg-white'>
        <ul className='flex justify-around items-center h-full z-10'>
            <li className='bg-black py-1 px-3 rounded-lg'>Home</li>
            <li className='bg-black py-1 px-3 rounded-lg'>Skills</li>
            <li className='bg-black py-1 px-3 rounded-lg'>Projects</li>
            <li className='bg-black py-1 px-3 rounded-lg'>Timeline</li>
            <li className='bg-black py-1 px-3 rounded-lg'>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
