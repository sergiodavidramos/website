import React from "react";
import { connect } from "react-redux";
import {setIndex} from "../actions"
import ImageBackground from "../components/ImageBackground";
import image from "../assets/static/image4.jpeg";
import Arrow from "../components/Arrow";
import "../assets/styles/Work.css";
import Company from "../components/Company";
import _ from "lodash";

const Work = ({ info, indexComp, setIndex }) => {
 const handleChangeCompany = toRight => {
    const iComp = toRight
      ? indexComp + 1
      : indexComp - 1;
    setIndex(iComp);
  };
  const orderCompanys = comp => _.orderBy(comp, ["id"], "desc");
  const companysShow = orderCompanys(info);
  return (
    <div className="LayoutWork">
      <ImageBackground image={image} isBig />
      <Arrow toRight={false} text={"Volver a sobre mi"} toPage={"/about"} />
      {companysShow.length > 0 && (
        <Company
          index={indexComp}
          key={companysShow[indexComp].id}
          lengthCompany={companysShow.length}
          changeCompany={handleChangeCompany}
          company={companysShow[indexComp]}
        />
      )}
      <Arrow toRight text={"Aquí están mis estudios!"} toPage={"/studies"} />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    info: state.info.comp,
    indexComp: state.indexComp
  };
};

const mapDispatchToProps = {
  setIndex
};
export default connect(mapStateToProps, mapDispatchToProps)(Work);
