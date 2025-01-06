import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = ({ title, onSeeAll }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      {/* Section Title */}
      <h2 className="m-0" style={{ fontSize: '24px', fontWeight: 'bold', color: '#005B96', }}>
        {title}
      </h2>
      
      {/* See All Link */}
      <button
  className="btn btn-link text-decoration-none text-primary"
  onClick={onSeeAll}
  style={{
    fontSize: "16px",
    
    textDecoration: "none",
    fontWeight: "bold", // Make the text bold
    display: "inline-block", // Ensure border and width apply correctly
    padding: "4px 8px", // Optional: Add padding for spacing
    transform: "rotate(0deg)", // Apply rotation
    color: "#005B96", // Text color
  }}
>
  See All
  <i
    className="fa-solid fa-arrow-right"
    style={{
      marginLeft: "8px",
      
    }}
  ></i>
</button>

    </div>
  );
};

// PropTypes for validation
SectionHeader.propTypes = {
  title: PropTypes.string.isRequired, // Section title
  onSeeAll: PropTypes.func, // Function to handle 'See All' click
};

// Default Props
SectionHeader.defaultProps = {
  onSeeAll: () => console.log('See All clicked'),
};

export default SectionHeader;
