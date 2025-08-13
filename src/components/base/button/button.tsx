import React from 'react'
import { ButtonInterface } from '@/interfaces/interfaces'
export default function Buttons({ onClick, type, className, label, disable }: ButtonInterface) {
  return (
    <div>
          <button type={type} className={className} onClick={onClick} disabled={disable}>{label}</button>
    </div>
  )
}