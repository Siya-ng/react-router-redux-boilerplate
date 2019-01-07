import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import AppLayout from './scenes/AppLayout';
import RegisterForm from './scenes/RegisterForm';
import LoginForm from './scenes/LoginForm';

export default class Routes extends Component {
  render() {
    return (
      <AppLayout>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/sign-up" component={RegisterForm}/>
          <Route exact path="/sign-in" component={LoginForm}/>
        </Switch>
      </AppLayout>
    )
  }
}
