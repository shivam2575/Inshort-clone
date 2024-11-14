import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const divStyle = { width: "100px" };
  return (
    <div id="nav-container" className="">
      <nav id="nav">
        <div id="nav-menu">
          <FontAwesomeIcon icon={faBars} />
          <span>Menu</span>
        </div>
        <div id="nav-logo">
          <img src="/vite.svg" alt="navbar logo" />
        </div>
        <div style={{ width: 100 }}></div>
      </nav>
    </div>
  );
};

export default Navbar;
