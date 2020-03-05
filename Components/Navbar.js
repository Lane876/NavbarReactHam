import React from "react";
import "./Navbar.css";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">LOGO</Link>
      </div>
      <div className="spacer"></div>
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Hamburger toggle={props.toggle} btn={props.btn} />
    </div>
  );
};

export default Navbar;
