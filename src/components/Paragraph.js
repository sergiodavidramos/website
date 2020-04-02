import React from "react";
import { Animated } from "react-animated-css";
import "../assets/styles/components/Paragraph.css";

const Paragraph = ({ info }) => (
  <div className="Paragraph-container">
    <Animated animationIn="bounceInLeft" isVisible={true}>
      <span className="Paragraph-hi">{info.hi}</span>
    </Animated>
    <Animated
      animationIn="bounceInRight"
      animationInDelay={500}
      isVisible={true}
      className="Paragraph-text-container"
    >
      <span className="Paragraph-text">{info.text}</span>
    </Animated>
  </div>
);

export default Paragraph;
