import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import logo from "../../Images/logo/logo (4).png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import UseFiebase from "../../Hooks/UseFirebase";
import UseAuth from "../context/UseAuth";
import "./header.css";

const Header = () => {
  const { user, logout, NewUser } = UseAuth();
  return (
    <div className="">
      <Navbar bg="light" sticky="top" expand="lg" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
            <b> Life Save Clinic</b>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={HashLink} to="/home#home">
                Home
              </Nav.Link>

              <Nav.Link as={HashLink} to="home/#contact">
                Contact
              </Nav.Link>

              <Nav.Link as={Link} to="/doctors">
                Doctor
              </Nav.Link>

              <Nav.Link as={HashLink} to="/home#service">
                Service
              </Nav.Link>

              <Nav.Link as={Link} to="/department">
                Department
              </Nav.Link>

              <Nav.Link as={HashLink} to="/home#about">
                About
              </Nav.Link>
            </Nav>

            {user?.email ? (
              <Button size="sm" className="cls-btn" onClick={logout}>
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/SignIn">
                <Button size="sm" className="cls-btn">
                  {" "}
                  Sign up{" "}
                </Button>
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
