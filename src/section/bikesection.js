import React from "react";
import SectionHeader from "../common/sectionheader"; // Reuse SectionHeader for the title
import CarCard from "../components/card"; // Reuse CarCard for BikeCard

const BikeSection = () => {
  // Mock data for bike cards
  const bikeData = [
    {
      images: ["https://via.placeholder.com/300x200?text=Bike+1"],
      price: "₹ 1,80,000",
      title: "Royal Enfield Classic 350",
      location: "Mundamveli",
      year: "2020",
      distance: "35,724 km",
      owners: "2",
      date: "Sep 23, 2023",
    },
    {
      images: ["https://via.placeholder.com/300x200?text=Bike+2"],
      price: "₹ 1,80,000",
      title: "Royal Enfield Classic 350",
      location: "Mundamveli",
      year: "2020",
      distance: "35,724 km",
      owners: "2",
      date: "Sep 23, 2023",
    },
    {
      images: ["https://via.placeholder.com/300x200?text=Bike+3"],
      price: "₹ 1,80,000",
      title: "Royal Enfield Classic 350",
      location: "Mundamveli",
      year: "2020",
      distance: "35,724 km",
      owners: "2",
      date: "Sep 23, 2023",
    },
    {
      images: ["https://via.placeholder.com/300x200?text=Bike+4"],
      price: "₹ 1,80,000",
      title: "Royal Enfield Classic 350",
      location: "Mundamveli",
      year: "2020",
      distance: "35,724 km",
      owners: "2",
      date: "Sep 23, 2023",
    },
  ];

  const handleSeeAll = () => {
    console.log("See All Bikes clicked");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "1312px" }}>
      {/* Section Header */}
      <SectionHeader title="Bikes" onSeeAll={handleSeeAll} />

      {/* Responsive Grid Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
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
