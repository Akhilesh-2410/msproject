import React from 'react'

const TextOutput = ({label, text, className}) => {
  return (
    <div className={`${className} font-poppins flex flex-col`}>
        <div className="font-semibold text-sm">{label}</div>
        <div className="text-lg w-full overflow-x-hidden text-ellipsis">{text}</div>
    </div>
  )
}

export default TextOutput