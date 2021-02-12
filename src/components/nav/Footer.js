import React from "react";
import Navbar from "react-bootstrap/Navbar";
import ticketmasterLogo from "../../../src/ticketmaster-logo-grey.svg";
import githubLogo from "../../../src/GitHub-Mark-120px-plus.png"

export const Footer = (props) => {
  return (
    <Navbar
      className="justify-content-end"
      bg="light"
      expand="sm"
      fixed="bottom"
    >
      <Navbar.Brand href="https://www.ticketmaster.com/" target="_blank" rel="noreferrer">
        <img
          src={ticketmasterLogo}
          className="d-inline-block align-top"
          alt="Ticketmaster Logo"
        />
      </Navbar.Brand>
      <Navbar.Brand href="https://github.com/cslunetta/musicSpot" target="_blank" rel="noreferrer">
        <img
          src={githubLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="github"
        />
      </Navbar.Brand>
      <Navbar.Text>Christopher Lunetta © 2021 </Navbar.Text>
    </Navbar>
  );
};
