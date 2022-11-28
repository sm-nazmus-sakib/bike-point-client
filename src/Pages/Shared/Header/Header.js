import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import UseAuth from "../../../hooks/UseAuth";
import Logo from "../../../images/Logo.png";
import "./Header.css";

const Header = () => {
  const { user, logOut, isAdmin } = UseAuth();
  return (
    <div className="header">
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              alt=""
              width="130"
              height="60"
              className="mx-auto my-auto"
            />
            <strong className="ms-3"></strong>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">
              <button>Home</button>
            </Nav.Link>



            <Nav.Link as={HashLink} to="/About">
              <button>About</button>
            </Nav.Link>


            <Nav.Link as={HashLink} to="/allBikes">
              <button>All Bikes</button>
            </Nav.Link>

            <Nav.Link as={HashLink} to="/Contact">
              <button>Contact</button>
            </Nav.Link>

            <Nav.Link as={HashLink} to="/blog">
              <button>Blog</button>
            </Nav.Link>

            <Nav.Link as={HashLink} to="/User">
              <button><i class="fas fa-users"></i> Customer Dashboard</button>
            </Nav.Link>
            {isAdmin && <Nav.Link as={HashLink} to="/Admin">
              <button><i class="fas fa-user-shield"></i> Admin Dashboard</button>
            </Nav.Link>}



            {user?.displayName ? (
              <Button onClick={logOut} variant="light">
                <i className="fas fa-sign-out-alt"></i> Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                <button className="btn btn-primary"> <i className="fas fa-sign-in-alt"></i> Login</button>
              </Nav.Link>
            )}
            <Navbar.Text>
              <a href="#login" className="userName">
                {user?.displayName}  <i className="far 2x fa-user"></i>
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
