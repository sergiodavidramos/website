import React from "react";
import { Animated } from "react-animated-css";
import "../assets/styles/components/ImageBackground.css";

const ImageBackground = ({ image, isBig }) => (
  <Animated
    animationIn="fadeIn"
    animationInDelay={1000}
    animationOut="fadeOut"
    isVisible={true}
  >
    <div
      style={isBig ? { width: "53%" } : { width: "45%" }}
      className="ImageBackground-container"
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="ImageBackground"
      >
        <div
          className={
            isBig ? "ImageBackground-left" : "ImageBackground-left-aux"
          }
        ></div>
        <div className="ImageBackground-right"></div>
      </div>
    </div>
  </Animated>
);

export default ImageBackground;
