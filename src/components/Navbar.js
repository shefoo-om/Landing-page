import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo from '../imgs/logos/go_language-brandlogo.net.webp'
import '../all.css'
function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className=" navbar sticky-top" >
      <Container>
        <Navbar.Brand href="#home">
          <img rel='preload' src={logo} alt="logo of website" style={{ maxHeight: '70px', margin: '-10px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav navbar-toggler" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto fw-bold">
            <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#plans">Plans</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#team" className="me-auto fw-bold" >Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#stats" className="me-auto fw-bold">Stats</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="fw-bolder ">
            <Nav.Link href="#whyus"> Why us </Nav.Link>
            <Nav.Link eventKey={2} href="#contactus">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;