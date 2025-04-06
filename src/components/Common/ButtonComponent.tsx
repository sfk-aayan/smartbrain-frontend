import React from 'react'
import { ButtonProps } from '../../types/components'

const ButtonComponent: React.FC<ButtonProps> = ({type, onClick, className, children}) => {
  return (
    <div>
      <button type={type} onClick={onClick} className={`${className}`}>{children}</button>
    </div>
  )
}

export default ButtonComponent
