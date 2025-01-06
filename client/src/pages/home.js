import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/home.css";
import Testimonials from "../component/Testimonials";
import About from "../component/aboutComponent";
import { Link } from "react-router-dom";
import "../index.css";

function home() {
  const images = [
    "/images/bar.jpg",
    "/images/backview.jpeg",
    "/images/back-pool.jpg",
  ];
  return (
    <>
      <Carousel interval={5000}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 imageCarousel"
              src={image}
              alt={`slide ${index}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div
        style={{
          height: "300px",
          backgroundColor: "hsl(225, 76%, 13%)",
          display: "grid",
          placeItems: "center",
        }}
      >
        {" "}
        <Link to="/rooms">
          {" "}
          <button className="btn-css py-3 px-4">
            {" "}
            Check Room Avalability{" "}
          </button>
        </Link>{" "}
      </div>
      <About />
      <Testimonials />
    </>
  );
}

export default home;
