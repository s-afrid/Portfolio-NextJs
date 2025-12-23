"use client"
import React from 'react'
import { useRef } from 'react'

const Navbar_mobile = () => {

    const panel = useRef()
    
    const closePanel = ()=>{
        panel.current.style.left = "-100%"
        
    }

    const openPanel = ()=>{
        panel.current.style.left = "0"
        
    }

  return (
    <div className='relative flex md:hidden'>

        <button onClick={()=>{openPanel()}} className='ml-4 mt-4'>
            <img className='invert w-10' src="/menu.svg" alt="menu" />
        </button>

        <div ref={panel} className='panel absolute flex w-[59vw] ml-2.5 mt-2.5 -left-100  [transition:all_0.8s_ease]'>
            <nav className='w-full h-90 font-tech md:text-2xl m-0 bg-white text-black rounded-2xl [box-shadow:5px_5px_#000000]'>
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
      <div onClick={()=>{closePanel()}} className='close'>
        <img className='invert p-1 w-[40px] mx-2' src="/cancel.svg" alt="cancel" />
      </div>
        </div>
        
    </div>
  )
}

export default Navbar_mobile