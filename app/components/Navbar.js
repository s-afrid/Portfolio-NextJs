import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky'>
     <div className="absolute inset-0 w-full h-25 md:h-40 backdrop-blur-2xl hidden md:block md:[mask-image:linear-gradient(to_bottom,black_40%,transparent)]"></div>
      <nav className='relative w-full z-10 h-20 font-tech md:text-2xl hidden md:block m-0'>
        <ul className='flex justify-around items-center h-full z-10'>
            <li className='bg-black py-1 px-3 rounded-lg'><a href="/">Home</a></li>
            <li className='bg-black py-1 px-3 rounded-lg'><a href="/skills">Skills</a></li>
            <li className='bg-black py-1 px-3 rounded-lg'><a href="/">Projects</a></li>
            <li className='bg-black py-1 px-3 rounded-lg'><a href="/">Timeline</a></li>
            <li className='bg-black py-1 px-3 rounded-lg'><a href="/">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
