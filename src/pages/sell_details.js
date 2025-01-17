import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Stepper from "../components/sell_stepper"; // Import the Stepper component
import VehicleDetailsForm from "../components/sell_content"; // Import the VehicleDetailsForm component
import AppHeader from "../common/header"; // Import the header component
import Footer from "../common/footer"; // Import the footer component

const SellDetails = () => {
    const navigate = useNavigate();
  
  return (

    <div style={{ backgroundColor: "#F9FAF7", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Include Header */}
      <AppHeader />

      {/* Breadcrumb */}
      <div style={{ backgroundColor: "#F9FAF7", padding: "10px 0" }}>
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
            <span style={{ color: "#212529" }}>Sell</span>
          </nav>

          {/* Back Button */}
          <Button
             onClick={() => navigate(-1)}
             style={{
               marginTop: "20px",
               backgroundColor: "transparent",
               border: "none",
               color: "#292D32",
               fontWeight: "bold",
               padding: 0,
               display: "flex",
              alignItems: "center",
             }}
           >
            <i className="fa-solid fa-arrow-left" style={{ marginRight: "8px" }}></i>
            Back
          </Button>
        </Container>
      </div>

       {/* Main Content */}
       <div style={{ flex: 1, padding: "20px" }}>
        <Container>
          <h1
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "32px",
              lineHeight: "48px",
              color: "#005B96",
            }}
          >
            Sell Your Vehicle
          </h1>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "18px",
              lineHeight: "27px",
              color: "#717C89",
              marginTop: "20px",
            }}
          >
            Fill in the details below to post your vehicle for sale.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px", // Add spacing between stepper and form
              marginTop: "30px",
            }}
          >
            {/* Stepper - Left Section */}
            <div style={{ flex: "1", maxWidth: "300px" }}>
              <Stepper />
            </div>

            {/* Vehicle Details Form - Right Section */}
            <div
              style={{
                flex: "2",
                backgroundColor: "#fff",
                padding: "24px",
               
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add shadow to the form
              }}
            >
              <VehicleDetailsForm />
            </div>
          </div>
        </Container>
      </div>

      {/* Include Footer */}
      <Footer />
    </div>
  );
}

export default SellDetails;
