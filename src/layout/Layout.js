import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Header } from './Header';
import { Footer } from './Footer';
import { AuthContext } from '../context/AuthContext'
import { Authorized, unAuthorized } from '../services/Routes'


export const Layout = () => {

  const auth = useContext(AuthContext)
  
  return (
      <BrowserRouter>
        {auth.isAuthenticated ? <Header /> : null}
        {auth.isAuthenticated ? Authorized : unAuthorized}
        {auth.isAuthenticated ? <Footer /> : null}
      </BrowserRouter>
  )
}