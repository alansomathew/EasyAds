import React, { useState } from "react";
import { FaHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const CarCard = ({
  images = [],
  price,
  title,
  location,
  year,
  distance,
  owners,
  date,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const defaultImage = "https://via.placeholder.com/300x200?text=No+Image";

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div
      className=" shadow-sm h-100"
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        width: "300px", // Fixed card width
      }}
    >
      {/* Image Carousel */}
      <div
        className="position-relative"
        style={{
          height: "160px", // Reduced height for compact design
        }}
      >
        <img
          src={images.length > 0 ? images[currentImageIndex] : defaultImage}
          alt={`Car ${currentImageIndex + 1}`}
          className="card-img-top"
          style={{
            height: "160px",
            width: "100%",
            objectFit: "cover",
          }}
        />

        {/* Heart Icon */}
        <FaHeart
          role="button"
          aria-label="Like"
          className={`position-absolute ${isLiked ? "text-danger" : "text-white"}`}
          style={{
            top: "12px",
            right: "12px",
            fontSize: "20px",
            cursor: "pointer",
          }}
          onClick={toggleLike}
        />

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="btn btn-sm btn-light position-absolute"
              style={{
                top: "50%",
                left: "8px",
                transform: "translateY(-50%)",
                borderRadius: "50%",
              }}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="btn btn-sm btn-light position-absolute"
              style={{
                top: "50%",
                right: "8px",
                transform: "translateY(-50%)",
                borderRadius: "50%",
              }}
            >
              <FaChevronRight />
            </button>
          </>
        )}
      </div>

        {/* Details Section */}
      <div className="p-3">
        {/* Price and Date */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h6
            className="mb-0 text-dark"
            style={{
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            ₹ {price}
          </h6>
          <p
            className="text-muted small mb-0"
            style={{
              fontSize: "12px",
            }}
          >
            {date}
          </p>
        </div>

        {/* Title, Location, Year-Distance, and Owners */}
        <div className="d-flex justify-content-between">
          {/* Left Side: Title and Location */}
          <div>
            <h6
              className="mb-0"
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#333",
              }}
            >
              {title}
            </h6>
            <p
              className="text-muted small mb-0"
              style={{
                fontSize: "12px",
              }}
            >
              {location}
            </p>
          </div>

          {/* Right Side: Year-Distance and Owners */}
          <div className="text-end">
            <p
              className="text-muted small mb-0"
              style={{
                fontSize: "12px",
              }}
            >
              {year} - {distance} km
            </p>
            <p
              className="text-muted small mb-0"
              style={{
                fontSize: "12px",
              }}
            >
              No. of owners: {owners}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;