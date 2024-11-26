import React from 'react';
import AppHeader from '../common/header.js';
import CarCard from '../components/card.js';
import CustomNavbar from '../components/navbar.js';

const Home = () => {
  // Mock data for a car card
  const carData = [
    {
      images: [
        
      ],
      price: '7,20,000',
      title: 'Tata Tiago',
      location: 'Mundamveli',
      year: '2016',
      distance: '48,700',
      owners: '2',
      date: 'Yesterday',
    },
    {
      images: [
        'https://via.placeholder.com/300x200?text=Car+A',
        'https://via.placeholder.com/300x200?text=Car+B',
      ],
      price: '10,50,000',
      title: 'Honda City',
      location: 'Kochi',
      year: '2019',
      distance: '25,000',
      owners: '1',
      date: 'Today',
    },
    {
        images: [
          'https://via.placeholder.com/300x200?text=Car+A',
          'https://via.placeholder.com/300x200?text=Car+B',
        ],
        price: '10,50,000',
        title: 'Honda City',
        location: 'Kochi',
        year: '2019',
        distance: '25,000',
        owners: '1',
        date: 'Today',
      },
  ];

  return (
    <div>
      {/* App Header */}
      <AppHeader />
      <CustomNavbar />

      {/* Main Content */}
      <div className="container mt-4">
        <h2 className="text-center mb-4">Available Cars</h2>
        <div
          className="row g-4"
          style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}
        >
          {carData.map((car, index) => (
            <div key={index} className="col-md-4 d-flex justify-content-center">
              <CarCard {...car} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
