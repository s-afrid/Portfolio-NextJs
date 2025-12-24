import React from "react";
import Skill from "../components/skill";
import skillData from '../json/skills.json'
const page = () => {

const programming = skillData.programming;
const frontend = skillData.frontend;
const backend = skillData.backend;
const database = skillData.database;
const tools = skillData.tools;

  return (
   <div className="h-[calc(100vh-80px-20px)] xl:h-[calc(100vh-80px-20px)] md:h-[calc(100vh-80px-20px)] 2xl:h-[calc(100vh-80px-30px)] pt-15 2xl:pt-8 pb-17 2xl:pb-6 flex flex-col items-center justify-start md:w-[80%] m-auto overflow-y-auto no-scrollbar gap-10 md:gap-20 p-3">
        
      <h1 className="name font-bartle text-3xl md:text-4xl 2xl:text-5xl tracking-wider self-center md:self-start mx-2 [text-shadow:6px_8px_0px_#000000]">
        Skills
      </h1>

      <div className="frontend flex flex-col gap-4">
        <h2 className="name font-bartle text-md md:text-3xl tracking-wider self-center mx-2 [text-shadow:4px_4px_0px_#000000]">
          Programming
        </h2>
        <div className="flex flex-wrap gap-4 w-[90vw] md:w-full items-center justify-center">
          {programming.map((item) => {
            return <Skill key={item.name} name={item.name} path={item.path} />;
          })}
        </div>
      </div>

      <div className="frontend flex flex-col gap-4">
        <h2 className="name font-bartle text-md md:text-3xl tracking-wider self-center mx-2 [text-shadow:4px_4px_0px_#000000]">
          FrontEnd
        </h2>
        <div className="flex flex-wrap gap-4 w-[90vw] md:w-full items-center justify-center">
          {frontend.map((item) => {
            return <Skill key={item.name} name={item.name} path={item.path} />;
          })}
        </div>
      </div>

<div className="backend flex flex-col gap-4">
        <h2 className="name font-bartle text-md md:text-3xl tracking-wider self-center mx-2 [text-shadow:4px_4px_0px_#000000]">
                 BackEnd
        </h2>
        <div className="flex flex-wrap gap-4 w-[90vw] md:w-full items-center justify-center">
          {backend.map((item) => {
            return <Skill key={item.name} name={item.name} path={item.path} />;
          })}
        </div>
      </div>

      <div className="backend flex flex-col gap-4">
        <h2 className="name font-bartle text-md md:text-3xl tracking-wider self-center mx-2 [text-shadow:4px_4px_0px_#000000]">
                 Database
        </h2>
        <div className="flex flex-wrap gap-4 w-[90vw] md:w-full items-center justify-center">
          {database.map((item) => {
            return <Skill key={item.name} name={item.name} path={item.path} />;
          })}
        </div>
      </div>

      <div className="tools flex flex-col gap-4">
        <h2 className="name font-bartle text-md md:text-3xl tracking-wider self-center mx-2 [text-shadow:4px_4px_0px_#000000]">
                 Tools / Platforms
        </h2>
        <div className="flex flex-wrap gap-4 w-[90vw] md:w-full items-center justify-center">
          {tools.map((item) => {
            return <Skill key={item.name} name={item.name} path={item.path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
