"use client"
import { submitActions } from "../actions/message";
import { useRef } from "react";
import React from 'react'

const Message = () => {
     const ref = useRef()
  return (
    <div className="bg-gray-800 p-4 rounded-2xl w-[95%] md:w-[60%] 2xl:w-[50%] border border-white [box-shadow:3px_3px_#ffffff]">

        <h3 className="font-jetbrains text-xl tracking-wider mb-3">Please leave a message</h3>
        <form className="flex flex-col gap-4 w-full" ref={ref} action={(e)=>{submitActions(e); ref.current.reset()}}>

        <div className="flex gap-2 justify-between font-tech">
        <label htmlFor="name">Name</label>
        <input type="text" className="text-white bg-gray-700 w-[260px] md:w-[85%] rounded-xl p-3 ring-1 ring-gray-500" name="name" id="name" placeholder="Enter your name" />
        </div>

        <div className="flex gap-2 justify-between font-tech">
          <label htmlFor="email">Email</label>
        <input type="text" className="text-white bg-gray-700 w-[250px] md:w-[85%] rounded-xl p-3 ring-1 ring-gray-500" name="email" id="email" placeholder="Enter email address"/>
        </div>

        <div className="flex gap-2 justify-between font-tech">
          <label htmlFor="message">Message</label>
        <textarea className="text-white bg-gray-700 w-[230px] md:w-[85%] h-[100px] rounded-xl p-3 ring-1 ring-gray-500" name="message" id="message" placeholder="Your message"/>
        </div>
        <div>
          <button className="bg-white text-black p-2 w-[100px] rounded-3xl font-tech [box-shadow:3px_3px_#8e9091] hover:scale-105 transition-transform duration-300 cursor-pointer">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Message