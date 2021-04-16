/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelector } from '../selectors';
import Header from './Header';
import Main from './Main';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector(authSelector);

  return (
    <Route
      {...rest}
      render={(props) => (isAuth ? (
        <>
          <Header />
          <Main>
            <Component {...props} />
          </Main>
        </>
      ) : (
        <Redirect to="/auth" />
      ))}
    />
  );
};

export default PrivateRoute;
