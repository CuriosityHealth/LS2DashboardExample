import * as React from 'react';
import { RouteProps } from 'react-router';
import { Redirect, Route } from "react-router-dom";

export interface IPrivateRouteProps extends RouteProps {
    isSignedIn: boolean;
    redirectPath: string;
}

const PrivateRoute = ({isSignedIn, redirectPath, component: Component, ...rest }: IPrivateRouteProps) => (
    <Route {...rest} render={PrivateRender(Component, isSignedIn, redirectPath)} />
);
  
const PrivateRender = (Component: any, isSignedIn: boolean, redirectPath: string) => {
    if (isSignedIn) {
        return (props: any) => {
            return <Component {...props}/>;
        };
    }
    else {
        return (props: any) => {
            return <Redirect to={{
                pathname: redirectPath,
                state: { from: props.location }
            }} />
        };
    }
};

export default PrivateRoute;