import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home";
import DashboardRoutes from "./pages/Authorizedpages/Routes";
import { AuthorizedRoutes } from "./components/AuthorizedComponent";
import "./App.css";
import "./public/public.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="bodypart">
        <Switch>
          <Route exact path="/" component={Home} />
          <AuthorizedRoutes exact component={DashboardRoutes} />
          <Redirect to="/error" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
