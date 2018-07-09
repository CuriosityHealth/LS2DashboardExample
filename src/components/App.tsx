import * as React from 'react';

import { BrowserRouter as Router, Redirect, Route, RouteProps } from "react-router-dom";


import PrivateRoute from '../components/PrivateRoute';

import NavBar from '../containers/NavBar';
import SignIn from '../containers/SignIn';
import StudySummary from '../containers/StudySummary';

export interface IAppProps {
    isSignedIn: boolean;
  }

const RootRedirect = ({location}: RouteProps) => (
  <Redirect to={{
    pathname: "/home",
    state: { from: location }
  }} 
  />
);

const App = ({isSignedIn}: IAppProps) => {
  console.log(isSignedIn);
    return (
        <Router>
          <div className="hello">
            <NavBar />
            <Route exact={true} path="/" component={RootRedirect} />
            <PrivateRoute path="/home" redirectPath="/login" isSignedIn={isSignedIn} component={StudySummary} />
            <Route path="/login" component={SignIn} />
          </div>
        </Router>
    );
  }

  export default App;