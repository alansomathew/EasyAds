import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#005B96", padding: "40px 0", color: "#FFFFFF" }}>
      <div className="container">
        <div className="row d-flex justify-content-between">
          {/* Left Section: Logo and Social Links */}
          <div className="col-lg-3 col-md-6 text-start">
            <h3 style={{ fontSize: "32px",fontFamily: "Georgia, serif",
              fontStyle: "italic", }}>EazyAds</h3>
            <p className="mt-4">FOLLOW US</p>
            <div className="d-flex">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
                style={{ color: "white", fontSize: "20px", textDecoration: "none" }}
              >
                <i class="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
                style={{ color: "white", fontSize: "20px", textDecoration: "none" }}
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", fontSize: "20px", textDecoration: "none" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Middle Section: Popular Products */}
          <div className="col-lg-3 col-md-6 text-start">
            <h5 style={{ fontSize: "18px", fontWeight: "bold" }}>Popular Products</h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <a href="/cars" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                  Cars
                </a>
              </li>
              <li className="mb-2">
                <a href="/bike" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                  Bike
                </a>
              </li>
              <li className="mb-2">
                <a href="/scooter" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                  Scooter
                </a>
              </li>
              <li>
                <a href="/apartment" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                  Apartment
                </a>
              </li>
            </ul>
          </div>

          {/* Middle Section: Popular Locations */}
          <div className="col-lg-3 col-md-6 text-start">
            <h5 style={{ fontSize: "18px", fontWeight: "bold" }}>Popular Locations</h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <a href="/mumbai" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                  Mumbai
                </a>
              </li>
              <li className="mb-2">
                <a href="/chennai" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                  Chennai
                </a>
              </li>
              <li className="mb-2">
                <a href="/bangalore" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                  Bangalore
                </a>
              </li>
              <li className="mb-2">
                <a href="/delhi" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                  Delhi
                </a>
              </li>
              <li>
                <a href="/kolkata" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                  Kolkata
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section: About Us */}
          <div className="col-lg-3 col-md-6 text-start">
            <h5 style={{ fontSize: "18px", fontWeight: "bold" }}>About Us</h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <a href="/service" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                  Service
                </a>
              </li>
              <li className="mb-2">
                <a href="/policy" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                  Our Policy
                </a>
              </li>
              <li>
                <a href="/customer-care" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                  Customer Care
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
