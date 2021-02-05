import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export const Footer = (props) => {
  return (
    <Navbar className="justify-content-end" bg="light" expand="sm" fixed="bottom">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Brand as={Link} to="/"></Navbar.Brand>
      <Nav >
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/interested_events">
          My Events
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};
