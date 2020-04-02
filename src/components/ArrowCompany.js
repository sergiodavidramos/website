import React from "react";
// import { connect } from "react-redux";
// import { setCompany } from "../actions";
import arrow from "../assets/static/arrow-pointing-to-right.svg";
import "../assets/styles/components/ArrowCompany.css";

const ArrowCompany = ({ toRight, index, changeCompany }) => {

  return (
    <div
      onClick={()=>changeCompany(toRight)}
      className={
        toRight ? "ArrowCompany-container-right" : "ArrowCompany-container-left"
      }>
      <img src={arrow} alt="arrow" />
    </div>
  );
};

export default ArrowCompany;
