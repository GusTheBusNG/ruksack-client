import React from 'react';
import Nav from 'react-bootstrap/Nav';

export const NewOrganizerForm = () => {

  return (
    <Nav variant="pills" defaultActiveKey="#company">
      <Nav.Item>
        <Nav.Link href="#company">Company</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#individual">Individual</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}