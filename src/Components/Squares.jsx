import React from 'react'
import { useState } from 'react'
function Squares() {

const [isColor, setIsColor] = useState(false);

 const changeColor =()=>{
    setIsColor(!isColor)
 }

 
  return (


    <div className="container">


    <div className="square blue" ></div>


    <div className="square red"></div>


    <div className="square green"></div>


    <div className="square yellow"></div>

    </div>
  )
}

export default Squares