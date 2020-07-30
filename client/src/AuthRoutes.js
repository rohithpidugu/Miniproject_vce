import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

function AuthRoutes() {
  return (
    <div className="containerAuthroutes">
      <div className="main-title">
        <div>
          <h3>Welcome to Palisade!</h3>
        </div>
      </div>
      <div className="switch-component">
        <Switch>
          <Route path="/login" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Redirect to="/error" />
        </Switch>
      </div>
    </div>
  );
}
export default AuthRoutes;
