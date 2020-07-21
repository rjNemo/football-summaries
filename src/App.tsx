import React, { FC } from "react";
import { Switch, Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Index from "./pages/Index";
import Detail from "./pages/Detail";

const App: FC = () => (
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/">
        <Index />
      </Route>

      <Route exact path="/:slug">
        <Detail />
      </Route>
    </Switch>
  </Router>
);

export default App;
