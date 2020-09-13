import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthRoutes from "../AuthRoutes";

export const AuthorizedRoutes = ({ component: Component, ...rest }) => {
  const isAuthorized =  useSelector(state => state.Auth.user)!=null?true:false;
  return (
    <Route
      {...rest}
      path={!isAuthorized ? "/login" : "/main"}
      render={(props) => {
        if (!isAuthorized) {
          // not logged in so redirect to login page with the return url
          return <AuthRoutes {...props} />;
        }

        // authorised so return component
        return <Component {...props} />;
      }}
    />
  );
};
