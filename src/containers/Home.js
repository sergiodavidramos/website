import React from "react";
import { connect } from "react-redux";
import "../assets/styles/Home.css";
import ImageBackground from "../components/ImageBackground";
import Name from "../components/Name";
import Networks from "../components/Networks";
import Arrow from "../components/Arrow";

import image from "../assets/static/image.jpeg";
const Home = ({info, location}) => {
    const inf=info[0];
    
  return (
    <div className="LayoutHome">
      <ImageBackground image={image} isBig />
      <Name role={inf.name} />
      <Networks info1={inf.net1} info2={inf.net2} info3={inf.net3}  />
      <Arrow toRight text={inf.arrow} toPage={"/about"} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    info: state.info.home
  };
};

export default connect(mapStateToProps, null)(Home);
