import React, { useState } from "react";
import { Container, Row, Col, Button, Dropdown, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "../common/header"; // Import the AppHeader component
import Footer from "../common/footer"; // Import the Footer component
import CustomNavbar from "../components/navbar"; // Import CustomNavbar

const ListingPage = () => {
  // State for filter collapses
  const [filters, setFilters] = useState({
    brandModel: false,
    allBrands: false,
    allModels: false,
    budget: false,
    year: false,
    owners: false,
  });

  // Toggle filter collapse
  const toggleFilter = (filter) => {
    setFilters((prevState) => ({
      ...prevState,
      [filter]: !prevState[filter],
    }));
  };

  // Sample car data
  const carData = [
    {
      images: ["https://via.placeholder.com/300x200?text=Car+1"],
      price: "₹ 7,20,000",
      title: "Tata Tiago",
      location: "Mundamveli",
      year: "2016",
      distance: "48,700 km",
      owners: "2",
      date: "Yesterday",
    },
    {
      images: ["https://via.placeholder.com/300x200?text=Car+2"],
      price: "₹ 7,20,000",
      title: "Tata Tiago",
      location: "Mundamveli",
      year: "2016",
      distance: "48,700 km",
      owners: "2",
      date: "Sep 23, 2023",
    },
  ];

  return (
    <div>
      {/* Include AppHeader */}
      <AppHeader />

      {/* Include CustomNavbar */}
      <CustomNavbar />

      {/* Breadcrumb */}
      <Container className="mt-4">
        <p>
          <span>Home</span> {">"} <span>Cars</span> {">"}{" "}
          <span>Cars in Kerala</span>
        </p>
        <h2
          className="fw-bold"
          style={{
            textAlign: "left", // Align text to the left
            color: "#005B96", // Blue color
            margin: "0", // Ensure no extra margin
          }}
        >
          Buy Used Cars in Kochi
        </h2>
      </Container>

      {/* Filters and Listings */}
      <Container className="mt-4">
        <Row>
          {/* Filters Section */}
          <Col md={3}>
            {/* Brand and Model Filter */}
            <div
              className="border p-3 mb-3"
              style={{ borderRadius: "8px", backgroundColor: "#F9FAF7" }}
            >
              <div
                className="d-flex justify-content-between align-items-center"
                onClick={() => toggleFilter("brandModel")}
                style={{ cursor: "pointer" }}
              >
                <span className="fw-bold">BRAND AND MODEL</span>
                <span>{filters.brandModel ? "▲" : "▼"}</span>
              </div>
              {filters.brandModel && (
                <div className="mt-3">
                  {/* All Brands */}
                  <div
                    className="d-flex justify-content-between align-items-center mb-2"
                    onClick={() => toggleFilter("allBrands")}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="fw-bold">All Brands</span>
                    <span>{filters.allBrands ? "▲" : "▼"}</span>
                  </div>
                  {filters.allBrands && (
                    <div className="mb-3">
                      {[
                        "Toyota",
                        "Honda",
                        "Hyundai",
                        "Tata",
                        "Mahindra",
                        "Maruti Suzuki",
                      ].map((brand, index) => (
                        <Form.Check
                          key={index}
                          type="checkbox"
                          id={`brand-${index}`}
                          label={brand}
                          style={{
                            marginBottom: "10px",
                            fontSize: "14px",
                            color: "#495057",
                            textAlign: "left",
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {/* All Models */}
                  <div
                    className="d-flex justify-content-between align-items-center"
                    onClick={() => toggleFilter("allModels")}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="fw-bold">All Models</span>
                    <span>{filters.allModels ? "▲" : "▼"}</span>
                  </div>
                  {filters.allModels && (
                    <div className="mt-3">
                      {[
                        "Model A",
                        "Model B",
                        "Model C",
                        "Model D",
                        "Model E",
                      ].map((model, index) => (
                        <Form.Check
                          key={index}
                          type="checkbox"
                          id={`model-${index}`}
                          label={model}
                          style={{
                            marginBottom: "10px",
                            fontSize: "14px",
                            color: "#495057",
                            textAlign: "left",
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Budget Filter */}
            <div
              className="border p-3 mb-3"
              style={{ borderRadius: "8px", backgroundColor: "#F9FAF7" }}
            >
              <div
                className="d-flex justify-content-between align-items-center"
                onClick={() => toggleFilter("budget")}
                style={{ cursor: "pointer" }}
              >
                <span className="fw-bold">BUDGET</span>
                <span>{filters.budget ? "▲" : "▼"}</span>
              </div>
              {filters.budget && (
                <div className="mt-3">
                  {/* Predefined Budget Checkboxes */}
                  {[
                    "Below 1 Lac",
                    "1 Lac - 2 Lac",
                    "2 Lac - 3 Lac",
                    "3 Lac - 5 Lac",
                    "5 Lac and Above",
                  ].map((range, index) => (
                    <Form.Check
                      key={index}
                      type="checkbox"
                      id={`budget-${index}`}
                      label={range}
                      style={{
                        marginBottom: "10px",
                        fontSize: "14px",
                        color: "#495057",
                        textAlign: "left",
                      }}
                    />
                  ))}

                  {/* Custom Range Selection */}
                  <p
                    className="mt-3 mb-1"
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#495057",
                    }}
                  >
                    Choose a range below
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                      4,00,000
                    </span>
                    <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                      8,00,000
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="1000000"
                    step="10000"
                    style={{
                      width: "100%",
                      appearance: "none",
                      height: "8px",
                      background: "#005B96",
                      borderRadius: "5px",
                      outline: "none",
                      marginTop: "8px",
                    }}
                    onChange={(e) =>
                      console.log(`Range changed: ${e.target.value}`)
                    } // Replace with actual functionality
                  />

                  {/* From and To Input */}
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <input
                      type="text"
                      value="From"
                      className="form-control"
                      style={{
                        width: "45%",
                        borderRadius: "8px",
                        fontSize: "14px",
                      }}
                    />
                    <input
                      type="text"
                      value="To"
                      className="form-control"
                      style={{
                        width: "45%",
                        borderRadius: "8px",
                        fontSize: "14px",
                      }}
                    />
                  </div>

                  {/* Buttons */}
                  <div className="d-flex justify-content-between mt-3">
                    <Button
                      variant="outline-primary"
                      style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        borderRadius: "24px",
                      }}
                    >
                      Reset
                    </Button>
                    <Button
                      variant="primary"
                      style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        backgroundColor: "#005B96",
                        borderColor: "#005B96",
                        borderRadius: "24px",
                      }}
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Year Filter */}
            <div
              className="border p-3 mb-3"
              style={{ borderRadius: "8px", backgroundColor: "#F9FAF7" }}
            >
              <div
                className="d-flex justify-content-between align-items-center"
                onClick={() => toggleFilter("year")} // Use "year" instead of "budget"
                style={{ cursor: "pointer" }}
              >
                <span className="fw-bold">YEAR</span>
                <span>{filters.year ? "▲" : "▼"}</span>{" "}
                {/* Toggle arrow for "year" */}
              </div>
              {filters.year && ( // Render content only when "year" is expanded
                <div className="mt-3">
                  {/* Predefined Year Checkboxes */}
                  {[
                    "Under 3 Years",
                    "Under 5 Years",
                    "Under 7 Years",
                    "7 Years and Above",
                  ].map((range, index) => (
                    <Form.Check
                      key={index}
                      type="checkbox"
                      id={`year-${index}`}
                      label={range}
                      style={{
                        marginBottom: "10px",
                        fontSize: "14px",
                        color: "#495057",
                        textAlign: "left",
                      }}
                    />
                  ))}

                  {/* Custom Year Range Inputs */}
                  <p
                    className="mt-3 mb-1"
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#495057",
                    }}
                  >
                    Choose a range below
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <input
                      type="number"
                      min="2000"
                      max="2024"
                      defaultValue="2004"
                      className="form-control me-2"
                      style={{
                        width: "45%",
                        borderRadius: "8px",
                        fontSize: "14px",
                        padding: "8px",
                      }}
                    />
                    <input
                      type="number"
                      min="2000"
                      max="2024"
                      defaultValue="2024"
                      className="form-control"
                      style={{
                        width: "45%",
                        borderRadius: "8px",
                        fontSize: "14px",
                        padding: "8px",
                      }}
                    />
                  </div>

                  {/* Buttons */}
                  <div className="d-flex justify-content-between mt-3">
                    <Button
                      variant="outline-primary"
                      style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        borderRadius: "24px",
                      }}
                    >
                      Reset
                    </Button>
                    <Button
                      variant="primary"
                      style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        backgroundColor: "#005B96",
                        borderColor: "#005B96",
                        borderRadius: "24px",
                      }}
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* No. of Owners Filter */}
            <div
              className="border p-3 mb-3"
              style={{ borderRadius: "8px", backgroundColor: "#F9FAF7" }}
            >
              <div
                className="d-flex justify-content-between align-items-center"
                onClick={() => toggleFilter("owners")} // Toggle filter
                style={{ cursor: "pointer" }}
              >
                <span className="fw-bold">NO. OF OWNERS</span>
                <span>{filters.owners ? "▲" : "▼"}</span> {/* Arrow toggle */}
              </div>
              {filters.owners && ( // Render content when expanded
                <div className="mt-3">
                  {/* Owner Options */}
                  {["First", "Second", "Third", "Fourth", "More than Four"].map(
                    (option, index) => (
                      <Form.Check
                        key={index}
                        type="checkbox"
                        id={`owners-${index}`}
                        label={option}
                        style={{
                          marginBottom: "10px",
                          fontSize: "14px",
                          color: "#495057",
                          textAlign: "left",
                        }}
                      />
                    )
                  )}
                </div>
              )}
            </div>
          </Col>

          {/* Car Listings Section */}
          <Col md={9}>
            {/* Sort and Clear All */}
            <Row className="mb-3">
              <Col>
                <span>Sort By: </span>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="link"
                    className="text-decoration-none"
                  >
                    Date Published
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Price: Low to High</Dropdown.Item>
                    <Dropdown.Item>Price: High to Low</Dropdown.Item>
                    <Dropdown.Item>Date Published</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col className="text-end">
                <Button variant="link" className="text-decoration-none">
                  Clear All
                </Button>
              </Col>
            </Row>

            {/* Car Listings */}
            <Row>
              {carData.map((car, index) => (
                <Col md={6} lg={4} key={index} className="mb-4">
                  <div
                    className="card shadow-sm"
                    style={{
                      borderRadius: "12px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={car.images[0]}
                      className="card-img-top"
                      alt="Car"
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title mb-1">{car.price}</h5>
                      <p className="mb-2">
                        <strong>{car.title}</strong>
                        <br />
                        {car.location}
                      </p>
                      <p className="small text-muted">
                        {car.year} - {car.distance} <br />
                        No. of owners: {car.owners}
                      </p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Include Footer */}
      <Footer />
    </div>
  );
};

export default ListingPage;
