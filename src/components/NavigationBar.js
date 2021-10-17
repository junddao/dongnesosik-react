import React from "react";

import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavigationBar = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">
        <span>동내</span>
        <span style={{ color: "red" }}>소식</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* <Nav.Link to="/">Home</Nav.Link> */}
          {/* <Nav.Link href="#/Services">Services</Nav.Link>
          <Nav.Link href="#/Contact">Contact</Nav.Link> */}
          <li class="nav-item">
            <Link to="/" class="nav-link">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/Services" class="nav-link">
              Services
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/Contact" class="nav-link">
              Contact
            </Link>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  // <Navbar bg="light" expand="lg">
  //   <Container>
  //     <Navbar.Brand href="/">
  //       <span>동내</span>
  //       <span style={{ color: "red" }}>소식</span>
  //     </Navbar.Brand>
  //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //     <Navbar.Collapse id="basic-navbar-nav">
  //       <Nav className="me-auto">
  // <Nav.Link href="/">Home</Nav.Link>
  // <Nav.Link href="/Services">Services</Nav.Link>
  // <Nav.Link href="/Contact">Contact</Nav.Link>
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Container>
  // </Navbar>
);
