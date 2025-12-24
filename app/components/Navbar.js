import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 w-full'>
      <div className="absolute top-0 w-full h-30 backdrop-blur-2xl hidden md:block [mask-image:linear-gradient(to_bottom,black_60%,transparent)]"></div>
      
      <nav className='relative z-10 w-full h-15 font-tech md:text-2xl hidden md:block bg-transparent border-0'>
        <ul className='flex justify-center gap-20 text-[20px] items-center h-full p-2 bg-transparent'>
            <li className='bg-black py-1 px-3 rounded-lg hover:invert [transition:all_0.7s_ease] [box-shadow:3px_3px_#ffffff]'><a href="/">Home</a></li>
            <li className='bg-black py-1 px-3 rounded-lg hover:invert [transition:all_0.7s_ease] [box-shadow:3px_3px_#ffffff]'><a href="/skills">Skills</a></li>
            <li className='bg-black py-1 px-3 rounded-lg hover:invert [transition:all_0.7s_ease] [box-shadow:3px_3px_#ffffff]'><a href="/projects">Projects</a></li>
            <li className='bg-black py-1 px-3 rounded-lg hover:invert [transition:all_0.7s_ease] [box-shadow:3px_3px_#ffffff]'><a href="/">Timeline</a></li>
            <li className='bg-black py-1 px-3 rounded-lg hover:invert [transition:all_0.7s_ease] [box-shadow:3px_3px_#ffffff]'><a href="/">Contact</a></li>
        </ul>
      </nav>
      
    </div>
  )
}

export default Navbar