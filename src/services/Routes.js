import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
import { Home } from '../components/Home';
import { Contact } from '../components/Contact';
import { About } from '../components/About';

import { Login } from '../components/Login';


export const Authorized =  (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Redirect to="/" />
  </Switch>);

export const unAuthorized =  (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Redirect to="/" />
  </Switch>
);