import React, { useState } from "react";

const VehicleDetailsForm = () => {
  const [formData, setFormData] = useState({
    vehicleType: "",
    brand: "",
    model: "",
    year: "",
    fuel: "",
    transmission: "",
    kmDriven: "",
    owners: "",
    adTitle: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClear = () => {
    setFormData({
      vehicleType: "",
      brand: "",
      model: "",
      year: "",
      fuel: "",
      transmission: "",
      kmDriven: "",
      owners: "",
      adTitle: "",
      description: "",
    });
  };

  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData);
  };

  const containerStyle = {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    width: "600px",
    fontFamily: "Arial, sans-serif",
    margin: "20px auto",
    border: "1px solid #e0e0e0",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const formRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "16px",
  };

  const inputStyle = {
    width: "48%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
  };

  const fullWidthInputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
    marginBottom: "16px",
  };

  const radioContainerStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  };

  const buttonStyle = (isPrimary) => ({
    padding: "10px 20px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: isPrimary ? "#007bff" : "#ccc",
    color: isPrimary ? "#fff" : "#000",
    cursor: "pointer",
    fontSize: "14px",
  });

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>Vehicle Details</div>
      <div style={formRowStyle}>
        <select
          name="vehicleType"
          value={formData.vehicleType}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose Vehicle Type</option>
          <option value="Car">Car</option>
          <option value="Bike">Bike</option>
        </select>
        <select
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose Brand</option>
          <option value="Toyota">Toyota</option>
          <option value="Honda">Honda</option>
        </select>
      </div>
      <div style={formRowStyle}>
        <select
          name="model"
          value={formData.model}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose Model</option>
          <option value="Model 1">Model 1</option>
          <option value="Model 2">Model 2</option>
        </select>
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <div style={formRowStyle}>
        <select
          name="fuel"
          value={formData.fuel}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Fuel</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
        </select>
        <select
          name="transmission"
          value={formData.transmission}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Transmission</option>
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
        </select>
      </div>
      <input
        type="text"
        name="kmDriven"
        placeholder="KM Driven"
        value={formData.kmDriven}
        onChange={handleChange}
        style={fullWidthInputStyle}
      />
      <div style={radioContainerStyle}>
        <span style={{ marginRight: "10px" }}>No. of owners:</span>
        {[1, 2, 3, 4, "5 & above"].map((owner, index) => (
          <label key={index} style={{ marginRight: "10px" }}>
            <input
              type="radio"
              name="owners"
              value={owner}
              checked={formData.owners === owner.toString()}
              onChange={handleChange}
            />
            {owner}
          </label>
        ))}
      </div>
      <input
        type="text"
        name="adTitle"
        placeholder="Ad Title"
        value={formData.adTitle}
        onChange={handleChange}
        style={fullWidthInputStyle}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        rows="4"
        style={fullWidthInputStyle}
      ></textarea>
      <div style={buttonContainerStyle}>
        <button onClick={handleClear} style={buttonStyle(false)}>
          Clear
        </button>
        <button onClick={handleSubmit} style={buttonStyle(true)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default VehicleDetailsForm;
