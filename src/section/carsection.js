import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import SectionHeader from "../common/sectionheader"; // Reuse SectionHeader
import CarCard from "../components/card"; // Reuse CarCard for displaying cars

const CarSection = () => {
  const navigate = useNavigate(); // Initialize navigation

  // State for car data
  const [carData, setCarData] = useState([
    {
      id: 1,
      images: [
        require("../images/car/car1.jpeg"),
        require("../images/car/car2.jpeg"),
        require("../images/car/car3.jpeg"),
        require("../images/car/car4.jpeg"),
        require("../images/car/car5.jpeg"),
      ],
      price: "7,20,000",
      title: "Tata Tiago",
      location: "Mundamveli",
      year: "2016",
      distance: "48,700",
      owners: "2",
      date: "Yesterday",
      isLiked: false,
    },
    {
      id: 2,
      images: [
        require("../images/car/car6.jpeg"),
        "https://via.placeholder.com/300x200?text=Car+B",
        "https://via.placeholder.com/300x200?text=Car+C",
        "https://via.placeholder.com/300x200?text=Car+B",
        "https://via.placeholder.com/300x200?text=Car+C",
      ],
      price: "7,20,000",
      title: "Tata Tiago",
      location: "Mundamveli",
      year: "2016",
      distance: "48,700",
      owners: "2",
      date: "Yesterday",
      isLiked: false,
    },
    {
      id: 3,
      images: [
        require("../images/car/car7.jpeg"),
        "https://via.placeholder.com/300x200?text=Car+B",
        "https://via.placeholder.com/300x200?text=Car+C",
        "https://via.placeholder.com/300x200?text=Car+B",
        "https://via.placeholder.com/300x200?text=Car+C",
      ],
      price: "7,20,000",
      title: "Tata Tiago",
      location: "Mundamveli",
      year: "2016",
      distance: "48,700",
      owners: "2",
      date: "Yesterday",
      isLiked: false,
    },
    {
      id: 4,
      images: [
        require("../images/car/car8.jpeg"),
        "https://via.placeholder.com/300x200?text=Car+B",
        "https://via.placeholder.com/300x200?text=Car+C",
        "https://via.placeholder.com/300x200?text=Car+B",
        "https://via.placeholder.com/300x200?text=Car+C",
      ],
      price: "7,20,000",
      title: "Tata Tiago",
      location: "Mundamveli",
      year: "2016",
      distance: "48,700",
      owners: "2",
      date: "Yesterday",
      isLiked: false,
    },
  ]);

  // Handle card click to navigate to details page
  const handleCarClick = (id) => {
    navigate(`/details/${id}`);
  };

  // Handle like toggle
  const handleToggleLike = (id, isLiked) => {
    setCarData((prevData) =>
      prevData.map((car) =>
        car.id === id ? { ...car, isLiked } : car
      )
    );
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "1312px" }}>
      {/* Section Header */}
      <SectionHeader
        title="Cars"
        onSeeAll={() => console.log("See All Cars clicked")}
      />

      {/* Car Grid Section */}
      <div
        className="d-flex flex-wrap gap-4"
        style={{
          paddingBottom: "16px",
        }}
      >
        {carData.map((car) => (
          <CarCard
            key={car.id}
            {...car}
            onClick={() => handleCarClick(car.id)} // Pass the click handler to the card
            onToggleLike={(isLiked) => handleToggleLike(car.id, isLiked)} // Handle toggle like
          />
        ))}
      </div>
    </div>
  );
};

export default CarSection;
