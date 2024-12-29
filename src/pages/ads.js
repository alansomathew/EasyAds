import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../common/header'; // Ensure this path is correct
import Footer from '../common/footer'; // Ensure this path is correct
import CarCard from '../components/card'; // Import the CarCard component
import CustomNavbar from "../components/navbar"; // Import the navbar component

// Car data
const cars = [
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
  },
];

const AdsPage = () => (
  <>
    {/* Include Header */}
    <Header />

    {/* Include Navbar */}
    <CustomNavbar />

    {/* Breadcrumb */}
    <div style={{ padding: "10px 0" }}>
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
          <span style={{ cursor: "pointer", color: "#292D32" }}> My Ads</span>
          <span style={{ margin: "0 8px" }}> &gt; </span>
        </nav>
      </Container>
    </div>

    {/* Ads Page Content */}
    <Container>
      <Row className="my-4">
        <Col>
          <h2
            style={{
              textAlign: 'left',
              color: '#005B96',
              fontFamily: 'Poppins',
              fontWeight: 'bold',
            }}
          >
             My Ads
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
              onClick={() => console.log(`${car.title} clicked`)}
            />
          </Col>
        ))}
      </Row>
    </Container>

    {/* Add some space above the footer */}
    <div style={{ paddingBottom: "60px" }} />

    {/* Include Footer */}
    <Footer />
  </>
);

export default AdsPage;
