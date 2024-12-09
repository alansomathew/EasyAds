import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ReactSlider from "react-slider"; // Import react-slider
import '../css/filter.css'; // Adjust the path based on your folder structure


const BudgetFilter = ({ toggleFilter, filters }) => {
  const [range, setRange] = useState([400000, 800000]); // Two values: From and To

  const handleSliderChange = (newRange) => {
    setRange(newRange); // Update the range values dynamically
  };

  const resetRange = () => {
    setRange([100000, 800000]); // Reset to default values
  };

  const applyFilter = () => {
    console.log("Applied Range:", range);
    // Add functionality to filter results based on the selected range
  };

  return (
    <div
      className="border p-3 mb-3"
      style={{ borderRadius: "8px", backgroundColor: "#FFFFFF" }}
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
          ].map((rangeLabel, index) => (
            <Form.Check
              key={index}
              type="checkbox"
              id={`budget-${index}`}
              label={rangeLabel}
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
              ₹ {range[0].toLocaleString()}
            </span>
            <span style={{ fontSize: "14px", fontWeight: "bold" }}>
              ₹ {range[1].toLocaleString()}
            </span>
          </div>

          {/* Range Slider */}
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="thumb"
            trackClassName="track"
            min={100000}
            max={1000000}
            step={10000}
            value={range}
            onChange={handleSliderChange}
            renderThumb={(props, state) => (
              <div {...props} className="thumb">
                {state.valueNow.toLocaleString()}
              </div>
            )}
            style={{
              marginTop: "16px",
            }}
          />

          {/* Reset and Apply Buttons */}
          <div className="d-flex justify-content-between mt-3">
            <Button
              variant="outline-primary"
              onClick={resetRange}
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
              onClick={applyFilter}
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
  );
};

export default BudgetFilter;
