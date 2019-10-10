import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Home} from '../../components/Home'
import {About} from '../../components/About'
import {Contact} from '../../components/Contact'

export const isAuthenticated= () => 

<Switch>
   <Route exact path="/" component={Home}/>
   <Route path="/home" component={Home}/>
   <Route path="/about" component={About}/>
   <Route path="/contact" component={Contact}/>
   <Redirect path="/" component={Home}/>
</Switch>