import React from 'react'
import { AuthProp } from '../../types/components'

const AuthContainer: React.FC<AuthProp> = ({children}) => {
  return (
    <div className='w-full'>
      {children}
    </div>
  )
}

export default AuthContainer
