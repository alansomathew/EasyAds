import React from "react";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "../common/header"; // Import the header component
import CustomNavbar from "../components/navbar"; // Import the navbar component
import Footer from "../common/footer"; // Import the footer component

const ProductDetailsPage = () => {
  return (
    <div style={{ backgroundColor: "#F9FAF7", paddingBottom: "50px" }}>
      {/* Include Header */}
      <AppHeader />

      {/* Include Navbar */}
      <CustomNavbar />

      {/* Breadcrumb */}
      <div style={{ backgroundColor: "#F9FAF7", padding: "10px 0" }}>
        <Container>
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              color: "#6c757d",
            }}
          >
            <span style={{ cursor: "pointer", color: "#005B96" }}>Home</span>
            <span style={{ margin: "0 8px" }}> &gt; </span>
            <span style={{ cursor: "pointer", color: "#005B96" }}>Cars</span>
            <span style={{ margin: "0 8px" }}> &gt; </span>
            <span style={{ cursor: "pointer", color: "#005B96" }}>
              Cars in Kerala
            </span>
            <span style={{ margin: "0 8px" }}> &gt; </span>
            <span style={{ color: "#212529", fontWeight: "bold" }}>
              Mercedes - Benz C Class
            </span>
          </nav>
        </Container>
      </div>

      {/* Main Content */}
      <Container>
        <Row>
          <Col md={8}>
            {/* Product Images */}
            <div className="mb-3" style={{ borderRadius: "16px" }}>
              <div style={{ padding: "16px", backgroundColor: "#F9FAF7" }}>
                {/* Featured Image */}
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/800x400"
                  style={{
                    borderRadius: "16px",
                    width: "100%",
                    objectFit: "cover",
                    marginBottom: "16px",
                  }}
                />
                {/* Thumbnails */}
                <div className="d-flex justify-content-between">
                  {[...Array(5)].map((_, idx) => (
                    <div
                      key={idx}
                      style={{
                        flex: "0 0 calc((100% - 32px) / 5)", // Equal width for 5 thumbnails
                        borderRadius: "12px",
                        overflow: "hidden",
                        border: "2px solid #E0E0E0", // Border for active effect
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src="https://via.placeholder.com/150"
                        style={{
                          height: "80px",
                          objectFit: "cover",
                          width: "100%",
                          borderRadius: "12px",
                        }}
                        thumbnail
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
<Card
  className="p-3"
  style={{
    borderRadius: "16px",
    marginBottom: "24px",
    backgroundColor: "#F9FAF7",
    border: "1px solid #E0E0E0", // Light border color
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)", // Subtle shadow
  }}
>
  <h5 style={{ fontWeight: "bold", color: "#212529", marginBottom: "12px", textAlign: "left"}}>
    Description
  </h5>
  <p style={{ fontSize: "14px", color: "#6c757d", lineHeight: "1.8" , textAlign: "left"}}>
    Lorem ipsum dolor sit amet consectetur. Nibh integer consequat convallis
    vel velit ligula justo. Cras pulvinar viverra senectus fringilla morbi id.
    Pulvinar non lectus posuere ultricies vel libero. Facilisis massa massa
    eget ipsum tellus turpis est aliquet morbi.
  </p>
</Card>

          </Col>

          {/* Right Section */}
          <Col md={4}>
            <div
              style={{
                position: "sticky", // Makes the section fixed while scrolling
                top: "100px", // Adjust based on header/navbar height
              }}
            >
              <Card
                className="p-4"
                style={{
                  borderRadius: "52px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  width: "100%",
                  maxWidth: "533px",
                  height: "400px",
                }}
              >
                <h3
                  style={{
                    color: "#005B96",
                    fontSize: "28px",
                    fontWeight: "bold",
                  }}
                >
                  ₹ 25,90,000
                </h3>
                <div
                  style={{
                    fontSize: "19px",
                    color: "#6c757d",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "8px",
                    marginBottom: "24px",
                    fontWeight: "bold",
                  }}
                >
                  <span>80000.0 KM</span>
                  <span>|</span>
                  <span>Diesel</span>
                  <span>|</span>
                  <span>Automatic</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "24px",
                  }}
                >
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Profile"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#005B96",
                    }}
                  >
                    Arjun AR
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <div style={{ fontSize: "14px", color: "#6c757d" }}>
                    <p style={{ marginBottom: "4px" }}>Owner</p>
                    <span style={{ fontWeight: "bold" }}>2nd</span>
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#6c757d",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <i
                      className="fa-solid fa-location-dot"
                      style={{ color: "#005B96", fontSize: "16px" }}
                    ></i>
                    <div>
                      <p style={{ marginBottom: "4px" }}>Location</p>
                      <span style={{ fontWeight: "bold" }}>Kochi</span>
                    </div>
                  </div>
                  <div style={{ fontSize: "14px", color: "#6c757d" }}>
                    <p style={{ marginBottom: "4px" }}>Posted On</p>
                    <span style={{ fontWeight: "bold" }}>20-Sep-2024</span>
                  </div>
                </div>
                {/* Updated Buttons */}
                <div
                  className="d-flex justify-content-between align-items-center mt-4"
                  style={{ gap: "16px" }}
                >
                  

                  {/* Chat with seller */}
                  <Button
                    variant="outline-primary"
                    className="flex-grow-1"
                    style={{
                      borderColor: "#005B96",
                      color: "#005B96",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      fontSize: "14px",
                      textAlign: "center",
                    }}
                  >
                     Report if sold 
                  </Button>

                  {/* Pay */}
                  <Button
                    variant="primary"
                    className="flex-grow-1"
                    style={{
                      backgroundColor: "#005B96",
                      borderColor: "#005B96",
                      color: "#fff",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      fontSize: "14px",
                      textAlign: "center",
                    }}
                  >
                    Chat with Seller
                  </Button>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Include Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
