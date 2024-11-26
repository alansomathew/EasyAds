import React, { useState } from 'react';
import { FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarCard = ({ images, price, title, location, year, distance, owners, date }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Navigate to previous image
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Navigate to next image
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };


  // Toggle the heart icon's color
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div
      className="card"
      style={{
        width: '310px',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Image Carousel */}
      <div className="position-relative" style={{ height: '200px', backgroundColor: '#f7f7f7' }}>
        <img
          src={images[currentImageIndex]}
          alt={`Car ${currentImageIndex + 1}`}
          style={{ width: '100%', height: '208px', objectFit: 'cover' }}
        />

        {/* Heart Icon */}
        <FaHeart
          className="position-absolute"
          style={{
            top: '10px',
            right: '10px',
            color: isLiked ? 'white' : 'transparent', // Change color based on the liked state
            border: isLiked ? 'none' : '1px solid #FAFDF6', // Optional border to indicate the heart outline
            fontSize: '20px',
            cursor: 'pointer',
            
          }}
          onClick={toggleLike} // Handle click vent to toggle the like state
        />

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="btn btn-sm btn-light position-absolute"
              style={{ top: '50%', left: '10px', transform: 'translateY(-50%)', borderRadius: '50%' }}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="btn btn-sm btn-light position-absolute"
              style={{ top: '50%', right: '10px', transform: 'translateY(-50%)', borderRadius: '50%' }}
            >
              <FaChevronRight />
            </button>
          </>
        )}
      </div>

      {/* New Tag */}
      {/* <span
        className="badge bg-warning text-dark"
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          padding: '5px 10px',
          borderRadius: '10px',
        }}
      >
        New
      </span> */}

      {/* Details Section */}
      <div className="p-3 bg-light">
        {/* Price and Timestamp */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="mb-0 text-dark">₹ {price}</h5>
          <small className="text-muted">{date}</small>
        </div>

        {/* Title */}
        <h6 className="mb-1">{title}</h6>

        {/* Location */}
        <p className="text-muted mb-1" style={{ fontSize: '14px' }}>
          {location}
        </p>

        {/* Additional Info */}
        <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
          {year} - {distance} km <br />
          No. of owners: {owners}
        </p>
      </div>
    </div>
  );
};

export default CarCard;
