import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import SectionHeader from '../common/sectionheader'; // Reuse SectionHeader
import CarCard from '../components/card'; // Reuse CarCard for displaying cars

const CarSection = () => {
  const navigate = useNavigate(); // Initialize navigation

  // Mock data for cars
  const carData = [
    {
      id: 1, // Add unique ID for each car
      images: ['https://via.placeholder.com/300x200?text=Car+A'],
      price: '7,20,000',
      title: 'Tata Tiago',
      location: 'Mundamveli',
      year: '2016',
      distance: '48,700',
      owners: '2',
      date: 'Yesterday',
    },
    {
      id: 2,
      images: ['https://via.placeholder.com/300x200?text=Car+B'],
      price: '10,50,000',
      title: 'Honda City',
      location: 'Mundamveli',
      year: '2019',
      distance: '25,000',
      owners: '1',
      date: 'Today',
    },
    {
      id: 1, // Add unique ID for each car
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
      id: 1, // Add unique ID for each car
      images: ['https://via.placeholder.com/300x200?text=Car+A'],
      price: '7,20,000',
      title: 'Tata Tiago',
      location: 'Mundamveli',
      year: '2016',
      distance: '48,700',
      owners: '2',
      date: 'Yesterday',
    },
    // Add more car objects here
  ];

  const handleCarClick = (id) => {
    navigate(`/details/${id}`); // Navigate to the details page with the car ID
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '1312px' }}>
      {/* Section Header */}
      <SectionHeader title="Cars" onSeeAll={() => console.log('See All Cars clicked')} />

      {/* Horizontal Scrollable Section */}
      <div
        className="d-flex overflow-auto"
        style={{
          gap: '24px',
          paddingBottom: '16px',
        }}
      >
        {carData.map((car) => (
          <div
            key={car.id}
            style={{
              flex: '0 0 300px', // Card width
              height: '303.11px', // Match the height
              cursor: 'pointer', // Add pointer cursor for clickability
            }}
            onClick={() => handleCarClick(car.id)} // Handle click to navigate
          >
            <CarCard {...car} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarSection;
