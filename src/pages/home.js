import React from 'react';
import AppHeader from '../common/header.js';
import CarCard from '../components/card.js';
import CustomNavbar from '../components/navbar.js';
import BikeSection from '../pages/bikesection'; // Import BikeSection
import HousesSection from '../pages/housesection'; 
import SectionHeader from '../common/sectionheader';
const Home = () => {
  // Mock data for a car card
  const carData = [
    {
      images: [],
      price: '7,20,000',
      title: 'Tata Tiago',
      location: 'Mundamveli',
      year: '2016',
      distance: '48,700',
      owners: '2',
      date: 'Yesterday',
    },
    {
      images: ['https://via.placeholder.com/300x200?text=Car+A'],
      price: '10,50,000',
      title: 'Honda City',
      location: 'Mundamveli',
      year: '2019',
      distance: '25,000',
      owners: '1',
      date: 'Today',
    },
    {
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
      images: ['https://via.placeholder.com/300x200?text=Car+C'],
      price: '10,50,000',
      title: 'Honda City',
      location: 'Mundamveli',
      year: '2019',
      distance: '25,000',
      owners: '1',
      date: 'Today',
    },
  ];

  return (
    <div className="container-fluid mx-0 px-0">
      {/* App Header */}
      <AppHeader />
      <CustomNavbar />

      {/* Cars Section */}
      <div className="container mt-5" style={{ maxWidth: '1312px' }}>
        <SectionHeader title="Cars" onSeeAll={() => console.log('See All Cars clicked')} />
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

      {/* Bike Section */}
      <BikeSection />

      {/* Houses Section */}
      <HousesSection />
    </div>
  );
};

export default Home;