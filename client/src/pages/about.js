import React from "react";
import "../styles/about.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="main-div" >
      <div
        className="img-div w-100 p-0"
        style={{ height: "300px", position: "relative" }}
      >
        <div className="overlay"></div>{" "}
        <div className="image w-100" style={{ height: "100%" }}>
          <img
            src="/images/about.jpg"
            alt="about us"
            style={{ objectFit: "cover" }}
          />
          <h2> ABOUT</h2> 
          <Link to="/">
            <p> Home </p>
          </Link>
        </div>
      </div>
      <div className="aboutPageTxt">
        <h1> The Most Prefered Hotel in West Africa</h1>
        <p>
          AGB Hotels & Suites is the most preferred hotel in West Africa, and it
          is all about the right mix! Located in the heart of Victoria Island,
          we offer our clients a perfect blend of business & leisure amenities
          with dining and recreational options delicately infused in one amazing
          space. We crown all these with services that meet the highest
          international standards.
        </p>
        <p>
          {" "}
          Overlooking the new Eko Atlantic City and Atlantic Ocean, it is just a
          10-minute drive to the City Centre and only 45minutes away from the
          Airport.
        </p>
        <p>
          {" "}
          Our hotels are designed for your comfort and convenience. Your
          security is our primary concern and you will find our customer care
          second to none.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          blanditiis mollitia amet eos! Autem atque ipsam exercitationem
          deleniti ad unde beatae. Fuga temporibus eligendi quibusdam
          necessitatibus non, deleniti repudiandae error!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          fugit et, eum labore totam doloremque. Voluptatibus, aut? Illo eius ut
          tenetur quisquam. Iusto, doloribus? Sequi, magni. Exercitationem qui
          harum dicta!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          fugit et, eum labore totam doloremque. Voluptatibus, aut? Illo eius ut
          tenetur quisquam. Iusto, doloribus? Sequi, magni. Exercitationem qui
          harum dicta!
        </p>
      </div>
    </div>
  );
}

export default About;
