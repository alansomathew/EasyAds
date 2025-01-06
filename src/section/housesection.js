import React from "react";
import HouseCard from "../components/housecard"; // Import HouseCard component
import '@fortawesome/fontawesome-free/css/all.min.css';
import SectionHeader from "../common/sectionheader";


const HousesSection = () => {
  // Mock data for houses
  const houseData = [
    {
      id: 1,
      images: [
        require("../images/house/house1.jpeg"),
        "https://via.placeholder.com/300x200?text=House+1",
      ],
      price: "46,00,000",
      title: "3 Bds | 3 Bds | 1250 ft²",
      location: "Coimbatore",
      description: "Parking available, Balcony, Full furnished, 24hrs hot...",
      date: "Yesterday",
    },
    {
      id: 2,
      images: [
        require("../images/house/house2.jpg"),
        "https://via.placeholder.com/300x200?text=House+2",
      ],
      price: "52,00,000",
      title: "2 Bds | 2 Bds | 1000 ft²",
      location: "Chennai",
      description: "Swimming pool, Gym, Fully Furnished, 24hrs electricity...",
      date: "Today",
    },
    {
      id: 3,
      images: [
        require("../images/house/house1.jpeg"),
        "https://via.placeholder.com/300x200?text=House+3",
      ],
      price: "34,00,000",
      title: "1 Bds | 1 Bds | 750 ft²",
      location: "Bangalore",
      description: "Modular kitchen, Balcony, Near Metro, 24hrs security...",
      date: "2 days ago",
    },
    {
      id: 4,
      images: [
        require("../images/house/house1.jpeg"),
        require("../images/house/house2.jpg"),
        "https://via.placeholder.com/300x200?text=House+4",
      ],
      price: "75,00,000",
      title: "4 Bds | 4 Bds | 2000 ft²",
      location: "Hyderabad",
      description: "Garden, Parking available, Independent house...",
      date: "Yesterday",
    },
  ];

  const handleSeeAll = () => {
    console.log("See All Houses clicked");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "1312px" }}>
      {/* Section Header */}
     <SectionHeader title="Houses and Flats for Sale"  onSeeAll={handleSeeAll} />

      {/* Responsive Grid Layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}
      >
        {houseData.map((house) => (
          <HouseCard
            key={house.id}
            images={house.images} // Use house images
            price={house.price} // House price
            title={house.title} // Title representing details like BHK and area
            location={house.location} // House location
            description={house.description} // Short description of the house
            date={house.date} // Posted date
          />
        ))}
      </div>
    </div>
  );
};

export default HousesSection;
