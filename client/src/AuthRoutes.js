import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import userprofile from "./pages/Authorizedpages/UserProfile"

function AuthRoutes() {
  return (
    <div className="containerAuthroutes">
      <div className="main-title">
          <h3>Welcome to Palisade!</h3>
      </div>
      <div className="switch-component">
        <Switch>
          <Route path="/login" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Redirect to="/login" />
        </Switch>
      </div>
    </div>
  );
}
export default AuthRoutes;
