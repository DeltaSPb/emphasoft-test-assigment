import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AuthForm from '../components/forms/AuthForm';
import { authSelector } from '../selectors';

const AuthPage = () => {
  const isAuth = useSelector(authSelector);

  return (
    isAuth
      ? <Redirect to="/users" />
      : (
        <div className="container vh-100">
          <div className="row h-100 justify-content-center align-content-center">
            <div className="col col-md-4">
              <AuthForm />
            </div>
          </div>
        </div>
      )
  );
};

export default AuthPage;
