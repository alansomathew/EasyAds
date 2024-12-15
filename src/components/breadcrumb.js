import React from "react";
import { Breadcrumb } from "react-bootstrap";

const BreadcrumbNavigation = () => {
  return (
    <div
      style={{
        backgroundColor: "#F9FAF7", // Light background
        padding: "10px 20px", // Spacing
        borderBottom: "2px solid #FFD700", // Yellow underline
      }}
    >
      <Breadcrumb
        style={{
          margin: "0", // Remove default margin
          fontSize: "14px", // Font size for text
          fontWeight: "500", // Slightly bold text
          color: "#6c757d", // Neutral gray
        }}
      >
        <Breadcrumb.Item
          href="#home"
          style={{ color: "#005B96", textDecoration: "none" }}
        >
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item
          href="#cars"
          style={{ color: "#005B96", textDecoration: "none" }}
        >
          Cars
        </Breadcrumb.Item>
        <Breadcrumb.Item active style={{ color: "#212529", fontWeight: "bold" }}>
          Cars in Kerala
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbNavigation;
