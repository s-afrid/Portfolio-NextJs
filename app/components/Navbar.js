import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 w-full'>
      <div className="absolute top-0 w-full h-24 md:h-44 2xl:h-24 backdrop-blur-2xl hidden md:block [mask-image:linear-gradient(to_bottom,black_40%,transparent)]"></div>
      
      <nav className='relative z-10 w-full h-24 font-tech md:text-2xl hidden md:block'>
        <ul className='flex justify-around items-center h-full'>
            <li className='bg-black py-1 px-3 rounded-lg hover:bg-gray-900 transition'><a href="/">Home</a></li>
            <li className='bg-black py-1 px-3 rounded-lg hover:bg-gray-900 transition'><a href="/skills">Skills</a></li>
            <li className='bg-black py-1 px-3 rounded-lg hover:bg-gray-900 transition'><a href="/">Projects</a></li>
            <li className='bg-black py-1 px-3 rounded-lg hover:bg-gray-900 transition'><a href="/">Timeline</a></li>
            <li className='bg-black py-1 px-3 rounded-lg hover:bg-gray-900 transition'><a href="/">Contact</a></li>
        </ul>
      </nav>
      
    </div>
  )
}

export default Navbar