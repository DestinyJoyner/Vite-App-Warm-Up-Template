import React from 'react'
import { useState } from 'react';


const [square, setSquare] = useState(false);


 function Square() {

  function colorChange() {
      setSquare(square === "blueviolet" ? "aqua" : "gold")
  }

  return (
  
 <>
    <div className="square1">Square</div>
    <div className="square2">Square</div>
    <div className="square3">Square</div>
  
    <button onClick={colorChange}></button>
     
    </>

  )
}

export default Square;