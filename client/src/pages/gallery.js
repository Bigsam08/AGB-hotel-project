import React from "react";
import "../styles/gallerypage.css";
import { Link } from "react-router-dom";

function Gallery() {
  const images = [
    "/images/backview.jpeg",
    "/images/Beach_side.jpg",
    "/images/bar.jpg",
    "/images/gym1.jpg",
    "images/pedicure.jpg",
    "/images/swimming_pool.jpeg",

    "/images/parking-1.jpeg",
    "/images/resturant.jpg",
    "/images/spaghetti.jpeg",
    "/images/semo.jpeg",
    "/images/tennis.jpeg",
    "/images/about.jpg",
  ];

  const backgroundImageStyle = {
    backgroundImage: "url(/images/resturant.jpg)",
    backgroundPosition: "center",
    position: "relative",
    width: "100%",
    height: "300px",
    backgroundSize: "cover",
  };

  return (
    <div className="main">
      <div className="hero-container" style={backgroundImageStyle}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h2>Our Gallery</h2>
            <Link to="/" className="btn">
              Home
            </Link>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <h2 className="text-center mb-4 p-3 ht">Our Photo Speaks</h2>
        <div className="row">
          {images.map((image, index) => (
            <div
              key={index}
              className="col-md-4 col-sm-6 mb-4  small-device-img"
            >
              <div className="gallery-item">
                <img
                  src={image}
                  alt={`Hotel  ${index + 1}`}
                  className="img-fluid"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
