"use client"
import React from 'react'

const Navbar_mobile = () => {
  return (
    <div className='absolute flex md:hidden w-[50vw] ml-[10px] mt-[10px]'>
        <nav className='w-full h-90 font-tech md:text-2xl m-0 bg-white text-black rounded-2xl [box-shadow:5px_5px_#000000]'>
        <ul className='flex flex-col justify-center gap-10 h-full z-10'>
            <li className='py-1 px-3 w-full '><a className='w-full active:bg-white active:text-black' href="/">
            <div className='border-b border-b-gray-300'>
                Home
            </div>
            </a></li>
            <li className='py-1 px-3 w-full'><a className='w-full active:bg-white active:text-black' href="/">
            <div className='border-b border-b-gray-300'>
                Skills
            </div>
            </a></li>
            <li className='py-1 px-3 w-full'><a className='w-full active:bg-white active:text-black' href="/">
            <div className='border-b border-b-gray-300'>
                Projects
            </div>
            </a></li>
            <li className='py-1 px-3 w-full'><a className='w-full active:bg-white active:text-black' href="/">
            <div className='border-b border-b-gray-300'>
                Timeline
            </div>
            </a></li>
            <li className='py-1 px-3 w-full'><a className='w-full active:bg-white active:text-black' href="/">
            <div className='border-b border-b-gray-300'>
                Contact
            </div>
            </a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar_mobile