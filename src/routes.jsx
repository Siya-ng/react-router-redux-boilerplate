import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import requireAuth from './components/RequireAuth';


import AppLayout from './scenes/AppLayout';
import Register from './scenes/Register';
import Login from './scenes/Login';

export default class Routes extends Component {
  render() {
    return (
      <AppLayout>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/sign-up" component={Register}/>
          <Route exact path="/sign-in" component={Login}/>
          <Route exact path="/test" component={requireAuth(Register)} />
        </Switch>
      </AppLayout>
    )
  }
}
