import React,  { useState }  from "react";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "../common/header"; // Import the header component
import CustomNavbar from "../components/navbar"; // Import the navbar component
import Footer from "../common/footer"; // Import the footer component

const ProductDetailsPage = () => {

  const images = [
    require("../images/car/car1.jpeg"),
    require("../images/car/car2.jpeg"),
    require("../images/car/car3.jpeg"),
    require("../images/car/car4.jpeg"),
    require("../images/car/car5.jpeg"),
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

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
            <span style={{ cursor: "pointer", color: "#292D32" }}>Home</span>
            <span style={{ margin: "0 8px" }}> &gt; </span>
            <span style={{ cursor: "pointer", color: "#292D32" }}>Cars</span>
            <span style={{ margin: "0 8px" }}> &gt; </span>
            <span style={{ cursor: "pointer", color: "#292D32" }}>
              Cars in Kerala
            </span>
            <span style={{ margin: "0 8px" }}> &gt; </span>
            <span style={{ color: "#212529" }}>
              Mercedes - Benz C Class
            </span>
          </nav>
        </Container>
      </div>

      {/* Main Content */}
      <Container>
        <Row>
        <h2 style={{fontFamily: "'Poppins",
      fontWeight: 600,
      fontSize: "32px",
      textAlign: "left",
      lineHeight: "48px", color: "#005B96" }}>
    Mercedes - Benz C Class (2015)
  </h2>
          <Col md={8}>
            {/* Product Images */}
            <div className="mb-3" style={{ borderRadius: "16px" }}>
              <div style={{ padding: "16px", backgroundColor: "#F9FAF7" }}>
                {/* Featured Image */}
                <Card.Img
                  variant="top"
                  src={selectedImage}
                  style={{
                    borderRadius: "32px",
                    width: "825px",
                    height: "372px",
                    objectFit: "cover",
                    marginBottom: "16px",
                  }}
                />
                 {/* Thumbnail Images */}
                 <div className="d-flex justify-content-between mt-3">
                  {images.map((image, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedImage(image)}
                      style={{
                        flex: "0 0 calc((100% - 32px) / 5)",
                        borderRadius: "12px",
                        overflow: "hidden",
                        cursor: "pointer",
                        border: selectedImage === image ? "2px solid #005B96" : "2px solid #E0E0E0",
                      }}
                    >
                      <Image
                        src={image}
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
                    fontSize: "48px",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  ₹ 25,90,000
                </h3>
                <div
                  style={{
                    fontSize: "19px",
                    color: "#292D32",
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
                  src={require("../images/person1.jpg")}
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
    alignItems: "flex-start", 
    justifyContent: "space-between",
    marginBottom: "16px",
    gap: "8px", // Adjust gap between icon and text
  }}
>
  {/* Icon added on the left */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "8px", // Space between the icon and text
    }}
  >
     <i className="fa-solid fa-person" style={{ fontSize: "24px", color: "#6c757d" }}></i>
    {/* Text container */}
  <div style={{ fontSize: "14px", color: "#6c757d", display: "flex", flexDirection: "column" }}>
    <p style={{ marginBottom: "0" }}>Owner</p>
    <span style={{ fontWeight: "bold" }}>2nd</span>
  </div>
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
                      style={{ color: "#6c757d", fontSize: "24px" }}
                    ></i>
                    <div>
                      <p style={{ marginBottom: "4px" }}>Location</p>
                      <span style={{ fontWeight: "bold" }}>Kochi</span>
                    </div>
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
                      className="fa-solid fa-calendar-days"
                      style={{ color: "#6c757d", fontSize: "20px" }}
                    ></i>
                  <div style={{ fontSize: "14px", color: "#6c757d" }}>
                    <p style={{ marginBottom: "4px" }}>Posted On</p>
                    <span style={{ fontWeight: "bold" }}>20-Sep-2024</span>
                  </div>
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
