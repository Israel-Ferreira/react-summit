import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Blog from './views/Blog';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
