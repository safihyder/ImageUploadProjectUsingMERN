import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark" style={{height:"60px"}}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-2">Navbar</NavLink>
          <Nav className="me-auto">
            <NavLink to="/register" className="text-decoration-none text-light mx-2">Register</NavLink>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}

export default Header