import React from "react";
import Message from "../components/message";
const page = () => {
  
  const social = [
    
  ]
  
  return (
     <div className="h-[calc(100vh-80px-70px)] xl:h-[calc(100vh-80px-20px)] md:h-[calc(100vh-80px-20px)] 2xl:h-[calc(100vh-80px-30px)] pt-15 2xl:pt-8 pb-17 2xl:pb-6 flex flex-col items-center justify-start md:w-[80%] m-auto overflow-y-auto no-scrollbar gap-10 md:gap-20 p-3">
        
      <h1 className="name font-bartle text-3xl md:text-4xl 2xl:text-5xl tracking-wider self-center md:self-start mx-2 [text-shadow:6px_8px_0px_#000000]">
        Contact
      </h1>

      <Message />

      <div className="social flex flex-col gap-3">
        <h2 className="font-jetbrains text-lg text-black bg-white p-3 rounded-2xl [box-shadow:5px_5px_#000000] border border-black">Contact Me at:</h2>

      </div>
     
    </div>
  );
};

export default page;
