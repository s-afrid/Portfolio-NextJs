"use client";
import React from "react";
import { useState } from "react";
import Skill from "../components/skill";

const page = () => {
  const [frontend, setfrontend] = useState([
    { name: "HTML", path: "/skills/html.svg" },
    { name: "CSS", path: "/skills/css.svg" },
    { name: "JavaScript", path: "/skills/javascript.svg" },
    { name: "React", path: "/skills/react.svg" },
    { name: "NextJS", path: "/skills/next.svg" },
    { name: "Tailwind CSS", path: "/skills/tailwindcss.svg" },
  ]);

const [backend, setbackend] = useState([
    { name: "NodeJS", path: "/skills/nodejs.svg" },
    { name: "Express", path: "/skills/expressjs.svg" },
  ]);

const [database, setdatabase] = useState([
    { name: "MongoDB", path: "/skills/mongodb.svg"},
    { name: "MySQL", path: "/skills/mysql.svg"},
    { name: "SQLite", path: "/skills/sqlite.svg"},
])

  return (
    <div className="h-[100vh] md:h-[calc(100vh-80px-100px)] flex flex-col items-center justify-center md:w-[80%] m-auto overflow-y-auto no-scrollbar gap-20 p-3">
        
      <h1 className="name font-bartle text-3xl md:text-5xl tracking-wider self-center md:self-start mx-2 [text-shadow:6px_8px_0px_#000000]">
        Skills
      </h1>

      <div className="frontend flex flex-col gap-4">
        <h2 className="name font-bartle text-md md:text-3xl tracking-wider self-center mx-2">
          FrontEnd
        </h2>
        <div className="flex flex-wrap gap-4 w-[90vw] md:w-full items-center justify-center">
          {frontend.map((item) => {
            return <Skill key={item.name} name={item.name} path={item.path} />;
          })}
        </div>
      </div>

<div className="backend flex flex-col gap-4">
        <h2 className="name font-bartle text-md md:text-3xl tracking-wider self-center mx-2">
                 BackEnd
        </h2>
        <div className="flex flex-wrap gap-4 w-[90vw] md:w-full items-center justify-center">
          {backend.map((item) => {
            return <Skill key={item.name} name={item.name} path={item.path} />;
          })}
        </div>
      </div>

      <div className="backend flex flex-col gap-4">
        <h2 className="name font-bartle text-md md:text-3xl tracking-wider self-center mx-2">
                 Database
        </h2>
        <div className="flex flex-wrap gap-4 w-[90vw] md:w-full items-center justify-center">
          {database.map((item) => {
            return <Skill key={item.name} name={item.name} path={item.path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
