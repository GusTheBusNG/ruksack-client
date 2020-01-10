import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../state/actions/user';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import isEmail from 'validator/es/lib/isEmail';

const NewUserForm = ({ signUp, loading, error, data }) => {
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

    signUp({
      email: form['formBasicEmail'].value,
      password: form['formBasicPassword'].value
    });
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        { loading ? "Loading..." : "Submit" }
      </Button>
    </Form>
  );
}

const mapStateToProps = state => ({
  loading: state.signUp.loading,
  error: state.signUp.error,
  data: state.signUp.data
});

const mapDispatchToProps = { signUp: actions.signUp }

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);