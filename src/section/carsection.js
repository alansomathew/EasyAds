import React from 'react';
import SectionHeader from '../common/sectionheader'; // Reuse SectionHeader
import CarCard from '../components/card'; // Reuse CarCard for displaying cars

const CarSection = () => {
  // Mock data for cars
  const carData = [
    {
      images: ['https://via.placeholder.com/300x200?text=Car+A',
        'https://via.placeholder.com/300x200?text=Car+A',
        'https://via.placeholder.com/300x200?text=Car+A'],
      price: '7,20,000',
      title: 'Tata Tiago',
      location: 'Mundamveli',
      year: '2016',
      distance: '48,700',
      owners: '2',
      date: 'Yesterday',
    },
    {
      images: ['https://via.placeholder.com/300x200?text=Car+A',
        'https://via.placeholder.com/300x200?text=Car+A',
        'https://via.placeholder.com/300x200?text=Car+A'],
      price: '10,50,000',
      title: 'Honda City',
      location: 'Mundamveli',
      year: '2019',
      distance: '25,000',
      owners: '1',
      date: 'Today',
    },
    {
      images: ['https://via.placeholder.com/300x200?text=Car+A',
        'https://via.placeholder.com/300x200?text=Car+A',
        'https://via.placeholder.com/300x200?text=Car+A'],
      price: '10,50,000',
      title: 'Honda City',
      location: 'Mundamveli',
      year: '2019',
      distance: '25,000',
      owners: '1',
      date: 'Today',
    },
    {
      images: ['https://via.placeholder.com/300x200?text=Car+A',
        'https://via.placeholder.com/300x200?text=Car+A',
        'https://via.placeholder.com/300x200?text=Car+A'],
      price: '10,50,000',
      title: 'Honda City',
      location: 'Mundamveli',
      year: '2019',
      distance: '25,000',
      owners: '1',
      date: 'Today',
    },
  ];

  const handleSeeAll = () => {
    console.log('See All Cars clicked');
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '1312px' }}>
      {/* Section Header */}
      <SectionHeader title="Cars" onSeeAll={handleSeeAll} />

      {/* Horizontal Scrollable Section */}
      <div
        className="d-flex overflow-auto"
        style={{
          gap: '24px',
          paddingBottom: '16px',
        }}
      >
        {carData.map((car, index) => (
          <div
            key={index}
            style={{
              flex: '0 0 300px', // Card width
              height: '303.11px', // Match the height
            }}
          >
            <CarCard {...car} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarSection;
