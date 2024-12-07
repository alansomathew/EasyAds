import React from "react";

const HousesSection = () => {
  // Mock data for houses
  const houseData = [
    {
      images: ["https://via.placeholder.com/300x200?text=House+1"],
      price: "₹ 46,00,000",
      title: "3 Bds | 3 Bds | 1250 ft²",
      location: "Coimbatore",
      description: "Parking available, Balcony, Full furnished, 24hrs hot...",
      date: "Yesterday",
    },
    {
      images: ["https://via.placeholder.com/300x200?text=House+2"],
      price: "₹ 46,00,000",
      title: "3 Bds | 3 Bds | 1250 ft²",
      location: "Coimbatore",
      description: "Parking available, Balcony, Full furnished, 24hrs hot...",
      date: "Yesterday",
    },
    {
      images: ["https://via.placeholder.com/300x200?text=House+3"],
      price: "₹ 46,00,000",
      title: "3 Bds | 3 Bds | 1250 ft²",
      location: "Coimbatore",
      description: "Parking available, Balcony, Full furnished, 24hrs hot...",
      date: "Yesterday",
    },
    {
      images: ["https://via.placeholder.com/300x200?text=House+4"],
      price: "₹ 46,00,000",
      title: "3 Bds | 3 Bds | 1250 ft²",
      location: "Coimbatore",
      description: "Parking available, Balcony, Full furnished, 24hrs hot...",
      date: "Yesterday",
    },
  ];

  const handleSeeAll = () => {
    console.log("See All Houses clicked");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "1312px" }}>
      {/* Section Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
      <h3 className="text-dark fw-bold" style={{ textAlign: 'left' }}>
      Houses and Flats for Sale
        </h3>
        <a
          href="#see-all"
          className="text-primary"
          style={{
            fontSize: "16px",
            textDecoration: "none",
          }}
          onClick={handleSeeAll}
        >
          See All →
        </a>
      </div>

      {/* Horizontal Scrollable Section */}
      <div
        className="d-flex overflow-auto"
        style={{
          gap: "24px",
          paddingBottom: "16px",
        }}
      >
        {houseData.map((house, index) => (
          <div
            key={index}
            className="card shadow-sm"
            style={{
              flex: "0 0 300px", // Fixed width for each card
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "#fff",
            }}
          >
            {/* Image Section */}
            <div
              className="position-relative"
              style={{
                height: "200px",
                backgroundColor: "#f7f7f7",
              }}
            >
              <img
                src={house.images[0]}
                alt={house.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              {/* New Badge */}
              <span
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  backgroundColor: "#FFD700",
                  color: "#000",
                  padding: "4px 8px",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                New
              </span>
            </div>

            {/* Details Section */}
            <div className="p-3">
              {/* Price and Date */}
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6
                  className="mb-0"
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#000",
                  }}
                >
                  {house.price}
                </h6>
                <p
                  className="mb-0 text-muted"
                  style={{
                    fontSize: "12px",
                  }}
                >
                  {house.date}
                </p>
              </div>

              {/* Title and Location */}
              <div className="d-flex justify-content-between align-items-center mb-2">
                <p
                  className="mb-0"
                  style={{
                    fontSize: "14px",
                    color: "#333",
                    fontWeight: "500",
                  }}
                >
                  {house.title}
                </p>
                <p
                  className="mb-0 text-muted"
                  style={{
                    fontSize: "12px",
                  }}
                >
                  {house.location}
                </p>
              </div>

              {/* Description */}
              <p
                className="text-muted mb-0"
                style={{
                  fontSize: "12px",
                  textAlign: "left", // Ensure it starts from the left
                }}
              >
                {house.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HousesSection;
