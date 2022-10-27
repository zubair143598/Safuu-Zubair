import React from "react";
import Dashboard from "../Elements/Dashboard";
import Dashboard1 from "../Elements/Dashboard1";
import Footer from "./Footer";
import Header from "./Header";

const Base = (props) => {
  return (
    <>
      <Header />
      <hr />
      <Dashboard1/>
      {props.children}

      <Footer />
    </>
  );
};

export default Base;
