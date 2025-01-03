import React from "react";
import { Carousel } from "react-bootstrap";
import '../styles/home.css';

function home() {
  const images = ["/images/bar.jpg", "/images/backview.jpeg", "/images/back-pool.jpg" ];
  return (
    <>
    <Carousel interval={5000}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100 imageCarousel" src={image} alt={`slide ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    <p> hi home</p>
      
    </>
  );
}

export default home;
