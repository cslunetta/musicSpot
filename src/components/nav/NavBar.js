import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom";
import { LogoutButton } from "./Logout";

export const NavBar = (props) => {
  return (
    <Navbar bg="light" expand="sm" sticky="top">
    <Navbar.Brand as={Link} to="/"></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/interested_events">My Events</Nav.Link>
    </Nav>
    <Nav className="mr-sm-2">
      <LogoutButton />
    </Nav>
  </Navbar>
  );
};
