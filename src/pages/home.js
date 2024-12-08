import React, { useState } from "react";
import AppHeader from "../common/header.js";
import CustomNavbar from "../components/navbar.js";
import CarSection from "../section/carsection"; // Import CarSection
import BikeSection from "../section/bikesection"; // Import BikeSection
import HousesSection from "../section/housesection"; // Import HousesSection
import Footer from "../common/footer.js"; // Import the Footer component

const Home = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = (isOpen) => {
    setDropdownOpen(isOpen);
  };

  return (
    <div className="container-fluid mx-0 px-0">
      {/* App Header */}
      <AppHeader />

      {/* Custom Navbar */}
      <CustomNavbar onDropdownToggle={handleDropdownToggle} />

      {/* Content Sections */}
      <div
        style={{
          marginTop: dropdownOpen ? "200px" : "0", // Adjust the margin dynamically
          transition: "margin-top 0.3s ease", // Smooth transition effect
        }}
      >
        {/* Cars Section */}
        <CarSection />

        {/* Bike Section */}
        <BikeSection />

        {/* Houses Section */}
        <HousesSection />
      </div>

      {/* Footer */}
      <Footer /> {/* Call the Footer component here */}
    </div>
  );
};

export default Home;
