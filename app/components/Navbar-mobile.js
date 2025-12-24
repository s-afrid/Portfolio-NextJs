"use client"
import React, { useRef } from 'react'

const Navbar_mobile = () => {

    const panel = useRef()
    
    const closePanel = ()=>{
        panel.current.style.left = "-100%"
    }

    const openPanel = ()=>{
        panel.current.style.left = "0"
    }

  return (
    <div className='sticky top-0 z-50 flex md:hidden w-full'>

        <div className="absolute top-0 w-full h-24 backdrop-blur-2xl [mask-image:linear-gradient(to_bottom,black_40%,transparent)]"></div>

        <button onClick={()=>{openPanel()}} className='relative z-10 ml-4 mt-4'>
            <img className='invert w-10' src="/menu.svg" alt="menu" />
        </button>

        <div ref={panel} className='panel absolute z-50 flex w-[59vw] ml-2.5 mt-2.5 -left-[100vw] [transition:all_0.8s_ease]'>
            <nav className='w-full h-70 font-tech md:text-2xl m-0 bg-white text-black rounded-2xl [box-shadow:5px_5px_#000000]'>
        <ul className='flex flex-col gap-5 h-full z-10 pt-5 font-bold font-jetbrains'>
            <li className='py-1 px-3 w-full '><a className='w-full active:bg-white active:text-black' href="/">
            <div className=''>
                Home
            </div>
            </a></li>
            <li className='py-1 px-3 w-full'><a className='w-full active:bg-white active:text-black' href="/skills">
            <div className=''>
                Skills
            </div>
            </a></li>
            <li className='py-1 px-3 w-full'><a className='w-full active:bg-white active:text-black' href="/">
            <div className=''>
                Projects
            </div>
            </a></li>
            <li className='py-1 px-3 w-full'><a className='w-full active:bg-white active:text-black' href="/">
            <div className=''>
                Timeline
            </div>
            </a></li>
            <li className='py-1 px-3 w-full'><a className='w-full active:bg-white active:text-black' href="/">
            <div className=''>
                Contact
            </div>
            </a></li>
        </ul>
      </nav>
      <div onClick={()=>{closePanel()}} className='close cursor-pointer'>
        <img className='invert p-1 w-[40px] mx-2' src="/cancel.svg" alt="cancel" />
      </div>
        </div>
        
    </div>
  )
}

export default Navbar_mobile