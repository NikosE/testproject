import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const Login = () => {
  const auth = useContext(AuthContext)

  return (
    <form onSubmit={auth.signIn}>
      <input
        type="text"
        id="username"
        placeholder="Username" /><br />
      <input
        type="password"
        id="password"
        placeholder="Password" /><br />
      <button type="submit" >Login</button>
    </form>
  )
}


