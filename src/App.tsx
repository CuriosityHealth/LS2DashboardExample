import * as React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './containers/NavBar';

import Hello from './containers/Hello';


// this should contain the initial component
// which will include the header and sub components
// let's just try to get the nav bar working today

import { Provider } from 'react-redux';
import { createStore } from 'redux';


import { apiToken } from './reducers/index';
import { IStoreState } from './types/index';

import { applyMiddleware, Dispatch, Middleware, MiddlewareAPI } from "redux";

function logger() {
  const loggerMiddleware: Middleware = ({ getState }: MiddlewareAPI) => (
    next: Dispatch
  ) => action => {

    console.log('state before dispatch', getState())

    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }

  return loggerMiddleware
}

const store = createStore<IStoreState, any, any, any>(apiToken, {
  apiToken: null
}, applyMiddleware(logger()));
  
const App = () => {

    return (
      <Provider store={store}>
        <Router>
          <div className="hello">
            <NavBar />
            <Route exact={true} path="/" component={Hello} />
          </div>
        </Router>
      </Provider>
    );
  }

  export default App;