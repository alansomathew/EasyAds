import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../common/header"; // Ensure this path is correct
import Footer from "../common/footer"; // Ensure this path is correct
import CarCard from "../components/card"; // Import the CarCard component
import CustomNavbar from "../components/navbar"; // Import the navbar component
import { FaHeart } from "react-icons/fa";

const initialCars = [
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
    isLiked: true, // Marked as liked
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
    isLiked: true, // Marked as liked
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
    isLiked: true, // Marked as liked
  },
  {
    id: 4,
    images: [
      require("../images/car/car1.jpeg"),
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
    isLiked: true, // Marked as liked
  },
];

const WishlistPage = () => {
  const [cars, setCars] = useState(initialCars); // Manage cars as state

  const handleToggleLike = (id) => {
    // Remove car from the wishlist when toggled off
    setCars((prevCars) => prevCars.filter((car) => car.id !== id));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Ensure the layout fills the full height of the viewport
      }}
    >
      {/* Include Header */}
      <Header />

      {/* Include Navbar */}
      <CustomNavbar />

      {/* Breadcrumb */}
      <div style={{ padding: "10px 0", flexGrow: 1 }}>
        <Container>
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              color: "#6c757d",
            }}
          >
            <span style={{ cursor: "pointer", color: "#292D32" }}>Home</span>
            <span style={{ margin: "0 8px" }}> &gt; </span>
            <span style={{ cursor: "pointer", color: "#292D32" }}>
              Wishlist
            </span>
          </nav>
        </Container>
      </div>

      {/* Wishlist Page Content */}
      <Container style={{ flexGrow: 1 }}>
        <Row className="my-4">
          <Col>
            <h2
              style={{
                textAlign: "left",
                color: "#005B96",
                fontFamily: "Poppins",
                fontWeight: "bold",
              }}
            >
              Wishlist
            </h2>
          </Col>
        </Row>
        <Row>
          {cars.map((car) => (
            <Col key={car.id} md={3}>
              <CarCard
                images={car.images}
                price={car.price}
                title={car.title}
                location={car.location}
                year={car.year}
                distance={car.distance}
                owners={car.owners}
                date={car.date}
                isLiked={car.isLiked} // Pass `isLiked` to CarCard
                wishlistIcon={<FaHeart style={{ color: "white" }} />}
                onClick={() => console.log(`${car.title} clicked`)}
                onToggleLike={() => handleToggleLike(car.id)} // Pass the toggle like handler
              />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Include Footer */}
      <Footer style={{ marginTop: "auto" }} />
    </div>
  );
};

export default WishlistPage;
