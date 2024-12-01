import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = ({ title, onSeeAll }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      {/* Section Title */}
      <h2 className="m-0" style={{ fontSize: '24px', fontWeight: 'bold' }}>
        {title}
      </h2>

      {/* See All Link */}
      <button
        className="btn btn-link text-decoration-none text-primary p-0"
        onClick={onSeeAll}
        style={{ fontSize: '16px' }}
      >
        See All →
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
