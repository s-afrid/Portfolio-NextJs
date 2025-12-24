import React from 'react'

const Project = ({data}) => {
  return (
    <div className='w-[95%] md:w-[60%] 2xl:w-[50%] md:h-[60%] flex flex-col items-center justify-center bg-white text-black rounded-2xl border-2 border-black p-2 [box-shadow:5px_5px_#000000]'>
        <h1 className='text-[20px] p-4 font-bartle'>{data.name}</h1>
        <img className='w-[90%] h-full rounded-2xl  border-1 border-black [box-shadow:4px_4px_#b8b6b6]' src={data.thumb} alt="thumb" />
        <p className='font-jetbrains w-[95%] text-center py-4 px-1 text-sm md:text-md font-bold'>{data.desc}</p>
        <div className='flex items-center justify-center gap-5 flex-wrap w-[80%] p-2'>
            {data.stack.map(item=>{
                return (
                    <img src={item} className='p-2 bg-gray-100 rounded-full border-1 border-black [box-shadow:4px_4px_#7d7979]' key={item} />
                )
            })}
        </div>
        <div className='flex items-center justify-center gap-10 p-1 font-tech p-2'>
        <a className='py-2 px-3 text-white bg-black rounded-full flex items-center justify-center gap-2 [transition:all_0.6s_ease] [box-shadow:4px_4px_#7d7979] hover:scale-105' href={data.src} target='_blank'>
            <lord-icon
    src="https://cdn.lordicon.com/jjxzcivr.json"
    trigger="hover"
    stroke="bold"
    colors="primary:#ffffff,secondary:#ffffff"
    >
</lord-icon>
            
            Source
            </a>
        <a className='py-2 px-3 text-white bg-black rounded-full flex items-center justify-center gap-2 [transition:all_0.6s_ease] [box-shadow:4px_4px_#7d7979] hover:scale-105' href={data.live}target='_blank'>
            <lord-icon
    src="https://cdn.lordicon.com/rpviwvwn.json"
    trigger="hover"
    stroke="bold"
    colors="primary:#ffffff,secondary:#ffffff"
    >
</lord-icon>
            Live
            </a>
        </div>
        
    </div>
  )
}

export default Project