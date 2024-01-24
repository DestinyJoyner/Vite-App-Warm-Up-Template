import React from "react";
// import ./Components/App.css;

const SquareComponent = () => {
  return (
    <div className="square-container">
      <div className="square-one"></div>
      <div className="square-two"></div>
      <div className="square-three"></div>
    </div>
  );
};

export default SquareComponent;

// SquareComponent.jsx
// import React, { useState } from "react";
// import "../App.css";

// const SquareComponent = () => {
//   const [selectedSquare, setSelectedSquare] = useState(null);

//   const handleSquareClick = (index) => {
//     setSelectedSquare(index);
//   };

//   return (
//     <div className="square-container">
//       {[0, 1, 2].map((index) => (
//         <div
//           key={index}
//           className={`square ${selectedSquare === index ? "selected" : ""}`}
//           onClick={() => handleSquareClick(index)}
//         ></div>
//       ))}
//     </div>
//   );
// };

// export default SquareComponent;
