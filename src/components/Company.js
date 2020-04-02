import React from "react";
import { Animated } from "react-animated-css";
import "../assets/styles/components/Company.css";
import ArrowCompany from "./ArrowCompany";
import angular from "../assets/static/technologies/angular.png";
import firebase from "../assets/static/technologies/firebase.png";
import graphql from "../assets/static/technologies/graphql.png";
import ionic from "../assets/static/technologies/ionic.png";
import java from "../assets/static/technologies/java.png";
import mongo from "../assets/static/technologies/mongo.jpg";
import node from "../assets/static/technologies/nodejs.png";
import reactnative from "../assets/static/technologies/react-native.png";
import react from "../assets/static/technologies/react.png";
import redux from "../assets/static/technologies/redux.png";
import Hashtag from "../assets/static/technologies/hashtag.png";
import javascript from "../assets/static/technologies/javascript.png";
import bootstrap from "../assets/static/technologies/bootstrap.png";
import vue from "../assets/static/technologies/vue.png";
import net from "../assets/static/technologies/net.png";
import sqlite from "../assets/static/technologies/sqlite.png";
import mini from "../assets/static/company/mini.svg";
import planeta from "../assets/static/company/planeta.png";
import sertecLogo from "../assets/static/company/Sertec-logo.png";

const setImageTechnology = name => {
  switch (name) {
    case "Angular":
      return angular;
    case "Angular.js":
      return angular;
    case "React Native":
      return reactnative;
    case "React":
      return react;
    case "Node.js":
      return node;
    case "MongoDB":
      return mongo;
    case "GraphQL":
      return graphql;
    case "Redux":
      return redux;
    case "Firebase":
      return firebase;
    case "Ionic":
      return ionic;
    case "Vue.js":
      return vue;
    case "Java":
      return java;
    case "Sqlite":
      return sqlite;
    case ".Net":
      return net;
    case "C#":
      return Hashtag;
    case "Javascript":
      return javascript;
    case "Bootstrap":
      return bootstrap;
    default:
      return "";
  }
};
const setImageCompany = name => {
  switch (name) {
    case "minitwitter":
      return mini;
    case "planeta":
      return planeta;
    case "sertec":
      return sertecLogo;
    default:
      return "";
  }
};

const Company = ({ index, lengthCompany, company, changeCompany }) => {
  return (
    <div className="Company-container">
      <Animated
        animationIn="bounceInLeft"
        isVisible={true}
        className="Company-title">
        <h1>{company.name}</h1>
      </Animated>
      <Animated
        animationIn="bounceInLeft"
        isVisible={true}
        animationInDelay={800}
        className="Company-role" >
        <p>{company.role}</p>
      </Animated>
      <Animated
        animationIn="bounceInRight"
        animationInDelay={1200}
        isVisible={true}
        className="Company-description" >
        <p>{company.description}</p>
      </Animated>

      <div className="Company-technologies">
        {company.technologies.map(obj => (
          <Animated
            key={obj.index}
            animationIn="flipInX"
            animationInDelay={1800}
            isVisible={true} >
            <div
              id="image-tech"
              style={{
                backgroundImage: `url(${setImageTechnology(obj.technology)})`
              }}
            ></div>
            <span>{obj.technology}</span>
          </Animated>
        ))}
      </div>

      <Animated
        className="Company-year"
        animationIn="bounceInLeft"
        animationInDelay={1800}
        isVisible={true}
      >
        <span style={{ fontWeight: "bold" }}>Año</span>
        <span>{company.year}</span>
      </Animated>

      <Animated
        className="Company-image"
        animationInDelay={1200}
        animationIn="fadeIn"
        isVisible={true}>
        <img src={setImageCompany(company.image)} alt={company.name} />
      </Animated>
      <div
        style={
          index === 0
            ? { justifyContent: "flex-end" }
            : { justifyContent: "space-between" }
        }
        className="Company-arrows"
      >
        {index !== 0 && (
          <ArrowCompany
            toRight={false}
            index={index}
            changeCompany={changeCompany}
          />
        )}
        {index !== lengthCompany - 1 && (
          <ArrowCompany index={index} changeCompany={changeCompany} toRight />
        )}
      </div>
    </div>
  );
};

// const mapStateToProps = state => {};
export default Company;
