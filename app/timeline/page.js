import React from "react";
import Timeline from "../components/timelineui";
import experienceData from "../json/experience.json"
const page = () => {
  
  const experience = experienceData;

  return (
     <div className="xl:h-[calc(100vh-80px-20px)] md:h-[calc(100vh-80px-20px)] 2xl:h-[calc(100vh-80px-50px)] pt-15 2xl:pt-8 pb-17 2xl:pb-6 flex flex-col items-center justify-start md:w-[80%] m-auto overflow-y-auto no-scrollbar gap-10 md:gap-20 p-3">
        
      <h1 className="name font-bartle text-3xl md:text-4xl 2xl:text-5xl tracking-wider self-center md:self-start mx-2 [text-shadow:6px_8px_0px_#000000]">
        Timeline
      </h1>

    <Timeline data={experience} />
     
    </div>
  );
};

export default page;
