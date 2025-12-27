import React from "react";
import Message from "../components/message";
const page = () => {
  
  const social = [
    {logo:"/social/linkedin.svg",site:"https://www.linkedin.com/in/syed-afrid-093877227"},
    {logo:"/social/github.svg",site:"https://github.com/s-afrid"},
    {logo:"/social/email.svg",site:"afrid0052@gmail.com"},
    {logo: "/social/discord.svg",site:"https://discord.com/users/1210205301744345161"}
  ]
  
  return (
     <div className="xl:h-[calc(100vh-80px-20px)] md:h-[calc(100vh-80px-20px)] 2xl:h-[calc(100vh-80px-50px)] pt-15 2xl:pt-8 pb-17 2xl:pb-6 flex flex-col items-center justify-start md:w-[80%] m-auto overflow-y-auto no-scrollbar gap-10 md:gap-20 p-3">
        
      <h1 className="name font-bartle text-3xl md:text-4xl 2xl:text-5xl tracking-wider self-center md:self-start mx-2 [text-shadow:6px_8px_0px_#000000]">
        Contact
      </h1>

      <Message />

      <div className="social flex flex-col gap-5 items-center">
        <h2 className="font-jetbrains text-lg text-black bg-white p-3 rounded-2xl [box-shadow:5px_5px_#000000] border border-black w-fit">Reach me</h2>

        <div className="log flex items-center justify-center gap-7">
          <a href={social[0].site} target="_blank">
            <img className="hover:scale-107 transition-transform duration-300" src={social[0].logo} alt="linkedin"/>
          </a>
          <a href={social[1].site} target="_blank">
            <img className="hover:scale-107 transition-transform duration-300" src={social[1].logo} alt="github"/>
          </a>
          <a href={`mailto:${social[2].site}`}>
            <img className="hover:scale-107 transition-transform duration-300" src={social[2].logo} alt="email" />
          </a>
          <a href={`${social[3].site}`} target="_blank">
            <img className="hover:scale-107 transition-transform duration-300" src={social[3].logo} alt="email" />
          </a>
        </div>
      </div>
     
    </div>
  );
};

export default page;
