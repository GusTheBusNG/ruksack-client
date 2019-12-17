import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import createStore from './state/store';

import { Home } from './pages/home';
import { Login } from './pages/login';
import { SignUp } from './pages/sign-up';

import './app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;