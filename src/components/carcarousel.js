// import React from "react";
// import CarCard from "./CarCard"; // The card component you already created

// const CarCarousel = ({ cards }) => {
//   return (
//     <div className="container mt-4" style={{ maxWidth: "1312px" }}>
//       {/* Header with Title and "See All" */}
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h3 className="text-dark">Cars</h3>
//         <a
//   href="#see-all"
//   className="text-primary"
//   style={{
//     fontSize: "16px",
//     fontFamily: "Poppins", // Correct the font style
//     textDecoration: "none",
//     fontWeight: "bold", // Make the text bold
//     display: "inline-block", // Ensure border and width apply correctly
//     padding: "4px 8px", // Optional: Add padding for spacing
//     transform: "rotate(0deg)", // Apply rotation
//     color: "#005B96", // Text color
//   }}
//   onClick={handleSeeAll}
// >
//   See All  <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }}></i>
// </a>
//       </div>

//       {/* Carousel Section */}
//       <div
//         className="d-flex overflow-auto"
//         style={{
//           gap: "24px",
//           height: "fit-content",
//           paddingBottom: "16px",
//         }}
//       >
//         {cards.map((car, index) => (
//           <div
//             key={index}
//             style={{
//               flex: "0 0 300px", // Card width
//               height: "303.11px", // Hug the height
//             }}
//           >
//             <CarCard {...car} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CarCarousel;
