import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ReactSlider from "react-slider";
import "../css/filter.css"; // Ensure this file contains the updated CSS

const BudgetFilter = ({ toggleFilter, filters }) => {
  const [range, setRange] = useState([400000, 800000]); // Two values: From and To

  const handleSliderChange = (newRange) => {
    setRange(newRange);
  };

  const resetRange = () => {
    setRange([100000, 800000]);
  };

  const applyFilter = () => {
    console.log("Applied Range:", range);
    // Add functionality to filter results based on the selected range
  };

  return (
    <div
      className="border p-3 mb-3"
      style={{
        borderRadius: "8px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        className="d-flex justify-content-between align-items-center"
        onClick={() => toggleFilter("budget")}
        style={{ cursor: "pointer" }}
      >
        <span className="fw-bold" style={{ fontSize: "16px" }}>
          BUDGET
        </span>
        <span style={{ fontSize: "16px", color: "#292D32" }}>
          {filters.budget ? "▲" : "▼"}
        </span>
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
                <span
                  style={{
                    position: "absolute",
                    bottom: "-35px", // Center the text below the thumb
                    fontSize: "12px",
                    backgroundColor: "#005B96",
                    color: "#FFFFFF",
                    borderRadius: "4px",
                    padding: "2px 6px",
                    fontWeight: "bold",
                  }}
                >
                  {state.index === 0 ? "From" : "To"}
                </span>
              </div>
            )}
            style={{
              marginTop: "16px",
            }}
          />

          {/* Reset and Apply Buttons */}
          <div className="d-flex justify-content-end mt-5 gap-2">
            <Button
              variant="outline-primary"
              onClick={resetRange}
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                borderRadius: "24px",
                padding: "8px 24px",
                color: "#005B96",
                border: "2px solid #005B96",
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
                padding: "8px 24px",
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
