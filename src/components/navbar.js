import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomNavbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const closeDropdown = () => setShowDropdown(false);

  return (
    <div style={{ position: "relative", zIndex: 10 }}>
      {/* Navigation Bar */}
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#F2F2F2", // Light background color
          width: "100%", // Full width
          height: "53px", // Fixed height
          padding: "16px 64px", // Spacing
          display: "flex",
          alignItems: "center",
          position: "relative",
          zIndex: 2, // Ensure it's above the dropdown
        }}
      >
        <Container className="d-flex align-items-center" fluid>
          <Nav className="align-items-center">
            {/* All Categories Button */}
            <div
              style={{
                backgroundColor: "#FFD700", // Yellow background
                width: "200px", // Fixed width
                height: "53px", // Fixed height
                padding: "0 24px", // Padding inside button
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: "4px", // Slightly rounded edges
                fontWeight: "bold",
                color: "#000",
                cursor: "pointer",
                marginLeft: "30px",
              }}
              onClick={toggleDropdown}
            >
              <span>All Categories</span>
              <span style={{ fontSize: "18px" }}>▼</span>
            </div>

            {/* Navigation Links */}
            {[
              "Cars",
              "Bikes",
              "Scooters",
              "Houses and Flats (for sale)",
              "Houses and Flats (for rent)",
              "Plots",
              "Agricultural Lands",
              "Mobile",
              "Home Appliances",
            ].map((item, index) => (
              <Nav.Link
                key={index}
                href="#"
                style={{
                  fontSize: "14px",
                  color: "#000",
                  marginLeft: index === 0 ? "24px" : "16px", // Adjust spacing
                  fontWeight: "500",
                }}
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>

      {/* Dropdown Menu */}
      {showDropdown && (
          <div
          style={{
            position: "absolute",
            top: "53px", // Position right below the navbar
            left: "0",
            width: "100%",
            backgroundColor: "#FFD700",
            zIndex: 1000, // Increased z-index to stay above other content
            padding: "20px 0",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease", // Smooth dropdown animation
          }}
          onMouseLeave={closeDropdown} // Close dropdown on mouse leave
        >
          <Container
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap", // Allow wrapping on smaller screens
              gap: "20px", // Add spacing between dropdown sections
            }}
          >
            {/* Dropdown Sections */}
            {[
              {
                title: "4 Wheelers",
                items: ["Cars"],
              },
              {
                title: "2 Wheelers",
                items: ["Bikes", "Scooters", "Cycles"],
              },
              {
                title: "Other Vehicles",
                items: ["Auto", "Truck"],
              },
              {
                title: "Rent",
                items: [
                  "Houses and Flats",
                  "Commercial Properties",
                  "Plots",
                  "Agricultural Lands",
                ],
              },
              {
                title: "Sale",
                items: [
                  "Houses and Flats",
                  "Commercial Properties",
                  "Plots",
                  "Agricultural Lands",
                ],
              },
              {
                title: "Electronics",
                items: ["Mobile", "Home Appliances"],
              },
            ].map((section, index) => (
              <div key={index}>
                <h6
                  style={{
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  {section.title}
                </h6>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {section.items.map((item, i) => (
                    <li key={i} style={{ marginBottom: "8px" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Container>
        </div>
      )}
    </div>
  );
}

export default CustomNavbar;
