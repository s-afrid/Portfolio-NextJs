import React from 'react'

const Skill = (props) => {
  return (
    <div className='flex gap-1 bg-white w-fit px-3 py-1 rounded-2xl text-black font-jetbrains'>
        <img className='' src={props.path} alt="logo" />
        {props.name}
    </div>
  )
}

export default Skill