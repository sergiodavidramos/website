import React from "react";
import { connect } from "react-redux";
import ImageBackground from "../components/ImageBackground";
import "../assets/styles/Studies.css";
import image from "../assets/static/image5.jpeg";
import Arrow from "../components/Arrow";
import Study from "../components/Study";

const Studies = ({ studies }) => (
  <div className="LayoutStudies">
    <ImageBackground image={image} isBig />
    <Arrow toRight={false} text={"Volver a trabajos"} toPage={"/work"} />
    <div className="Studies">
      <div className="Studies-item">
        {studies.map(study => (
          <Study
            marginTop={study.margin}
            certificates={study.certificates}
            image={study.image}
            name={study.name}
            key={study.id}
            info={study.infoSpanish}
          />
        ))}
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    studies: state.info.studies
  };
};

export default connect(mapStateToProps, null)(Studies);
