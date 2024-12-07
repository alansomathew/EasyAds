import React from 'react';
import CarCard from '../components/card'; // Reuse CarCard for BikeCard

const BikeSection = () => {
  // Mock data for bike cards
  const bikeData = [
    {
      images: ['https://via.placeholder.com/300x200?text=Bike+1'],
      price: '₹ 1,80,000',
      title: 'Royal Enfield Classic 350',
      location: 'Mundamveli',
      year: '2020',
      distance: '35,724 km',
      owners: '2',
      date: 'Sep 23, 2023',
    },
    {
      images: ['https://via.placeholder.com/300x200?text=Bike+2'],
      price: '₹ 1,80,000',
      title: 'Royal Enfield Classic 350',
      location: 'Mundamveli',
      year: '2020',
      distance: '35,724 km',
      owners: '2',
      date: 'Sep 23, 2023',
    },
    {
      images: ['https://via.placeholder.com/300x200?text=Bike+3'],
      price: '₹ 1,80,000',
      title: 'Royal Enfield Classic 350',
      location: 'Mundamveli',
      year: '2020',
      distance: '35,724 km',
      owners: '2',
      date: 'Sep 23, 2023',
    },
    {
      images: ['https://via.placeholder.com/300x200?text=Bike+4'],
      price: '₹ 1,80,000',
      title: 'Royal Enfield Classic 350',
      location: 'Mundamveli',
      year: '2020',
      distance: '35,724 km',
      owners: '2',
      date: 'Sep 23, 2023',
    },
  ];

  return (
    <div className="container mt-4">
      {/* Section Title */}
      <h3 className="text-dark fw-bold" style={{ textAlign: 'left' }}>
          Bikes
        </h3>
      
      {/* Horizontal Scrollable Section */}
      <div
        className="d-flex gap-4 overflow-auto"
        style={{
          paddingBottom: "16px",
        }}
      >
        {bikeData.map((bike, index) => (
          <CarCard key={index} {...bike} />
        ))}
      </div>
    </div>
  );
};

export default BikeSection;
