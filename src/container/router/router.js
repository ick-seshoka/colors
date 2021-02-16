import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../../pages/home";
import InvalidUrl from "../../pages/invalidUrl";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={InvalidUrl} />
  </Switch>
);

export default Router;
