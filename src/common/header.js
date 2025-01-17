import React, { useState } from "react";
import {
  Navbar,
  Form,
  InputGroup,
  Nav,
  Container,
  Button,
} from "react-bootstrap";
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
        style={{
          backgroundColor: "#005B96",
          height: "auto",
          padding: "10px 20px",
        }}
        variant="dark"
      >
        <Container className="d-flex justify-content-between align-items-center">
          {/* Logo */}
          <Navbar.Brand
            href="/"
            className="text-white"
            style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: "2rem",
              marginRight: "20px",
            }}
          >
            EazyAds
          </Navbar.Brand>

          {/* Centered Search Bar */}
          <Form className="d-flex flex-grow-1 justify-content-center mx-3">
            <InputGroup
              style={{
                borderRadius: "50px", // Fully rounded corners
                overflow: "hidden",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#F9FAF7", // Light background
                height: "50px", // Adjusted height
                maxWidth: "600px", // Width for centered look
                width: "100%",
              }}
            >
              {/* Left Input */}
              <Form.Control
                type="text"
                placeholder="Search location"
                style={{
                  border: "none",
                  backgroundColor: "#F9FAF7",
                  padding: "0 20px",
                  fontSize: "1rem",
                  color: "#707070", // Light gray font color
                }}
              />
              {/* Divider */}
              <div
                style={{
                  width: "1px",
                  backgroundColor: "#E0E0E0", // Divider color
                }}
              ></div>
              {/* Right Input */}
              <Form.Control
                type="text"
                placeholder="Search Cars, Bikes and more"
                style={{
                  border: "none",
                  backgroundColor: "#F9FAF7",
                  padding: "0 20px",
                  fontSize: "1rem",
                  color: "#707070", // Light gray font color
                }}
              />
              {/* Search Button */}
              <Button
                style={{
                  backgroundColor: "#F7B500", // Yellow color
                  border: "none",
                  borderRadius: "50%", // Fully rounded
                  width: "40px", // Circle button size
                  height: "40px",
                  margin: "5px", // Small margin for spacing
                }}
                onClick={handleSearchClick}
              >
                <FaSearch style={{ color: "white" }} />
              </Button>
            </InputGroup>
          </Form>

          {/* Right Section */}
          <Nav className="d-flex align-items-center">
            <Nav.Link href="#chat" className="text-white mx-2">
              <FaCommentDots size={20} />
            </Nav.Link>
            <Nav.Link className="text-white mx-2" onClick={handleWishlistClick}>
              <FaHeart size={20} />
            </Nav.Link>
            <Nav.Link className="text-white mx-2" onClick={handleAdsClick}>
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
                    backgroundColor: "#F7B500",
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
                    width: "86px",
                    height: "48px",
                    border: "2px solid white", // White border
                    borderRadius: "15px",
                    padding: "8px 14px",
                    color: "white",
                    backgroundColor: "transparent",
                    marginRight: "10px",
                  }}
                  onClick={handleLoginClick}
                >
                  Login
                </Button>
                <Button
                  style={{
                    backgroundColor: "#F7B500", // Yellow background
                    border: "none",
                    fontWeight: "bold",
                    borderRadius: "16px",
                    width: "101px",
                    height: "48px",
                    padding: "12px 24px",
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
