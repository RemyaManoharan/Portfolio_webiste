import React from "react";
import "./Header.css";
import "boxicons";
function Header() {
  return (
    <div className="header">
      <a href="#" className="logo">
        PortFolio
      </a>
      <i className="bx bx-menu" id="menu-icon"></i>
      <nav className="navbar">
        <a href="home" className="active">
          About
        </a>
        <a href="education">Education</a>
        <a href="experirnce">Experience</a>
        <a href="project">Projects</a>
        <a href="contact">Contact</a>
      </nav>
    </div>
  );
}

export default Header;
