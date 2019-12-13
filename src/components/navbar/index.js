import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const OurNavBar = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Ruksack</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Find</Nav.Link>
        <Nav.Link href="#results">Results</Nav.Link>
        <Nav.Link href="#create">Create</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/signup">Sign Up</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);