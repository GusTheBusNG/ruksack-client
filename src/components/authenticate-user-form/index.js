import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../state/actions/user';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import isEmail from 'validator/es/lib/isEmail';

const AuthenticateUserForm = ({ authenticate, loading, error, data }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    isEmail(form['formBasicEmail'].value)

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    authenticate({
      email: form['formBasicEmail'].value,
      password: form['formBasicPassword'].value
    });
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        { loading ? "Loading..." : "Login" }
      </Button>
    </Form>
  );
}

const mapStateToProps = state => ({
  loading: state.authenticate.loading,
  error: state.authenticate.error,
  data: state.authenticate.data
});

const mapDispatchToProps = { authenticate: actions.authenticate }

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateUserForm);