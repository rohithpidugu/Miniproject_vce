import React from "react";
import * as Routes from "../Authorizedpages";

import { Route, Switch, Redirect } from "react-router-dom";
function DashboardRoutes() {
  return (
    <Switch>
      <Redirect exact={true} from="/main" to="/dashboard" />
      <Route path="/dashboard" component={Routes["Dashboard"]} />
      <Redirect to="/error" />
    </Switch>
  );
}
export default DashboardRoutes;
