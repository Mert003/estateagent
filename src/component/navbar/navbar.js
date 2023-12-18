import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from "../../images/logo.png";

import "./navbar.css";

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  className='navbar'>
    <Container>
      <Navbar.Brand href="#home"><img src={logo} width={75} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
        
          <Nav.Link href="#gallery">Gallery</Nav.Link>
          <Nav.Link href="#qa">Q&A</Nav.Link>
          <Nav.Link href="#team">Meet Our Team</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavbarComponent;