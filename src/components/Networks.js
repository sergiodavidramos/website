import React from "react";
import { Animated } from "react-animated-css";
import envelope from "../assets/static/envelope.svg";
import github from "../assets/static/github-logo.svg";
import instagram from "../assets/static/instagram.svg";
import twitter from "../assets/static/twitter.svg";
import "../assets/styles/components/Networks.css";

const Networks = ({ info1, info2, info3 }) => (
  <div className="Networks-container">
    <Animated animationIn="flipInX" animationInDelay={3000} isVisible={true}>
      <div className="Paragraph">
        <p>{info1}</p>
        <p>{info2}</p>
        <p>{info3}</p>
      </div>
    </Animated>
    <Animated animationIn="flipInX" animationInDelay={2000} isVisible={true}>
      <a href="https://github.com/sergiodavidramos" target="blank">
        <img src={github} alt="Github" />
      </a>
    </Animated>
    <Animated animationIn="flipInX" animationInDelay={2000} isVisible={true}>
      <a href="https://twitter.com/ervicode" target="blank">
        <img src={twitter} alt="Twitter" />
      </a>
    </Animated>
    <Animated animationIn="flipInX" animationInDelay={2000} isVisible={true}>
      <a href="https://www.instagram.com/ervicode/" target="blank">
        <img src={instagram} alt="Instagram" />
      </a>
    </Animated>
    <Animated animationIn="flipInX" animationInDelay={2000} isVisible={true}>
      <a href="mailto:sergioramosdavid@hotmail.com" target="blank">
        <img src={envelope} alt="Github" />
      </a>
    </Animated>
  </div>
);

export default Networks;
