import React, { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function CustomNavbar({ onDropdownToggle }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    const newState = !showDropdown;
    setShowDropdown(newState);
    onDropdownToggle(newState); // Notify parent of dropdown state
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar expand="lg" style={{ backgroundColor: "#F9FAF7" }}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {/* All Categories */}
              <div
                style={{
                  position: "relative",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#FFD700", // Yellow background
                    padding: "10px 20px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    color: "#000",
                    cursor: "pointer",
                  }}
                  onClick={toggleDropdown}
                >
                  All Categories <span style={{ fontSize: "14px" }}>▼</span>
                </div>
              </div>

              {/* Other Nav Items */}
              <Nav.Link href="#">Cars</Nav.Link>
              <Nav.Link href="#">Bikes</Nav.Link>
              <Nav.Link href="#">Scooters</Nav.Link>
              <Nav.Link href="#">Houses and Flats (for sale)</Nav.Link>
              <Nav.Link href="#">Houses and Flats (for rent)</Nav.Link>
              <Nav.Link href="#">Plots</Nav.Link>
              <Nav.Link href="#">Agricultural Lands</Nav.Link>
              <Nav.Link href="#">Mobile</Nav.Link>
              <Nav.Link href="#">Home Appliances</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Dropdown */}
      {showDropdown && (
        <div
          style={{
            position: "relative", // Pin dropdown to screen
            top: "-10px", // Adjust based on navbar height
            left: "0", // Start from the leftmost screen edge
            width: "100vw", // Full screen width
            backgroundColor: "#FFD700", // Yellow background
            zIndex: 1000,
            padding: "20px 0", // Padding for spacing
          }}
        >
          <Container
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap", // Adjust content for smaller screens
            }}
          >
            {/* Dropdown Items */}
            <div>
              <h6 style={{ fontWeight: "bold" }}>4 Wheelers</h6>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>Cars</li>
              </ul>
              <h6 style={{ fontWeight: "bold", marginTop: "10px" }}>
                2 Wheelers
              </h6>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>Bikes</li>
                <li>Scooters</li>
                <li>Cycles</li>
              </ul>
              <h6 style={{ fontWeight: "bold", marginTop: "10px" }}>
                Other Vehicles
              </h6>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>Auto</li>
                <li>Truck</li>
              </ul>
            </div>
            <div>
              <h6 style={{ fontWeight: "bold" }}>Rent</h6>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>Houses and Flats</li>
                <li>Commercial Properties</li>
                <li>Plots</li>
                <li>Agricultural Lands</li>
              </ul>
            </div>
            <div>
              <h6 style={{ fontWeight: "bold" }}>Sale</h6>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>Houses and Flats</li>
                <li>Commercial Properties</li>
                <li>Plots</li>
                <li>Agricultural Lands</li>
              </ul>
            </div>
            <div>
              <h6 style={{ fontWeight: "bold" }}>Electronics</h6>
              <ul style={{ listStyle: "none", padding: 0 }}>
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
