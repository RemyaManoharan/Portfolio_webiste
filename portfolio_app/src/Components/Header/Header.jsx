import React from "react";
import "./Header.css";
import "boxicons";
import { Link } from "react-scroll";
function Header() {
  return (
    <div className="header">
      <a href="#" className="logo">
        PortFolio
      </a>
      <i className="bx bx-menu" id="menu-icon"></i>
      <nav className="navbar">
        <Link className="menuItem">About</Link>
        <Link className="menuItem">Education</Link>
        <Link className="menuItem">Experience</Link>
        <Link className="menuItem">Projects</Link>
        <Link className="menuItem">Contact</Link>
         
      </nav>
    </div>
  );
}

export default Header;
