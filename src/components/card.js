  import React, { useState } from "react";
  import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
  import { FaHeart, FaRegHeart } from "react-icons/fa"; // Import like icons

  const CarCard = ({
    images,
    price,
    title,
    location,
    year,
    distance,
    owners,
    date,
    onClick
  }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [liked, setLiked] = useState(false); // State for like button

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

    // Toggle Like Button
    const toggleLike = (e) => {
      e.stopPropagation(); // Prevent click propagation
      setLiked(!liked);
    };


    return (
      <div
        className="card shadow-sm"
      // Handle click to navigate
        style={{
          width: "300px",
          border: "none", // Remove border
          boxShadow: "none", // Remove shadow
          borderRadius: "16px", // Removed rounded corners
          overflow: "hidden",
          backgroundColor: "transparent", // Transparent background
          fontFamily: "'Poppins", 
          
        
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
            alt={`Car ${currentImageIndex + 1}`}
            className="w-100 h-100"
            style={{
              objectFit: "cover",
            }}
          />

          {/* Like Button */}
          <div
            onClick={toggleLike}
            style={{
              position: "absolute",
              top: "4px",
              right: "10px",
              
              padding: "10px",
              cursor: "pointer",
              boxShadow: "0px 8px 9px rgba(0, 0, 0, 0.1)",
              zIndex: 10,
            }}
          >
            {liked ? (
              <FaHeart style={{ color: "white", fontSize: "18px" }} />
            ) : (
              <FaRegHeart style={{ color: "#FFFFFF  ", fontSize: "18px" }} />
            )}
          </div>

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
                color: "#000000",
              }}
            >
              ₹ {price}
            </h5>
            <small className="text-muted">{date}</small>
          </div>

          {/* Title and Year-Distance */}
          <div
            className="d-flex justify-content-between align-items-center mb-1"
            style={{ fontSize: "14px" }}
          >
            <span style={{ fontWeight: "bold" }}>{title}</span>
            <span className="text-muted">{`${year} - ${distance} km`}</span>
          </div>

          {/* Location and Owners */}
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-muted small">{location}</span>
            <span className="text-muted small">{`No. of owners: ${owners}`}</span>
          </div>
        </div>
      </div>
    );
  };

  export default CarCard;
