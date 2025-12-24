import React from 'react'

const Skill = (props) => {
  return (
    <div className='flex gap-1 bg-white w-fit px-3 py-1 rounded-xl text-black font-jetbrains [box-shadow:3px_3px_#000000]'>
        <img className='' src={props.path} alt="logo" />
        {props.name}
    </div>
  )
}

export default Skill