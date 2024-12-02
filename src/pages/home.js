import React from 'react';
import AppHeader from '../common/header.js';
import CustomNavbar from '../components/navbar.js';
import CarSection from '../section/carsection'; // Import CarSection
import BikeSection from '../section/bikesection'; // Import BikeSection
import HousesSection from '../section/housesection'; // Import HousesSection

const Home = () => {
  return (
    <div className="container-fluid mx-0 px-0">
      {/* App Header */}
      <AppHeader />
      <CustomNavbar />

      {/* Cars Section */}
      <CarSection />

      {/* Bike Section */}
      <BikeSection />

      {/* Houses Section */}
      <HousesSection />
    </div>
  );
};

export default Home;
