import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
import { Characters } from '../components/Characters';
import { Contact } from '../components/Contact';
import { Movies } from '../components/Movies';
import { Login } from '../components/Login';


export const Authorized =  (
  <Switch>
    <Route exact path="/" component={Characters} />
    <Route exact path="/movies" component={Movies} />
    <Route exact path="/contact" component={Contact} />
    
  </Switch>);

export const unAuthorized =  (
  <Switch>
    <Route exact path="/" component={Login} />
    <Redirect to="/" />
  </Switch>
);