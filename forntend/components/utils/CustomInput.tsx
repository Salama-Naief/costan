import React from 'react'

interface type{
    type:string,
    placeholder:string,
    title:string
}
function CustomInput({type,title,placeholder}:type) {
  return (
    <div className='w-full my-4'>
        <div className='my-1 text-sm font-semibold'>{title}</div>
        <input min={3} required type={type} className={`invalid:border-error valid:border-green p-2 border border-textColor-100 rounded w-full outline-none`} placeholder={placeholder}/>
    </div>
  )
}

export default CustomInput