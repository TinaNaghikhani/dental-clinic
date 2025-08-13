import React from 'react'
import { InputInterface } from '@/interfaces/interfaces'
export default function Input({label,type,placeholder,className,value,disabled,id,name,error}:InputInterface) {
  return (
    <>
    <div className='flex flex-col w-full'>
      <label htmlFor="input" className='m-2'>{label}</label>
      <input type={type} className={className} placeholder={placeholder} disabled={disabled} id={id} name={name} value={value}/>
      <span className='w-full text-sm text-red-200 min-h-4 line-clamp-2'>{error}</span>
    </div>
    </>

  )
}