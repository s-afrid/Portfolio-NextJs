import React from "react";
import Project from "../components/project";
import projectData from "../json/projects.json"
const page = () => {
  
  const projects = projectData;

  return (
     <div className="xl:h-[calc(100vh-80px-20px)] md:h-[calc(100vh-80px-20px)] 2xl:h-[calc(100vh-80px-50px)] pt-15 2xl:pt-8 pb-17 2xl:pb-6 flex flex-col items-center justify-start md:w-[80%] m-auto overflow-y-auto no-scrollbar gap-10 md:gap-20 p-3">
        
      <h1 className="name font-bartle text-3xl md:text-4xl 2xl:text-5xl tracking-wider self-center md:self-start mx-2 [text-shadow:6px_8px_0px_#000000]">
        Projects
      </h1>

      <div className="flex flex-col items-center justify-center gap-10">
            {projects.map(item=>{
              return (
                <Project key={item.name} data={item}/>
              )
            })}
            
      </div>
      
      <a className="text-lg font-tech bg-white text-black py-2 px-3 rounded-2xl [box-shadow:5px_5px_#000000] [transition:all_0.6s_ease] hover:scale-105 hover:invert" href="https://github.com/s-afrid?tab=repositories" target="_blank">Show More</a>
      
    </div>
  );
};

export default page;
