import Image from "next/image";

export default function Home() {
  return (
   <div className="flex flex-col xl:flex-row items-center justify-around md:h-[calc(100%-80px-60px)] gap-7 p-3 md:w-[80%] m-auto">
    <div className="profilepic">
      <img className="h-[45vh] md:h-[50vh]" src="/profilepic.png" alt="profilepic" />
    </div>
    <div className="about flex flex-col lg:w-[80%] gap-10">
      <h1 className="name font-bartle text-2xl md:text-5xl tracking-wider self-center md:self-start mx-2 [text-shadow:6px_8px_0px_#000000]">Syed Afrid</h1>
      <p className="summary font-tech text-center md:text-left self-center md:self-start text-lg lg:text-xl">MERN Stack & Next.js developer crafting scalable web apps with React, Node.js, and Python. Passionate about building clean UIs and high-performance digital solutions.</p>

      <a className="resume flex items-center justify-center gap-2 px-3 py-1 rounded-2xl [box-shadow:5px_5px_#0c0c0c] font-tech text-center md:text-left self-center md:self-start text-lg lg:text-md bg-white text-black hover:invert [transition:all_0.8s_ease] hover:scale-105" href="https://afrid0052.hackerresume.io/a19b6aad-77f4-4d6b-a5b1-25f1060b7645" target="_blank" rel="noopener noreferrer">Resume 
      <lord-icon
    src="https://cdn.lordicon.com/gsjfryhc.json"
    trigger="hover"
    colors="primary:#000000,secondary:#000000"
    >
</lord-icon>
      </a>

    </div>
   </div>
  );
}
