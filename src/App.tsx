// import * as React from 'react';

// import { BrowserRouter as Router, Redirect, Route, RouteProps } from "react-router-dom";

// import NavBar from './containers/NavBar';
// import PrivateRoute from './containers/PrivateRoute';
// import SignIn from './containers/SignIn';
// import StudySummary from './containers/StudySummary';
// // import Hello from './containers/Hello';


// // this should contain the initial component
// // which will include the header and sub components
// // let's just try to get the nav bar working today

// // import { Provider } from 'react-redux';
// // import { createStore } from 'redux';


// // import { apiToken } from './reducers/index';
// // import { IStoreState } from './types/index';



// const RootRedirect = ({location}: RouteProps) => (
//   <Redirect to={{
//     pathname: "/home",
//     state: { from: location }
//   }} 
//   />
// );
// const App = () => {

//     return (
//         <Router>
//           <div className="hello">
//             <NavBar />
//             <Route exact={true} path="/" component={RootRedirect} />
//             <PrivateRoute path="/home" component={StudySummary} />
//             <Route path="/login" component={SignIn} />
//           </div>
//         </Router>
//     );
//   }

//   export default App;