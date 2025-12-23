import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='w-full h-20 font-tech md:text-2xl hidden md:block m-0 bg-white'>
        <ul className='flex justify-around items-center h-full z-10'>
            <li className='bg-black py-1 px-3 rounded-lg'><a href="/">Home</a></li>
            <li className='bg-black py-1 px-3 rounded-lg'><a href="/">Skills</a></li>
            <li className='bg-black py-1 px-3 rounded-lg'><a href="/">Projects</a></li>
            <li className='bg-black py-1 px-3 rounded-lg'><a href="/">Timeline</a></li>
            <li className='bg-black py-1 px-3 rounded-lg'><a href="/">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
