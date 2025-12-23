import Image from "next/image";

export default function Home() {
  return (
   <div className="flex flex-col md:flex-row items-center justify-center h-[calc(100%-80px)]">
    <div className="profilepic">
      <img className="h-[45vh] md:h-[50vh]" src="/profilepic.png" alt="profilepic" />
    </div>
    <div className="about">
      <h1 className="name">Syed Afrid</h1>
      <p className="summary">MERN Stack & Next.js developer crafting scalable web apps with React, Node.js, and Python. Passionate about building clean UIs and high-performance digital solutions.</p>
    </div>
   </div>
  );
}
