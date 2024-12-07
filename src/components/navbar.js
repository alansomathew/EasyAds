import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="p-0">
      <Container fluid>
        {/* All Categories */}
        <div
          style={{
            backgroundColor: '#FFD700',
            padding: '10px 20px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Nav.Link
            href="#categories"
            className="text-dark fw-bold"
            style={{
              textDecoration: 'none',
              fontSize: '16px',
            }}
          >
            All Categories <span style={{ fontSize: '12px' }}>▼</span>
          </Nav.Link>
        </div>

        {/* Horizontal Navigation */}
        <Nav className="d-flex align-items-center ms-3">
          <Nav.Link
            href="#cars"
            className="text-dark fw-normal"
            style={{ textDecoration: 'none', fontSize: '14px', marginRight: '20px' }}
          >
            Cars
          </Nav.Link>
          <Nav.Link
            href="#bikes"
            className="text-dark fw-normal"
            style={{ textDecoration: 'none', fontSize: '14px', marginRight: '20px' }}
          >
            Bikes
          </Nav.Link>
          <Nav.Link
            href="#scooters"
            className="text-dark fw-normal"
            style={{ textDecoration: 'none', fontSize: '14px', marginRight: '20px' }}
          >
            Scooters
          </Nav.Link>
          <Nav.Link
            href="#houses-sale"
            className="text-dark fw-normal"
            style={{ textDecoration: 'none', fontSize: '14px', marginRight: '20px' }}
          >
            Houses and Flats (for sale)
          </Nav.Link>
          <Nav.Link
            href="#houses-rent"
            className="text-dark fw-normal"
            style={{ textDecoration: 'none', fontSize: '14px', marginRight: '20px' }}
          >
            Houses and Flats (for rent)
          </Nav.Link>
          <Nav.Link
            href="#plots"
            className="text-dark fw-normal"
            style={{ textDecoration: 'none', fontSize: '14px', marginRight: '20px' }}
          >
            Plots
          </Nav.Link>
          <Nav.Link
            href="#agricultural-lands"
            className="text-dark fw-normal"
            style={{ textDecoration: 'none', fontSize: '14px', marginRight: '20px' }}
          >
            Agricultural Lands
          </Nav.Link>
          <Nav.Link
            href="#mobile"
            className="text-dark fw-normal"
            style={{ textDecoration: 'none', fontSize: '14px', marginRight: '20px' }}
          >
            Mobile
          </Nav.Link>
          <Nav.Link
            href="#home-appliances"
            className="text-dark fw-normal"
            style={{ textDecoration: 'none', fontSize: '14px' }}
          >
            Home Appliances
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
