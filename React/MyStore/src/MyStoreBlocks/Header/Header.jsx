import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import Logo from '/logo.png'
import { NavLink } from 'react-router'

function Header() {
  return (
    /* We use 'py-3' for a more premium, spacious feel and 'shadow-sm' for depth */
    <Navbar expand="lg" className="bg-success py-3 shadow-sm" variant="dark">
      <Container fluid className="px-lg-5">
        
        {/* Brand/Logo Area */}
        <Navbar.Brand className="d-flex align-items-center">
            <NavLink className={'text-decoration-none'} to={'/'}>
              <img
                  src={Logo}
                  width="40" 
                  height="40"
                  className="d-inline-block align-top me-2 rounded-5"
                  alt="MyStore Logo"
              />
              <span className="fw-bold fs-4 text-white">MyStore</span>
            </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          {/* Flexbox applied here: 
              'ms-auto' pushes the nav items to the right.
              'align-items-center' ensures links and search bar align vertically.
          */}
          <Nav className="ms-auto my-2 my-lg-0 d-flex align-items-center gap-4">
            <NavLink to="/" className="text-light text-decoration-none fw-medium">Home</NavLink>
            <NavLink to="/" className="text-light text-decoration-none fw-medium">Products</NavLink>
            <NavLink to="/" className="text-light text-decoration-none fw-medium">About</NavLink>
            <NavLink to="/" className="text-light text-decoration-none fw-medium">Contact</NavLink>
            <NavLink to="/" className="text-light text-decoration-none fw-medium">Signin</NavLink>
          </Nav>

          {/* Search Bar with d-flex */}
          <Form className="d-flex ms-lg-4 mt-3 mt-lg-0">
            <Form.Control
              type="search"
              placeholder="Search products..."
              className="me-2 rounded-pill border-0 px-3"
              aria-label="Search"
            />
            <Button variant="light" className="rounded-pill px-4 text-success fw-bold">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Header