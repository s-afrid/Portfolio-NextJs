import React from "react";

const Footer = () => {
  return (
    <div className="relative">
      <div className="absolute w-full mask-t-from-20% h-25 md:h-15 backdrop-blur-2xl"></div>

      <div className="flex gap-4 font-jetbrains h-30 md:h-15 items-center justify-center Z-10">
        Made with<span><img src="/heart.svg" alt="heart" /></span>and<span><img className="invert" src="/skills/next.svg" alt="next" /></span>
      </div>

      
    </div>
  );
};

export default Footer;
