import React, { FC } from "react";
import { Switch, Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import MainLayout from "./layouts/MainLayout";

import Index from "./pages/Index";
import Detail from "./pages/Detail";

const App: FC = () => (
  <Router history={createBrowserHistory()}>
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>

        <Route exact path="/:slug">
          <Detail />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default App;
