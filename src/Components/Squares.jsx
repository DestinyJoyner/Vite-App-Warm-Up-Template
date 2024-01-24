import React from "react";
import { useState } from "react";


const Squares = () => {
// const [color, setColor] = useState(false);

    // function changeColor = {
    //     setColor
    // }

    return (
        <div className="parent">
            <div className="one">testing one!</div>
            <div className="two">testing two!</div>
            <div className="three">testing three!</div>
        </div>
    )
}


export default Squares;


/**
 * How to add a gradiant color stripe
 * .box1 {
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100vh;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.box2 {
	background: linear-gradient(-45deg, blue, green, red, purple);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100vh;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.box3 {
	background: linear-gradient(-45deg, magenta, yellow, orange);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100vh;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
 */