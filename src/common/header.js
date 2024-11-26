import {Container, Navbar, Form, FormControl, InputGroup }  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import { FaSearch } from 'react-icons/fa'; 
import React from 'react';

export default function AppHeader(){
    return (
    <Navbar expand="lg" variant="dark" style={{ height: '152px', backgroundColor: '#005B96',}}>
      <Container fluid className="px-5">
        {/* Navbar Brand: Aligned to the left */}
        <Navbar.Brand href="#home" className="fw-bold text-white me-5">
          <h1>EazyAds</h1>  
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Oval Search Box with Icon */}
          <Form className="d-flex">
            <InputGroup>
              <FormControl
                type="search"
                placeholder="Search"
                className="rounded-pill"
                aria-label="Search"
                style={{ borderRadius: '30px', border: '2px solid white', paddingRight: '45px' }}
              />
              <InputGroup.Text
                className="bg-transparent border-0 position-absolute"
                style={{
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                }}
              >
                <FaSearch className="text-white" />
              </InputGroup.Text>
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}