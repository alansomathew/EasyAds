import React, { useState } from "react";
import { Container, Navbar, Form, InputGroup, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import { FaSearch, FaHeart, FaBell, FaCommentDots } from "react-icons/fa";

export default function AppHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulated login state
  const [searchPerformed, setSearchPerformed] = useState(false); // Search state
  const userAvatar = "https://via.placeholder.com/40"; // Placeholder user avatar

  const handleSearch = () => {
    setSearchPerformed(true); // Simulate search action
  };

  return (
    <Navbar
      expand="lg"
      variant="dark"
      style={{
        height: searchPerformed ? "100px" : "152px",
        backgroundColor: "#005B96",
        transition: "height 0.3s ease",
      }}
    >
      <Container fluid className="px-5">
        {/* Navbar Brand */}
        <Navbar.Brand href="#home" className="fw-bold text-white">
          <h1 style={{ fontSize: "1.5rem" }}>EazyAds</h1>
        </Navbar.Brand>

        {/* Search Bar */}
        <Form className="mx-auto" style={{ width: "50%" }}>
          <InputGroup
            style={{
              borderRadius: "50px",
              overflow: "hidden",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Search Location Input */}
            <Form.Control
              type="text"
              placeholder={searchPerformed ? "Kochi" : "Search location"}
              style={{
                backgroundColor: "#F9FAF7",
                border: "none",
                paddingLeft: "20px",
              }}
            />
            {/* Separator */}
            <span
              className="d-flex align-items-center"
              style={{
                backgroundColor: "#F9FAF7",
                width: "2px",
                height: "50%",
              }}
            />
            {/* Search Text Input */}
            <Form.Control
              type="text"
              placeholder={
                searchPerformed ? "Cars" : "Search Cars, Bikes and more"
              }
              style={{
                backgroundColor: "#F9FAF7",
                border: "none",
                paddingLeft: "20px",
              }}
            />
            {/* Circular Search Button */}
            <InputGroup.Text
              role="button"
              style={{
                backgroundColor: "#FFD700", // Yellow background
                border: "none",
                borderRadius: "50%", // Circular shape
                width: "40px", // Fixed width for circular appearance
                height: "40px", // Fixed height for circular appearance
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)", // Optional shadow
              }}
              onClick={handleSearch}
            >
              <FaSearch style={{ color: "white", fontSize: "16px" }} />{" "}
              {/* White search icon */}
            </InputGroup.Text>
          </InputGroup>
        </Form>

        {/* Navigation Icons */}
        <Nav className="ms-auto d-flex align-items-center">
          <Nav.Link href="#chat" className="text-white me-3">
            <FaCommentDots /> Chat
          </Nav.Link>
          <Nav.Link href="#wishlist" className="text-white me-3">
            <FaHeart /> Wishlist
          </Nav.Link>
          <Nav.Link href="#notification" className="text-white me-3">
            <FaBell /> Notification
          </Nav.Link>

          {/* Dynamic Content: Login/Avatar */}
          {isLoggedIn ? (
            <div className="d-flex align-items-center">
              <img
                src={userAvatar}
                alt="User Avatar"
                className="rounded-circle"
                style={{ width: "40px", height: "40px", cursor: "pointer" }}
              />
              <span
                className="text-white me-4"
                style={{
                  cursor: "pointer",
                  fontSize: "14px",
                  marginLeft: "10px",
                }}
              >
                ▼
              </span>
              <button
                className="btn btn-warning"
                style={{
                  fontWeight: "bold",
                  border: "none",
                  marginLeft: "10px",
                }}
              >
                + Sell
              </button>
            </div>
          ) : (
            <>
              <button
                className="btn btn-outline-light me-2"
                onClick={() => setIsLoggedIn(true)}
                style={{ fontWeight: "bold" }}
              >
                Login
              </button>
              <button
                className="btn btn-warning"
                style={{ fontWeight: "bold", border: "none" }}
              >
                + Sell
              </button>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
