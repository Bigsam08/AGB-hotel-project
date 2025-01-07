import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [display, setDisplay] = useState(false);
  const displayMenu = () => {
    setDisplay(!display);
  };
  const closeToggleMenu = () => {
    setDisplay(false);
  }

  return (
    <>
      <nav className="navbar">
        <div className="left">
          <Link to="/" className="linkTxt">
            Home
          </Link>
          <Link to="/rooms" className="linkTxt">
            Room Avalability
          </Link>
        </div>
        <div className="logo-box">
          <div className="box-left">
            <Link to="/">
              <img
                src="/images/new-hotel-logo.png"
                alt="logoimg"
                className="logo"
              />
            </Link>
          </div>
          <div className="box-right">
            <p> AGB HOTELS <span className="inline"> & SUITES</span></p>
          </div>
        </div>

        <div className="drop-menu">
          <img src="/images/menu.png" alt="menu icon" onClick={displayMenu} />
        </div>
        <div className="navbarNav">
        <Link to="/gallery" className="linkTxt">
            {" "}
            Gallery{" "}
          </Link>
          <Link to="/contact" className="linkTxt">
            {" "}
            Contact Us{" "}
          </Link>
          <Link to="/about" className="linkTxt">
            {" "}
            About Us{" "}
          </Link>
          
        </div>
      </nav>
      <div className="dropped-toggle-list">
        {display && (
          <ul className="toggle-list">
            <li>
              {" "}
              <Link to="/" className="linkTxt" onClick={closeToggleMenu} >
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/rooms" className="linkTxt" onClick={closeToggleMenu}>
                Room Avalability
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/gallery" className="linkTxt" onClick={closeToggleMenu}>
                Gallery
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/contact" className="linkTxt" onClick={closeToggleMenu}>
                Contact Us
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/about" className="linkTxt" onClick={closeToggleMenu}>
                About Us
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default Navbar;
