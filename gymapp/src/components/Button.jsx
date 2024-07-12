import React from 'react'

const Button = (props) => {
    const {text, func} =props
  return (
  
      <button onClick={func} className='px-8 py-4 mx-auto rounded-md border-[2px] border-blue-400 border-solid bg-slate-950 blueshadow duration-200'>
            <p>{text}</p>
        </button>
   
  )
}

export default Button
