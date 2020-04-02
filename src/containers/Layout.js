import React from "react";
import Header from "../components/Header";
import "../assets/styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="Background">
      <Header/>
      {children}
    </div>
  );
};

export default Layout;
