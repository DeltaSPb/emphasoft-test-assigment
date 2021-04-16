import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import PrivateRoute from './PrivateRoute';
import UsersPage from '../pages/UsersPage';
import UserPage from '../pages/UserPage';
import Page404 from '../pages/Page404';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/users" />
      </Route>
      <Route exact path="/auth" component={AuthPage} />
      <PrivateRoute exact path="/users" component={UsersPage} />
      <PrivateRoute exact path="/users/:id" component={UserPage} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>
);

export default App;
