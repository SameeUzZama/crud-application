import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Navbars = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">CRUD APPLICATION</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/About">
              About
            </NavLink>
            <NavLink className="nav-link" to="/Contact">
              Contact
            </NavLink>
          </Nav>
          <NavLink to="/Users/Add" className="btn btn-outline-light">
            Add User
          </NavLink>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
