import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import Hello from './containers/Hello';
// import App from './App';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';


// ReactDOM.render(
//   <App />,
//   document.getElementById('root') as HTMLElement
// );
// registerServiceWorker();

// import { APITokenAction } from './actions';
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

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
