import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is included

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        {/* Dropdown for "All Categories" */}
        <NavDropdown
          title="All Categories"
          id="all-categories-dropdown"
          className="fw-bold"
          style={{
            backgroundColor: "#FFD700", // Yellow button background
            color: "#000", // Black text color
            padding: "10px 15px", // Add padding for the dropdown button
            borderRadius: "5px", // Slightly rounded corners
          }}
        >
          {/* Full-Screen Yellow Background */}
          <div
            className="position-absolute start-0 w-100"
            style={{
              top: "100%", // Position below the navbar
              backgroundColor: "#FFD700", // Yellow background
              zIndex: 1000, // Ensure it stays above other content
              padding: "20px 0", // Vertical padding for spacing
              left: "0", // Stretch to the left
              right: "0", // Stretch to the right
            }}
          >
            <Container>
              <div className="row">
                {/* 4-Wheelers */}
                <div className="col">
                  <h6 className="fw-bold">4 Wheelers</h6>
                  <NavDropdown.Item href="#cars">Cars</NavDropdown.Item>
                </div>
                {/* 2-Wheelers */}
                <div className="col">
                  <h6 className="fw-bold">2 Wheelers</h6>
                  <NavDropdown.Item href="#bikes">Bikes</NavDropdown.Item>
                  <NavDropdown.Item href="#scooters">Scooters</NavDropdown.Item>
                  <NavDropdown.Item href="#cycles">Cycles</NavDropdown.Item>
                </div>
                {/* Other Vehicles */}
                <div className="col">
                  <h6 className="fw-bold">Other Vehicles</h6>
                  <NavDropdown.Item href="#auto">Auto</NavDropdown.Item>
                  <NavDropdown.Item href="#truck">Truck</NavDropdown.Item>
                </div>
                {/* Rent */}
                <div className="col">
                  <h6 className="fw-bold">Rent</h6>
                  <NavDropdown.Item href="#houses-for-rent">Houses and Flats</NavDropdown.Item>
                  <NavDropdown.Item href="#commercial-properties-for-rent">
                    Commercial Properties
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#plots-for-rent">Plots</NavDropdown.Item>
                  <NavDropdown.Item href="#agricultural-lands-for-rent">
                    Agricultural Lands
                  </NavDropdown.Item>
                </div>
                {/* Sale */}
                <div className="col">
                  <h6 className="fw-bold">Sale</h6>
                  <NavDropdown.Item href="#houses-for-sale">Houses and Flats</NavDropdown.Item>
                  <NavDropdown.Item href="#commercial-properties-for-sale">
                    Commercial Properties
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#plots-for-sale">Plots</NavDropdown.Item>
                  <NavDropdown.Item href="#agricultural-lands-for-sale">
                    Agricultural Lands
                  </NavDropdown.Item>
                </div>
                {/* Electronics */}
                <div className="col">
                  <h6 className="fw-bold">Electronics</h6>
                  <NavDropdown.Item href="#mobiles">Mobile</NavDropdown.Item>
                  <NavDropdown.Item href="#home-appliances">Home Appliances</NavDropdown.Item>
                </div>
              </div>
            </Container>
          </div>
        </NavDropdown>

        {/* Static Navbar Links */}
        <Nav className="me-auto">
          <Nav.Link href="#cars">Cars</Nav.Link>
          <Nav.Link href="#bikes">Bikes</Nav.Link>
          <Nav.Link href="#scooters">Scooters</Nav.Link>
          <Nav.Link href="#houses-for-sale">Houses and Flats (for sale)</Nav.Link>
          <Nav.Link href="#houses-for-rent">Houses and Flats (for rent)</Nav.Link>
          <Nav.Link href="#plots">Plots</Nav.Link>
          <Nav.Link href="#agricultural-lands">Agricultural Lands</Nav.Link>
          <Nav.Link href="#mobiles">Mobile</Nav.Link>
          <Nav.Link href="#home-appliances">Home Appliances</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
