import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  Form,
  Badge,
} from "react-bootstrap";
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
    inspectionStatus: false,
    kmDriven: false,
    fuel: false,
    transmission: false,
  });

  const [tags, setTags] = useState(["Cars", "Kochi"]); // Tags state

  // Toggle filter collapse
  const toggleFilter = (filter) => {
    setFilters((prevState) => ({
      ...prevState,
      [filter]: !prevState[filter],
    }));
  };

  // Remove a tag
  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  // Clear all tags
  const clearAllTags = () => {
    setTags([]);
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
        <Row className="align-items-center">
          {/* Left: Title */}
          <Col md={6}>
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
          </Col>

          {/* Right: Sort By */}
          <Col md={6} className="text-end">
            <div
              className="d-flex justify-content-end align-items-center"
              style={{ gap: "8px" }} // Add spacing between elements
            >
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  color: "#495057",
                  textTransform: "uppercase",
                }}
              >
                Sort By:
              </span>
              <Dropdown>
                <Dropdown.Toggle
                  variant="link"
                  style={{
                    fontWeight: "normal",
                    fontSize: "14px",
                    textDecoration: "none",
                    color: "#495057",
                    padding: "0", // Remove padding for better alignment
                  }}
                >
                  Date Published
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Price: Low to High</Dropdown.Item>
                  <Dropdown.Item>Price: High to Low</Dropdown.Item>
                  <Dropdown.Item>Date Published</Dropdown.Item>
                  <Dropdown.Item>Distance</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Tags Filter Bar */}
      <Container className="mt-3">
        <div
          style={{
            backgroundColor: "#F9FAF7",
            padding: "10px",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ display: "flex", gap: "8px" }}>
            {tags.map((tag, index) => (
              <Badge
                key={index}
                pill
                bg="primary"
                style={{
                  backgroundColor: "#005B96",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  padding: "8px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "24px",
                  cursor: "pointer",
                }}
              >
                {tag}{" "}
                <span
                  onClick={() => removeTag(tag)}
                  style={{ cursor: "pointer", fontWeight: "bold" }}
                >
                  ✕
                </span>
              </Badge>
            ))}
          </div>
          {tags.length > 0 && (
            <Button
              variant="link"
              style={{
                color: "#005B96",
                fontSize: "14px",
                fontWeight: "bold",
                textDecoration: "none",
              }}
              onClick={clearAllTags}
            >
              Clear All
            </Button>
          )}
        </div>
      </Container>
      {/* Filters and Listings */}
      <Container className="mt-4">
        <Row>
          {/* Filters Section */}
          <Col md={3}>
            {/* Scrollable Filters Section */}
            <div
              style={{
                width: "310px",
                height: "432px",
                borderRadius: "16px",
                overflowY: "auto",
                backgroundColor: "#F9FAF7",
                padding: "16px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
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
                    {[
                      "First",
                      "Second",
                      "Third",
                      "Fourth",
                      "More than Four",
                    ].map((option, index) => (
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
                    ))}
                  </div>
                )}
              </div>

              {/* Inspection Status Filter */}
              <div
                className="border p-3 mb-3"
                style={{ borderRadius: "8px", backgroundColor: "#F9FAF7" }}
              >
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleFilter("inspectionStatus")} // Toggle filter
                  style={{ cursor: "pointer" }}
                >
                  <span className="fw-bold">INSPECTION STATUS</span>
                  <span>{filters.inspectionStatus ? "▲" : "▼"}</span>{" "}
                  {/* Arrow toggle */}
                </div>
                {filters.inspectionStatus && ( // Render content when expanded
                  <div className="mt-3">
                    {/* Checkbox for Inspected Cars Only */}
                    <Form.Check
                      type="checkbox"
                      id="inspected-cars-only"
                      label="Inspected Cars Only"
                      style={{
                        fontSize: "14px",
                        color: "#495057",
                        textAlign: "left",
                      }}
                    />
                  </div>
                )}
              </div>

              {/* KM Driven Filter */}
              <div
                className="border p-3 mb-3"
                style={{ borderRadius: "8px", backgroundColor: "#F9FAF7" }}
              >
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleFilter("kmDriven")}
                  style={{ cursor: "pointer" }}
                >
                  <span className="fw-bold">KM DRIVEN</span>
                  <span>{filters.kmDriven ? "▲" : "▼"}</span>{" "}
                  {/* Toggle arrow */}
                </div>
                {filters.kmDriven && (
                  <div className="mt-3">
                    {/* Predefined KM Ranges */}
                    {[
                      "Below 25000 km",
                      "25000 - 50000 km",
                      "50000 - 75000 km",
                      "75000 - 100000 km",
                      "100000 km and Above",
                    ].map((range, index) => (
                      <Form.Check
                        key={index}
                        type="checkbox"
                        id={`km-range-${index}`}
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
                      min="0"
                      max="200000"
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
                        console.log(`KM Range changed: ${e.target.value}`)
                      }
                    />

                    {/* From and To Inputs */}
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

                    {/* Reset and Apply Buttons */}
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

              {/* Fuel Filter */}
              <div
                className="border p-3 mb-3"
                style={{ borderRadius: "8px", backgroundColor: "#F9FAF7" }}
              >
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleFilter("fuel")}
                  style={{ cursor: "pointer" }}
                >
                  <span className="fw-bold">FUEL</span>
                  <span>{filters.fuel ? "▲" : "▼"}</span> {/* Toggle arrow */}
                </div>
                {filters.fuel && (
                  <div className="mt-3">
                    {[
                      "Petrol",
                      "Diesel",
                      "LPG",
                      "CNG & Hybrids",
                      "Electric",
                    ].map((fuelType, index) => (
                      <Form.Check
                        key={index}
                        type="checkbox"
                        id={`fuel-${index}`}
                        label={fuelType}
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

              {/* Transmission Filter */}
              <div
                className="border p-3 mb-3"
                style={{ borderRadius: "8px", backgroundColor: "#F9FAF7" }}
              >
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleFilter("transmission")}
                  style={{ cursor: "pointer" }}
                >
                  <span className="fw-bold">TRANSMISSION</span>
                  <span>{filters.transmission ? "▲" : "▼"}</span>{" "}
                  {/* Toggle arrow */}
                </div>
                {filters.transmission && (
                  <div className="mt-3">
                    {["Automatic", "Manual"].map((type, index) => (
                      <Form.Check
                        key={index}
                        type="checkbox"
                        id={`transmission-${index}`}
                        label={type}
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
            </div>
          </Col>

          {/* Car Listings Section */}
          <Col md={9}>
            {/* Car Listings */}
            {/* Car Listings */}
            <Row>
              {carData.map((car, index) => (
                <Col md={6} lg={4} key={index} className="mb-4">
                  <div
                    className="card shadow-sm"
                    style={{
                      borderRadius: "16px",
                      overflow: "hidden",
                      backgroundColor: "#F9FAF7",
                      border: "1px solid #E0E0E0",
                    }}
                  >
                    {/* Car Image Section */}
                    <div style={{ position: "relative" }}>
                      <img
                        src={car.images[0]}
                        className="card-img-top"
                        alt="Car"
                        style={{
                          height: "180px",
                          objectFit: "cover",
                          borderBottom: "1px solid #E0E0E0",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "8px",
                          right: "8px",
                          backgroundColor: "white",
                          borderRadius: "50%",
                          padding: "8px",
                          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <span style={{ fontSize: "16px", color: "#FFD700" }}>
                          ♡
                        </span>
                      </div>
                    </div>

                    {/* Car Details Section */}
                    <div className="card-body">
  {/* Price and Date */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "8px",
    }}
  >
    <h5
      className="card-title mb-0"
      style={{
        fontWeight: "bold",
        fontSize: "18px",
        color: "#005B96",
      }}
    >
      {car.price}
    </h5>
    <span
      style={{
        fontSize: "12px",
        color: "#757575",
        whiteSpace: "nowrap",
      }}
    >
      {car.date}
    </span>
  </div>

  {/* Title and Year */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "8px",
    }}
  >
    <p
      style={{
        fontSize: "16px",
        fontWeight: "bold",
        color: "#757575",
        margin: "0",
      }}
    >
      {car.title}
    </p>
    <span
      style={{
        fontSize: "12px",
        color: "#757575",
      }}
    >
       {`${car.year} - ${car.distance}`}
    </span>
  </div>

  {/* Location and Number of Owners */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "8px",
    }}
  >
    <span
      style={{
        fontSize: "12px",
        color: "#757575",
      }}
    >
      {car.location}
    </span>
    <span
      style={{
        fontSize: "12px",
        color: "#757575",
      }}
    >
      No. of owners: {car.owners}
    </span>
  </div>
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
