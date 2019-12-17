import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import NewUserForm from '../../components/new-user-form';
import { NewOrganizerForm } from '../../components/new-organizer-form';

import './sign-up.scss';

export const SignUp = () => {
  const [signUpSheet, setSignUpSheet] = useState('user');

  return (
    <div className="sign_up">
      <h2 className="sign_up__heading">
        Hello <span role="img" aria-label="wave">👋</span> <br />
        We hope you join us!
      </h2>
      <Card>
        <Card.Header>
          <Nav fill variant="tabs" defaultActiveKey="#user">
            <Nav.Item>
              <Nav.Link
                href="#user"
                onClick={() => setSignUpSheet('user')}>
                  User
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                href="#organizer"
                onClick={() => setSignUpSheet('organizer')}>
                  Organizer
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        
        <Card.Body>
          {signUpSheet === 'user' ? <NewUserForm /> : <NewOrganizerForm />}
        </Card.Body>
      </Card>
    </div>
  );
}