import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
              <Navbar.Toggle/>
              <Navbar.Collapse>
                  <Nav className="me-auto">
                      <NavLink className="text-decoration-none" to="/"><Nav.Link href="/" as="div">Текущий</Nav.Link></NavLink>
                      <NavLink className="text-decoration-none" to="/all"><Nav.Link href="/all" as="div">Весь</Nav.Link></NavLink>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
    );
};

export default Header;