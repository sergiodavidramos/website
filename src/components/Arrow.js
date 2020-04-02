import React from "react";
import { Animated } from "react-animated-css";
import icon from "../assets/static/arrow-pointing-to-right.svg";
import "../assets/styles/components/Arrow.css";
import { Link } from "react-router-dom";
const Arrow = ({ toRight, text, toPage }) => (
  <div style={toRight ? { right: '3%' } : { left: '1%' }} className="Arrow-container">
    <Animated
      animationIn={toRight ? "bounceInRight" : "bounceInLeft"}
      animationInDelay={2000}
      isVisible={true}>
      <Link to={toPage} className={toRight ? "Arrow-to-right" : "Arrow-to-left"}>
        <img src={icon} alt="arrow" />
         <span>
           
           {text}
           </span>
      </Link>
    </Animated>
  </div>
);

export default Arrow;
