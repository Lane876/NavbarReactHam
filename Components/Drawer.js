import React from "react";
import "./Drawer.css";
import { Link } from "react-router-dom";

const Drawer = props => {
  let classToggler = "drawer";
  if (props.toggle) {
    classToggler = "drawer open";
  }

  return (
    <div className={classToggler}>
      <div className="drawer-links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/about">About</a>
          </li>

          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
