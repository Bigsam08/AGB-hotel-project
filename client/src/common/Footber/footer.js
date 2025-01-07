import React from "react";
import { Link } from "react-router-dom";
import "./footber.css";

function Footer() {
  return (
    <footer className="foot mt-3">
      <div className="icons">
        <Link to="https://github.com/Bigsam08">
          <img src="/images/github.svg" alt="github" />
        </Link>
        <Link to="https://www.youtube.com/@mastersamuel6147">
          <img src="/images/youtube.svg" alt="youtube" />
        </Link>
        <Link to="https://x.com/OlusamT?s=09.google.com">
          <img src="/images/x.svg" alt="twitter" />
        </Link>
        <Link to="https://linkedin.com/in/oluwashola-agbebi-310964270">
          <img src="/images/linkedin.svg" alt="linkedin" />
        </Link>
        <Link to="https://instagram.com/olu_sam7">
          <img src="/images/instagram.svg" alt="ig" />
        </Link>
      </div>
      <div className="list">
        <ul>
          <li>
            <Link to="/" className="footer-link">Home</Link>
          </li>
         
          <li>
            <Link to="/rooms" className="footer-link">Room Avalability </Link>
          </li>
          <li>
            <Link to="/gallery" className="footer-link">Gallery</Link>
          </li>
          <li>
            <Link to="/about" className="footer-link">About</Link>
          </li>
          <li>
            <Link to="/contact" className="footer-link">Contact</Link>
          </li>
         
        </ul>
      </div>
      <div className="copy-rights">
        <div className="privacy" style={{ color: "white"}}>
          <p style={{color: "white"}}> Privacy Policy</p>
          <p style={{color: "white"}}>Terms of services</p>
        </div>
        <p style={{color: "white"}}> &copy; 2024 AGB Hotels & Suites. All rights reserved.</p><br></br>
        <p style={{ color: "red"}}> Designed by <span className="designer-name"> Agbebi Olu Samuel</span></p>
      </div>
    </footer>
  );
}
export default Footer;
