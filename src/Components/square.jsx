import React, { useState } from "react";
import "./clickSquare.css";

function ClickSquare() {
  const [colors, setColors] = useState(["#F3AC3C", "#1A4341", "#998235"]);

  const handleSquareClick = (index) => {
    const newColor = [...colors];
    newColor[index] = "#998235";
    setColors(newColor);
  };

  return (
    <div className="container">
      {/* {squareColors.map((color, index) => ( */}
      <div className="square1" onClick={() => handleSquareClick(index)}></div>
      <div className="square2"></div>
      <div className="square3"></div>
    </div>
  );
}

export default ClickSquare;
