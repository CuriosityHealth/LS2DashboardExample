// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';



// import createHistory from 'history/createBrowserHistory';
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { Route, Router } from 'react-router';

// // import { syncHistoryWithStore } from 'react-router-redux'

// import { applyMiddleware, Dispatch, Middleware, MiddlewareAPI } from "redux";


// // import reduxThunk from 'redux-thunk';
// import { Provider } from 'react-redux';
// // import {reducers} from './reducers'


// // import Hello from './containers/Hello';
// // import App from './App';
// import './index.css';
// // import registerServiceWorker from './registerServiceWorker';


// // ReactDOM.render(
// //   <App />,
// //   document.getElementById('root') as HTMLElement
// // );
// // registerServiceWorker();

// // import { APITokenAction } from './actions';
// import { apiToken } from './reducers/index';
// import { IStoreState } from './types/index';





// function logger() {
//   const loggerMiddleware: Middleware = ({ getState }: MiddlewareAPI) => (
//     next: Dispatch
//   ) => action => {

//     console.log('state before dispatch', getState())

//     console.log('will dispatch', action)

//     // Call the next dispatch method in the middleware chain.
//     const returnValue = next(action)

//     console.log('state after dispatch', getState())

//     // This will likely be the action itself, unless
//     // a middleware further in chain changed it.
//     return returnValue
//   }

//   return loggerMiddleware
// }

// const history = createHistory();

        
// const store = createStore<IStoreState, any, any, any>(apiToken, {
//   apiToken: null
// }, applyMiddleware(logger()));




// ReactDOM.render(
//   <Provider store={store}>
//     <div>
//       <Router history={history}>

//         <Route path="/" component={App}>
//           <IndexRoute component={LoginContainer}/>
//           <Route path="login" component={LoginContainer}/>
//           <Route path="student-list" component={StudentListContainer}/>
//           <Route path="student-detail" component={StudentDetailContainer}/>
//         </Route>
//       </Router>
//     </div>
//   </Provider>,
//   document.getElementById('root') as HTMLElement
// );

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';

import { createStore } from 'redux';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import thunk, { ThunkMiddleware } from 'redux-thunk';

import { Provider } from 'react-redux';

import rootReducer from './reducers/index';
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

// const thunkMiddleware = thunk as ThunkMiddleware<IStoreState, any>

// const middlewares: [Middleware] = [
//     logger(),
//     thunk as ThunkMiddleware<IStoreState, any>
// ]


// // WHITELIST
// const persistConfig = {
//     key: 'root',
//     storage: storageSession,
//     whitelist: ['auth.apiToken'] // only navigation will be persisted
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore<IStoreState, any, any, any>(rootReducer, applyMiddleware(logger(), thunk as ThunkMiddleware<IStoreState, any>));

const persistor = persistStore(store)

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>, document.getElementById('root'));
// registerServiceWorker();