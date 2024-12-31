import React, { useState } from "react";
import { Navbar, Form, InputGroup, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaCommentDots, FaHeart, FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LoginModal from "../components/login_signup"; // Import the LoginModal component

export default function Header() {
  const [isLoggedIn] = useState(false); // Removed setIsLoggedIn since it was unused
  const [showLoginModal, setShowLoginModal] = useState(false); // State for Login Modal
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/listing");
  };

  const handleLoginClick = () => {
    setShowLoginModal(true); // Open Login Modal
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false); // Close Login Modal
  };

  const handleSellClick = () => {
    navigate("/sell");
  };

  const handleWishlistClick = () => {
    navigate("/wishlist");
  };

  const handleAdsClick = () => {
    navigate("/ads");
  };


  return (
    <>
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#005B96", height: "auto", padding: "10px 0" }}
        variant="dark"
      >
        <Container className="d-flex flex-column flex-lg-row align-items-center">
          {/* Logo */}
          <Navbar.Brand
            href="/"
            className="text-white"
            style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: "2rem",
            }}
          >
            EazyAds
          </Navbar.Brand>

          {/* Centered Search Bar */}
          <Form className="d-flex justify-content-center flex-grow-1 my-3 my-lg-0">
            <InputGroup
              style={{
                borderRadius: "30px",
                overflow: "hidden",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#F9FAF7",
                height: "50px",
                maxWidth: "600px",
                width: "100%",
              }}
            >
              <Form.Control
                type="text"
                placeholder="Search location"
                style={{
                  border: "none",
                  backgroundColor: "#F9FAF7",
                  padding: "10px 15px",
                }}
              />
              <div
                style={{
                  width: "1px",
                  backgroundColor: "#E0E0E0",
                }}
              ></div>
              <Form.Control
                type="text"
                placeholder="Search Cars, Bikes and more"
                style={{
                  border: "none",
                  backgroundColor: "#F9FAF7",
                  padding: "10px 15px",
                }}
              />
              <Button
                style={{
                  backgroundColor: "#FFD700",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                }}
                onClick={handleSearchClick}
              >
                <FaSearch style={{ color: "white" }} />
              </Button>
            </InputGroup>
          </Form>

          {/* Right Section */}
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="#chat" className="text-white mx-2">
              <FaCommentDots size={20} />
            </Nav.Link>
            <Nav.Link className="text-white mx-2" onClick={handleWishlistClick}>
              <FaHeart size={20} />
            </Nav.Link>
            <Nav.Link className="text-white mx-2"  onClick={handleAdsClick}>
              <FaBell size={20} />
            </Nav.Link>

            {isLoggedIn ? (
              <div className="d-flex align-items-center">
                <img
                  src="https://via.placeholder.com/40"
                  alt="User Avatar"
                  className="rounded-circle"
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "10px",
                  }}
                />
                <Button
                  style={{
                    backgroundColor: "#FFD700",
                    border: "none",
                    fontWeight: "bold",
                  }}
                  onClick={handleSellClick}
                >
                  + Sell
                </Button>
              </div>
            ) : (
              <>
                <Button
                  variant="outline-light"
                  style={{
                    fontWeight: "bold",
                    width: "86px", // Hug width
                    height: "48px", // Fixed height
                    border: "4px solid white", // Thick white border
                    borderRadius: "15px",
                    padding: "8px 14px", // Adjusted padding
                    color: "white",
                    backgroundColor: "transparent",
                    marginRight: "10px", // Add gap to the right
                  }}
                  onClick={handleLoginClick} // Open login modal on click
                >
                  Login
                </Button>
                <Button
                  style={{
                    backgroundColor: "#FFD700", // Yellow background
                    border: "none",
                    fontWeight: "bold",
                    borderRadius: "16px", // Rounded corners
                    width: "101px", // Fixed width
                    height: "48px", // Fixed height
                    padding: "12px 24px", // Padding: Top/Bottom: 12px, Left/Right: 24px
                    gap: "4px", // Gap for internal spacing if needed
                  }}
                  onClick={handleSellClick}
                >
                  + Sell
                </Button>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>

      {/* Login Modal */}
      <LoginModal show={showLoginModal} onClose={handleCloseLoginModal} />
    </>
  );
}
