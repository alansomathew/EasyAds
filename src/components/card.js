import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaHeart } from 'react-icons/fa';

const CarCard = ({ images, price, title, location, year, distance, owners, date }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

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

  // Toggle like functionality
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div
      className="card shadow-sm"
      style={{
        width: '300px',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      {/* Image Carousel */}
      <div
        className="position-relative"
        style={{
          height: '200px',
          backgroundColor: '#f7f7f7',
        }}
      >
        <img
          src={images[currentImageIndex]}
          alt={`Car ${currentImageIndex + 1}`}
          className="w-100 h-100"
          style={{ objectFit: 'cover' }}
        />
        {images.length > 1 && (
          <>
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="btn btn-light btn-sm position-absolute"
              style={{
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
                borderRadius: '50%',
              }}
            >
              <FaChevronLeft />
            </button>
            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="btn btn-light btn-sm position-absolute"
              style={{
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
                borderRadius: '50%',
              }}
            >
              <FaChevronRight />
            </button>
          </>
        )}
        {/* Heart Icon */}
        <FaHeart
          onClick={toggleLike}
          className="position-absolute"
          style={{
            top: '10px',
            right: '10px',
            color: isLiked ? 'red' : 'white',
            fontSize: '20px',
            cursor: 'pointer',
            textShadow: '0px 0px 2px black', // Outline for visibility
          }}
        />
      </div>

      {/* Card Details */}
      <div className="p-3">
        {/* Price and Date */}
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="m-0 text-dark">₹ {price}</h5>
          <small className="text-muted">{date}</small>
        </div>

        {/* Title and Year-Distance */}
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="mt-2 mb-1">{title}</h6>
          <p className="text-muted small mb-0 text-end">
            {year} - {distance} km
          </p>
        </div>

        {/* Location and Owners */}
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-muted small mb-0">{location}</p>
          <p className="text-muted small mb-0 text-end">No. of owners: {owners}</p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
