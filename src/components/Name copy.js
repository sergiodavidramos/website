import React from "react";
import { Animated } from "react-animated-css";
import "../assets/styles/components/Name.css";
import programador from "../assets/static/programador.png";
import foto from "../assets/static/foto.jpg";
const Name = ({ role}) => (
  <div className="Name-container">
    <Animated
      animationInDelay={300}
      animationIn="bounceInDown"
      isVisible={true}
      className="Avatar-container"
    >
      <img src={foto} alt="Foto" className="Avatar" />
    </Animated>
    <Animated
      animationInDelay={300}
      animationIn="bounceInLeft"
      isVisible={true}
    >
      <span>SERGIO DAVID</span>
    </Animated>
    <Animated
      animationInDelay={300}
      animationIn="bounceInRight"
      isVisible={true}
    >
      <span className="Name-Margin-Lastname">RAMOS</span>
    </Animated>
    <Animated animationIn="fadeInUp" animationInDelay={1000} isVisible={true}>
      <p className="Name-profession">
        <img src={programador} alt="programador" />'{role}'
        <img src={programador} alt="programador" />
      </p>
    </Animated>
  </div>
);

export default Name;
