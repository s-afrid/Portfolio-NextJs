import React from "react";

const Footer = () => {
  return (
   
    <footer className="fixed bottom-0 w-full z-50">

      <div className="relative z-10 flex gap-2 font-jetbrains h-15 bg-black items-center justify-center text-sm md:text-base text-gray-800 dark:text-white">
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