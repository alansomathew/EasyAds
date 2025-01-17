import React from "react";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import AppHeader from "../common/header"; // Import the header component
import Footer from "../common/footer"; // Import the footer component
import Categories from "../components/sell_card";

const SellPage = () => {
  const navigate = useNavigate();
  const categories = [
    {
      title: "4 Wheelers",
      image: require('../images/sell/sell1.png'),// Replace with actual image path
      color: "#FFF6E5",
      gradientStart: "#D4E157",// Light Pink
      gradientEnd: "#FFFFFF", // Deep Pink
    
    },
    {
      title: "2 Wheelers",
      image: require('../images/sell/sell2.png'), // Replace with actual image path
      color: "#FFE6C4",
      gradientStart: "#FFA726",// Light Pink
      gradientEnd: "#FFFFFF", // Deep Pink
    },
    {
      title: "Other Vehicles",
      image: require('../images/sell/sell3.png'), // Replace with actual image path
      color: "#E6F3FF",
      gradientStart: "#42A5F5",// Light Pink
      gradientEnd: "#FFFFFF", // Deep Pink
    },
    {
      title: "Properties",
      image: require('../images/sell/sell4.png'), // Replace with actual image path
      color: "#E5FFE5",
      gradientStart: "#66BB6A",// Light Pink
      gradientEnd: "#FFFFFF", // Deep Pink
    },
    {
      title: "Electronics",
      image: require('../images/sell/sell5.png'), // Replace with actual image path
      color: "#FFF3E5",
      gradientStart: "#FFCA28",// Light Pink
      gradientEnd: "#FFFFFF", // Deep Pink
    },
  ];
  
  const handleCardClick = (carId) => {
    navigate(`/sell_details/1`, { state: { carId } }); // Navigate to details page with carId
  };


  return (
    <div style={{ backgroundColor: "#F9FAF7", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Include Header */}
      <AppHeader />

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
            <span style={{ color: "#212529" }}>Sell</span>
          </nav>

          {/* Back Button */}
          <Button
             onClick={() => navigate(-1)}
             style={{
               marginTop: "20px",
               backgroundColor: "transparent",
               border: "none",
               color: "#292D32",
               fontWeight: "bold",
               padding: 0,
               display: "flex",
              alignItems: "center",
             }}
           >
            <i className="fa-solid fa-arrow-left" style={{ marginRight: "8px" }}></i>
            Back
          </Button>
        </Container>
      </div>

       {/* Main Content */}
       <div style={{ flex: 1, padding: "20px" }}>
        <Container>
          {/* Post Your Ad Title */}
          <h1
            style={{
              width: "205px",
              height: "48px",
              marginLeft: "2px",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "32px",
              lineHeight: "48px",
              color: "#005B96",
            }}
          >
            Post Your Ad
          </h1>
          <p style={{  width: "174px",
              height: "27px",
              marginLeft: "605px",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "27px",
              color: "#717C89", }}>
            Choose a category
          </p>

          <Categories categories={categories} />
        </Container>
      </div>

      

      {/* Include Footer */}
      <Footer />
    </div>
  );
};

export default SellPage;
