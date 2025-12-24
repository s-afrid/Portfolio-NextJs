"use client";
import React from "react";
import { useState } from "react";
import Project from "../components/project";
const page = () => {
  
  const [projects, setprojects] = useState([
    {name:"",}
  ])

  return (
    <div className="h-[calc(100vh-80px-90px)] xl:h-[calc(100vh-80px-70px)] md:h-[calc(100vh-80px-100px)] 2xl:h-[calc(100vh-80px-100px)] pt-12 2xl:pt-2 pb-15 2xl:pb-2 flex flex-col items-center justify-start 2xl:justify-center md:w-[80%] m-auto overflow-y-auto no-scrollbar gap-10 md:gap-20 p-3">
        
      <h1 className="name font-bartle text-3xl md:text-5xl tracking-wider self-center md:self-start mx-2 [text-shadow:6px_8px_0px_#000000]">
        Projects
      </h1>

      <div>
<Project />
      </div>
      
      
    </div>
  );
};

export default page;
