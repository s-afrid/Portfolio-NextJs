import React from "react";

const Footer = () => {
  return (
   
    <footer className="fixed bottom-0 w-full z-50">
      
      <div className="absolute bottom-0 w-full h-30 md:h-25 2xl:h-24 backdrop-blur-2xl [mask-image:linear-gradient(to_top,black_60%,transparent)]"></div>

      <div className="relative z-10 flex gap-2 font-jetbrains h-18 md:h-15 2xl:h-24 items-center justify-center text-sm md:text-base text-gray-800 dark:text-white">
        Copyright &copy; 2025 -
        Made with
        <img src="/heart.svg" alt="heart" className="w-5 h-5 mb-1" />
        and
        <img className="invert w-5 h-5 mb-1" src="/skills/next.svg" alt="next" />
      </div>

    </footer>
  );
};

export default Footer;