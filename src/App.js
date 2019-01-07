import React, { Component } from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { all, fork } from 'redux-saga/effects';

import Routes from './routes';
// import StoreProvider from "./services/storeProvider"


import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import commonReducers from "./services/reducers";
import commonSagas from "./services/sagas";

const configureSaga = sagas => function* configureSagaGenerator() {
  yield all(sagas.map(saga => fork(saga)));
};
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create a redux store with our reducer above and middleware
let store = createStore(
  combineReducers({ ...commonReducers }),
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

// run the saga
sagaMiddleware.run(configureSaga([...commonSagas]));

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
        <HashRouter>
          <Routes />
        </HashRouter>
      </Provider>

      </div>
    );
  }
}

export default App;