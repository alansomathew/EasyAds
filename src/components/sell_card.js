import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Categories = ({ categories }) => {
    const navigate = useNavigate("/sell_details/1"); 
    return (
        <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // 3 cards in a row
          gap: "24px", // Spacing between cards
          padding: "24px", // Outer padding for the grid container
          justifyContent: "space-between", // Space between the cards
        }}
        >
          {categories.map((category, index) => (
            <Card
              key={index}
              style={{
                width: "421px", // Fixed width
                height: "240px", // Fixed height
                borderRadius: "32px", // Rounded corners
                padding: "24px", // Inner padding for content
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between", // Space between title and button
                background: `linear-gradient(145deg, ${category.gradientStart}, ${category.gradientEnd})`, // Linear gradient
                color: "#fff", // Text color (white)
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
              }}
            >
              {/* Title in top-left */}
              <Card.Title
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "36px",
                  color: "#005B96",
                  position: "absolute",
                  top: "15px",
                  left: "15px",
                }}
              >
                {category.title}
              </Card.Title>
    
              {/* Image */}
              <Card.Img
                 src={category.image}
                 alt={category.title}
                 style={{
                   position: "absolute", // Positioned inside the card
                   bottom: 0, // Align at the bottom
                   right: 0, // Align at the right
                   width: "300px", // Adjust image width to fit well
                   height: "300px", // Adjust height proportionally
                   objectFit: "contain", // Ensure the image fits without distortion
                   zIndex: 1, // Keep it below text content
                   
                 }}
                 onClick={() => navigate(`/sell_details/1`)} // Navigate on image click
              />
    
              {/* Button in bottom-left */}
              <Button
                onClick={category.onClick}
                style={{
                  position: "absolute",
                  bottom: "15px",
                  left: "15px",
                  border: "2px solid #005B96", // Blue border
                  borderRadius: "8px",
                  padding: "8px 20px",
                  backgroundColor: "transparent", // No background
                  color: "#005B96", // Text color matching the border
                  fontWeight: 600,
                }}
              >
                Start Selling <i className="fa-solid fa-arrow-up-right"></i>
              </Button>
            </Card>
          ))}
        </div>
      );
    };
    
export default Categories;
