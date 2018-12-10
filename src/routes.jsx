import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import AppLayout from './scenes/AppLayout';

export default class Routes extends Component {
  render() {
    return (
      <AppLayout>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/sign-up" />
          <Route exact path="/sign-in" />
        </Switch>
      </AppLayout>
    )
  }
}
