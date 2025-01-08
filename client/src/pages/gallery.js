import React from "react";
import "../styles/gallerypage.css";
import { Link } from "react-router-dom";
import gymImage from 'client/public/images/gym1.jpg'; 

function Gallery() {
  const images = [
    "https://via.placeholder.com/400x300?text=Room+1",
    "https://via.placeholder.com/400x300?text=Room+2",
    "https://via.placeholder.com/400x300?text=Room+3",
    "https://via.placeholder.com/400x300?text=Room+4",
    "https://via.placeholder.com/400x300?text=Pool",
    "https://via.placeholder.com/400x300?text=Lobby",

    "https://via.placeholder.com/400x300?text=Room+4",
    "https://via.placeholder.com/400x300?text=Pool",
    "https://via.placeholder.com/400x300?text=Lobby",
  ];

  return (
    <>
      <div className="hero-container">
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
        <h2 className="text-center mb-4 p-3 ht">Hotel Gallery</h2>
        <div className="row">
          {images.map((image, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <div className="gallery-item">
                <img
                  src={image}
                  alt={`Hotel Image ${index + 1}`}
                  className="img-fluid"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
