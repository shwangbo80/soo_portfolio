import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";

export default function NavbarTop() {
  return (
    <Container className="mx-3">
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <p className="boldText pt-3">SOO</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <a className="navigation-link" href="#about">
                About
              </a>
              <a className="navigation-link" href="#works">
                Works
              </a>
              <a className="navigation-link" href="#contact">
                Contact
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}
