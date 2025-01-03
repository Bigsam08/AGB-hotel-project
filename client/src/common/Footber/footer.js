import React from "react";
import { Link } from "react-router-dom";
import "./footber.css";

function Footer() {
  return (
    <footer className="foot">
      <div className="icons">
        <Link to="https.google.com">
          <img src="/images/github.svg" alt="github" />
        </Link>
        <Link to="https.google.com">
          <img src="/images/youtube.svg" alt="youtube" />
        </Link>
        <Link to="https.google.com">
          <img src="/images/x.svg" alt="twitter" />
        </Link>
        <Link to="https.google.com">
          <img src="/images/linkedin.svg" alt="linkedin" />
        </Link>
        <Link to="https.google.com">
          <img src="/images/instagram.svg" alt="ig" />
        </Link>
      </div>
      <div className="list">
        <ul>
          <li>
            <Link to="/" className="footer-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="footer-link">About</Link>
          </li>
          <li>
            <Link to="/contact" className="footer-link">Contact</Link>
          </li>
          <li>
            <Link to="/rooms" className="footer-link">Room Avalability </Link>
          </li>
          <li>
            <Link to="/gallery" className="footer-link">Gallery</Link>
          </li>
        </ul>
      </div>
      <div className="copy-rights">
        <div className="privacy" style={{ color: "white"}}>
          <p style={{color: "white"}}> Privacy Policy</p>
          <p style={{color: "white"}}>Terms of services</p>
        </div>
        <p style={{color: "white"}}> &copy; 2024 AGB Hotels & Suites. All rights reserved.</p><br></br>
        <p> Designed by <span className="designer-name"> Agbebi Olu Samuel</span></p>
      </div>
    </footer>
  );
}
export default Footer;
