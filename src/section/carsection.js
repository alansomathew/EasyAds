import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import SectionHeader from "../common/sectionheader"; // Reuse SectionHeader
import CarCard from "../components/card"; // Reuse CarCard for displaying cars



const CarSection = () => {
  const navigate = useNavigate(); // Initialize navigation

  // Mock data for cars
  const carData = [
    {
      id: 1,
      images: [
        require("../images/car/car1.jpeg"),
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
    },
    {
      id: 2,
      images: [
        "https://via.placeholder.com/300x200?text=Car+A",
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
    },
    {
      id: 3,
      images: [
        "https://via.placeholder.com/300x200?text=Car+A",
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
    },
    {
      id: 3,
      images: [
        "https://via.placeholder.com/300x200?text=Car+A",
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
    },
   
   
  ];

  const handleCarClick = (id) => {
    navigate(`/details/${id}`); // Navigate to the details page with the car ID
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
          />
        ))}
      </div>
    </div>
  );
};

export default CarSection;
