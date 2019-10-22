import React, { useState } from 'react'
import { AuthContext } from '../context/AuthContext'
//import { Button } from 'antd'

export const Auth = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = () => {
    setIsAuthenticated(true)
  }

  const signOut = () => {
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{isAuthenticated, signIn:signIn, signOut:signOut}}>
      {props.children}
    </AuthContext.Provider>
  )
}


