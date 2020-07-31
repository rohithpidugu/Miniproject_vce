import React from "react";
import * as Routes from "../Authorizedpages";

import { Route, Switch, Redirect } from "react-router-dom";
function DashboardRoutes() {
  return (
    <Switch>
      <Redirect exact={true} from="/main" to="/dashboard" />
      <Route path="/dashboard" component={Routes["Dashboard"]} />
      <Route path="/createpost" component={Routes["CreatePost"]} />
      <Route path="/profile" component={Routes["Profile"]} />
      <Route
        path="/followingposts/:id?"
        component={Routes["Subscriberposts"]}
      />
      <Route path="/posts" component={Routes["Posts"]} />
      <Redirect to="/error" />
    </Switch>
  );
}
export default DashboardRoutes;
