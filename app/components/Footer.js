import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full">
      
      <div className="absolute inset-0 w-full h-25 backdrop-blur-2xl [mask-image:linear-gradient(to_top,black_50%,transparent)]"></div>
      <div className="relative z-10 flex gap-2 font-jetbrains h-25 items-center justify-center text-sm md:text-base">
        <span>Made with</span>
        <img src="/heart.svg" alt="heart" className="w-5 h-5" />
        <span>and</span>
        <img className="invert w-5 h-5" src="/skills/next.svg" alt="next" />
      </div>

    </footer>
  );
};

export default Footer;