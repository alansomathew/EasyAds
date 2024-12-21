import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function CustomNavbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <div>
      {/* Navigation Bar */}
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#F9FAF7", // Light background color
          width: "2000px", // Full-width
          height: "53px", // Fixed height
          padding: "16px 64px 16px 287px", // Top: 16px, Right: 64px, Bottom: 16px, Left: 287px
          display: "flex",
          alignItems: "center",
          gap: "24px", // Gap between elements
          margin: "0 auto", // Center align on the page
        }}
      >
        <Container className="d-flex align-items-center" fluid>
          <Nav className="align-items-center">
            {/* All Categories Button */}
            <div
              style={{
                backgroundColor: "#FFD700", // Yellow background
                width: "199px", // Fixed width
                height: "53px", // Fixed height
                padding: "0 24px", // Left and right padding
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between", // Space between text and dropdown icon
                borderRadius: "0px", // Rounded edges
                fontWeight: "bold",
                color: "#000",
                cursor: "pointer",
              }}
              onClick={toggleDropdown}
            >
              <span>All Categories</span>
              <span style={{ fontSize: "18px" }}>▼</span>
            </div>

            {/* Other Nav Items */}
            <Nav.Link href="#" style={{ fontSize: "14px", color: "#000", marginLeft: "24px" }}>
              Cars
            </Nav.Link>
            <Nav.Link href="#" style={{ fontSize: "14px", color: "#000", marginLeft: "24px" }}>
              Bikes
            </Nav.Link>
            <Nav.Link href="#" style={{ fontSize: "14px", color: "#000", marginLeft: "24px" }}>
              Scooters
            </Nav.Link>
            <Nav.Link href="#" style={{ fontSize: "14px", color: "#000", marginLeft: "24px" }}>
              Houses and Flats (for sale)
            </Nav.Link>
            <Nav.Link href="#" style={{ fontSize: "14px", color: "#000", marginLeft: "24px" }}>
              Houses and Flats (for rent)
            </Nav.Link>
            <Nav.Link href="#" style={{ fontSize: "14px", color: "#000", marginLeft: "24px" }}>
              Plots
            </Nav.Link>
            <Nav.Link href="#" style={{ fontSize: "14px", color: "#000", marginLeft: "24px" }}>
              Agricultural Lands
            </Nav.Link>
            <Nav.Link href="#" style={{ fontSize: "14px", color: "#000", marginLeft: "24px" }}>
              Mobile
            </Nav.Link>
            <Nav.Link href="#" style={{ fontSize: "14px", color: "#000", marginLeft: "24px" }}>
              Home Appliances
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            width: "100%",
            backgroundColor: "#FFD700",
            zIndex: 1000,
            padding: "20px 0",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Container
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap", // Allow wrapping on smaller screens
              gap: "20px", // Add spacing between dropdown sections
            }}
          >
            <div>
              <h6 style={{ fontWeight: "bold", marginBottom: "10px" }}>4 Wheelers</h6>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>Cars</li>
              </ul>
              <h6 style={{ fontWeight: "bold", marginTop: "10px", marginBottom: "10px" }}>
                2 Wheelers
              </h6>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>Bikes</li>
                <li>Scooters</li>
                <li>Cycles</li>
              </ul>
              <h6 style={{ fontWeight: "bold", marginTop: "10px", marginBottom: "10px" }}>
                Other Vehicles
              </h6>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>Auto</li>
                <li>Truck</li>
              </ul>
            </div>
            <div>
              <h6 style={{ fontWeight: "bold", marginBottom: "10px" }}>Rent</h6>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>Houses and Flats</li>
                <li>Commercial Properties</li>
                <li>Plots</li>
                <li>Agricultural Lands</li>
              </ul>
            </div>
            <div>
              <h6 style={{ fontWeight: "bold", marginBottom: "10px" }}>Sale</h6>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>Houses and Flats</li>
                <li>Commercial Properties</li>
                <li>Plots</li>
                <li>Agricultural Lands</li>
              </ul>
            </div>
            <div>
              <h6 style={{ fontWeight: "bold", marginBottom: "10px" }}>Electronics</h6>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>Mobile</li>
                <li>Home Appliances</li>
              </ul>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}

export default CustomNavbar;
