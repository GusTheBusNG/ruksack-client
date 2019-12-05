import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Home } from './pages/home';
import { Login } from './pages/login';

const App = () => (
  <Router>
    <CssBaseline />
    <div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;