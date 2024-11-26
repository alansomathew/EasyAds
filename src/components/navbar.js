import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'; // Ensure react-bootstrap is installed
import 'bootstrap/dist/css/bootstrap.min.css'; // Include Bootstrap CSS

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">All Categories</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Cars</Nav.Link>
          <Nav.Link href="#features">Bikes</Nav.Link>
          <Nav.Link href="#pricing">Scooters</Nav.Link>
          <Nav.Link href="#pricing">Houses and Flates(for sale)</Nav.Link>
          <Nav.Link href="#pricing">Houses and Flates(for rent)</Nav.Link>
          <Nav.Link href="#pricing">Plots</Nav.Link>
          <Nav.Link href="#pricing">Agricultural Lands</Nav.Link>
          <Nav.Link href="#pricing"> Mobile</Nav.Link>
          <Nav.Link href="#pricing">Home Appliances</Nav.Link>
        </Nav>
      </Container>
      
    </Navbar>
    
  );
};

export default CustomNavbar;
