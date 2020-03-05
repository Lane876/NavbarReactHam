import React from "react";
import "./Hamburger.css";

const Hamburger = props => {
  let drawerOpen = "hamburger";
  if (props.btn) {
    drawerOpen = "hamburger x";
  }

  return (
    <div className={drawerOpen} onClick={props.toggle}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
};

export default Hamburger;
