import React from "react";
import { Link } from "react-router-dom";
import "../styles/aboutCompo.css";

function aboutComponent() {
  return (
    <div
      className=" mt-3"
      style={{
        height: "1000px",
        position: "relative",
        boxShadow: "0px 5px 15px hsla(0, 0%, 0%, 0.103)",
      }}
    >
      <p className="h-style text-center">
        {" "}
        WELCOME TO{" "}
        <span style={{ color: "hsl(43, 80%, 32%)" }}>AGB HOTEL & SUITES </span>
      </p>
      <div
        className="about-img "
        style={{ height: "600px", position: "relative" }}
      >
        <img
          src="/images/front-view.jpg"
          alt="about our hotel"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        />
      </div>
      <div className="about-txt  p-3 bg-white col-md-7 col-sm-12">
        <b className="sethead">
          <p
            style={{
              fontFamily: "Agency FB",
              fontSize: "34px",
              color: "hsl(43, 75.00%, 28.20%)",
            }}
          >
            {" "}
            ABOUT US{" "}
          </p>
        </b>
        <b>
          {" "}
          <p style={{ fontFamily: "sans-serif" }}>
            {" "}
            The Most Prefered Hotel in West Africa
          </p>
        </b>
        <p>
          AGB Hotels & Suites is the most preferred hotel in West Africa, and it
          is all about the right mix! Located in the heart of Victoria Island,
          we offer our clients a perfect blend of business & leisure amenities
          with dining and recreational options delicately infused in one amazing
          space. We crown all these with services that meet the highest
          international standards..
        </p>
        <p>
          {" "}
          Overlooking the new Eko Atlantic City and Atlantic Ocean, it is just a
          10-minute drive to the City Centre and only 45minutes away from the
          Airport.
        </p>
        <p className="set-body">
          {" "}
          Our hotels are designed for your comfort and convenience. Your
          security is our primary concern and you will find our customer care
          second to none.
        </p>
        <Link to="/about" className="btn-css">
          {" "}
          <button className="btn-css">
            {" "}
            LEARN MORE <span style={{ color: "white" }}> &#8594;</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default aboutComponent;
