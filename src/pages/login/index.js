import React from 'react';
import Card from 'react-bootstrap/Card';
import AuthenticateUserForm from '../../components/authenticate-user-form';

import './login.scss'

export const Login = () => (
  <div className="login">
    <h2 className="login__heading">
      Welcome back <span role="img" aria-label="wave">👋</span> <br />
      We're glad to have you!
    </h2>
    <Card>
      <Card.Body>
        <AuthenticateUserForm />
      </Card.Body>
    </Card>
  </div>
);