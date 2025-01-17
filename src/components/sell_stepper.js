import React from "react";

const Stepper = () => {
  const steps = [
    { number: 1, label: "Vehicle Details" },
    { number: 2, label: "Set a Price" },
    { number: 3, label: "Upload Photos" },
    { number: 4, label: "Set Location" },
    { number: 5, label: "Verify Your Details" },
  ];

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Card shadow for elevation
    maxWidth: "400px",
    margin: "16px auto",
    fontFamily: "Arial, sans-serif",
  };

  const categoryStyle = {
    marginBottom: "20px",
  };

  const spanStyle = {
    color: "#7a7a7a",
    fontSize: "14px",
    alignItems: "left",
    
  };

  const titleStyle = {
    margin: "0",
    fontSize: "18px",
    fontWeight: "bold",
  };

  const linkStyle = {
    color: "#007bff",
    textDecoration: "none",
    fontSize: "14px",
  };

  const stepsStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const stepStyle = (isActive) => ({
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
    color: isActive ? "#000" : "#7a7a7a",
    fontWeight: isActive ? "bold" : "normal",
  });

  const stepNumberStyle = (isActive) => ({
    backgroundColor: isActive ? "#007bff" : "#e9e9e9",
    color: isActive ? "#fff" : "#000",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "12px",
  });

  const stepLabelStyle = {
    fontSize: "16px",
  };

  return (
    <div style={cardStyle}>
      <div style={categoryStyle}>
        <span style={spanStyle}>Selected Category</span>
        <h4 style={titleStyle}>4 Wheelers</h4>
        <a href="#" style={linkStyle}>
          Change
        </a>
      </div>
      <div style={stepsStyle}>
        {steps.map((step, index) => (
          <div
            key={index}
            style={stepStyle(step.number === 1)} // Highlight the active step
          >
            <div style={stepNumberStyle(step.number === 1)}>
              {step.number}
            </div>
            <div style={stepLabelStyle}>{step.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
