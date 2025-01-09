import React, { useState } from "react";
import SectionHeader from "../common/sectionheader"; // Reuse SectionHeader for the title
import CarCard from "../components/card"; // Reuse CarCard for displaying bikes

const BikeSection = () => {
  // State for bike data
  const [bikeData, setBikeData] = useState([
    {
      id: 1, // Unique ID for each bike
      images: [
        require("../images/bike/bike1.jpeg"),
        require("../images/bike/bike2.jpeg"),
        "https://via.placeholder.com/300x200?text=Bike+2",
        "https://via.placeholder.com/300x200?text=Bike+2",
      ],
      price: "1,80,000",
      title: "Royal Enfield Classic",
      location: "Mundamveli",
      year: "2020",
      distance: "35,724",
      owners: "2",
      date: "Sep 23, 2023",
      isLiked: false,
    },
    {
      id: 2,
      images: [
        require("../images/bike/bike2.jpeg"),
        "https://via.placeholder.com/300x200?text=Bike+3",
        "https://via.placeholder.com/300x200?text=Bike+2",
        "https://via.placeholder.com/300x200?text=Bike+3",
        "https://via.placeholder.com/300x200?text=Bike+3",
      ],
      price: "1,50,000",
      title: "KTM Duke 250",
      location: "Panampilly Nagar",
      year: "2019",
      distance: "15,000",
      owners: "1",
      date: "Aug 15, 2023",
      isLiked: false,
    },
    {
      id: 3,
      images: [
        require("../images/bike/bike3.jpeg"),
        "https://via.placeholder.com/300x200?text=Bike+2",
        "https://via.placeholder.com/300x200?text=Bike+3",
        "https://via.placeholder.com/300x200?text=Bike+3",
        "https://via.placeholder.com/300x200?text=Bike+2",
        "https://via.placeholder.com/300x200?text=Bike+3",
      ],
      price: "1,20,000",
      title: "Bajaj Pulsar NS 200",
      location: "Edapally",
      year: "2018",
      distance: "25,000",
      owners: "2",
      date: "Jul 10, 2023",
      isLiked: false,
    },
    {
      id: 4,
      images: [
        require("../images/bike/bike4.jpeg"),
        "https://via.placeholder.com/300x200?text=Bike+2",
        "https://via.placeholder.com/300x200?text=Bike+3",
        "https://via.placeholder.com/300x200?text=Bike+2",
        "https://via.placeholder.com/300x200?text=Bike+3",
        "https://via.placeholder.com/300x200?text=Bike+3",
      ],
      price: "90,000",
      title: "Hero Splendor Plus",
      location: "Vytilla",
      year: "2021",
      distance: "10,000",
      owners: "1",
      date: "Jun 5, 2023",
      isLiked: false,
    },
  ]);

  const handleSeeAll = () => {
    console.log("See All Bikes clicked");
  };

  // Handle like toggle
  const handleToggleLike = (id, isLiked) => {
    setBikeData((prevData) =>
      prevData.map((bike) =>
        bike.id === id ? { ...bike, isLiked } : bike
      )
    );
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
          gap: "16px",
        }}
      >
        {bikeData.map((bike) => (
          <CarCard
            key={bike.id}
            {...bike}
            onToggleLike={(isLiked) => handleToggleLike(bike.id, isLiked)} // Pass toggle handler
          />
        ))}
      </div>
    </div>
  );
};

export default BikeSection;
