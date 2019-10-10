import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { Router } from '../services/router/Router'

export const Layout = () =>
   <div>
      <BrowserRouter>
         <Header />
         <Router/>
         <Footer />
      </BrowserRouter>
   </div>
