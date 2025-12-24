import React from 'react'

const Project = ({data}) => {
  return (
    <div className='w-[95%] md:w-[60%] 2xl:w-[50%] md:h-[60%] flex flex-col items-center justify-center bg-white text-black rounded-2xl border-2 border-black'>
        <h1 className='text-[20px] p-4 font-bartle'>{data.name}</h1>
        <img className='w-[90%] h-full rounded-2xl  border-1 border-black' src={data.thumb} alt="thumb" />
        <p className='font-jetbrains w-[95%] text-center py-4 px-1 text-sm md:text-md'>{data.desc}</p>
        <div className='flex items-center justify-center gap-5 flex-wrap w-[80%]'>
            {data.stack.map(item=>{
                return (
                    <img src={item} className='p-2 bg-gray-100 rounded-full border-1 border-black' key={item} />
                )
            })}
        </div>
        <a href={data.src}>Source</a>
        <a href={data.live}>Live</a>
    </div>
  )
}

export default Project