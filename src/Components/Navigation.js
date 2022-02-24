import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
    <div>
    <Navbar className='my_nav' collapseOnSelect expand="lg" >
  <Container className='my_nav'>
  {/* <Navbar.Brand href="#home" style={{color: 'white'}}><NavLink exact to="/"> <img src={img} alt="Logo" /></NavLink> </Navbar.Brand> */}
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto"> 
      <Nav.Link><NavLink exact to="/" className="nav_link_items">Home</NavLink> </Nav.Link>
      <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
        <NavDropdown.Item><NavLink exact to="/portfolio" className="nav_link_items nav_link_items_d  ">Web Applications</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink exact to="/portfolio" className="nav_link_items nav_link_items_d">Web Designing</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink exact to="/portfolio" className="nav_link_items nav_link_items_d">Custom Themes</NavLink></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item><NavLink exact to="/contact-us" className="nav_link_items nav_link_items_d">Make Your Website</NavLink></NavDropdown.Item>
      </NavDropdown>
      <Nav.Link><NavLink exact to="/about-me" className="nav_link_items">About</NavLink></Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link><NavLink exact to="/service" className="nav_link_items">Services</NavLink></Nav.Link>
      {/* <Nav.Link href="/Portfolio">Blog</Nav.Link> */}
      <Nav.Link><NavLink exact to="/contact-us" className="nav_link_items">Contact</NavLink></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>

    



  
</>
  )
}

export default Navigation
