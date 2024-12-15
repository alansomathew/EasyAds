import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HouseCard = ({ images, price, title, location, description, date }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Handle navigation for the previous image
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Handle navigation for the next image
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="card shadow-sm"
      style={{
        width: "300px",
        borderRadius: "12px",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        border: "none", // Remove border
        boxShadow: "none", // Remove shadow
      
      }}
    >
      {/* Image Carousel */}
      <div
        className="position-relative"
        style={{
          height: "200px",
          backgroundColor: "#f7f7f7",
        }}
        onMouseEnter={() => setIsHovered(true)} // Show arrows on hover
        onMouseLeave={() => setIsHovered(false)} // Hide arrows when not hovered
      >
        <img
          src={images[currentImageIndex]}
          alt={`House ${currentImageIndex + 1}`}
          className="w-100 h-100"
          style={{
            objectFit: "cover",
          }}
        />
        {isHovered && images.length > 1 && (
          <>
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="position-absolute"
              style={{
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                borderRadius: "50%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
                color: "white",
                border: "none",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
              }}
            >
              <FaChevronLeft />
            </button>
            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="position-absolute"
              style={{
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                borderRadius: "50%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
                color: "white",
                border: "none",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
              }}
            >
              <FaChevronRight />
            </button>
          </>
        )}

        {/* Dots */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "4px",
          }}
        >
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentImageIndex(index)} // Change image on dot click
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor:
                  currentImageIndex === index ? "#ffffff" : "#bdbdbd", // Active dot color
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                boxShadow:
                  currentImageIndex === index
                    ? "0px 0px 4px rgba(0, 0, 0, 0.5)"
                    : "none",
              }}
            />
          ))}
        </div>
      </div>

      {/* Card Details */}
      <div className="p-3">
        {/* Price and Date */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5
            className="m-0"
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              color: "#005B96",
            }}
          >
            ₹ {price}
          </h5>
          <small className="text-muted">{date}</small>
        </div>

        {/* Title and Location */}
        <div
          className="d-flex justify-content-between align-items-center mb-1"
          style={{ fontSize: "14px" }}
        >
          <span style={{ fontWeight: "bold" }}>{title}</span>
          <span className="text-muted">{location}</span>
        </div>

        {/* Description */}
        <p
          className="text-muted small"
          style={{
            textAlign: "left",
            fontSize: "12px",
            lineHeight: "1.5",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default HouseCard;
