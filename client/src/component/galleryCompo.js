import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/gallery.css";

const imagesDisplay = [
  "/images/bar.jpg",
  "/images/swimming_pool.jpeg",
  "/images/food-1.jpeg",
  "/images/gym1.jpg",
  "/images/about.jpg",
  "/images/pedicure.jpg",
  "/images/Beach_side.jpg",
  "/images/foodd.jpg",
];

function GalleryCompo() {
  // State to keep track of which images to show (initially the first 4)
  const [startIndex, setStartIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Handle showing the next set of 4 images
  const showNextImages = () => {
    setFade(true);
    setTimeout(() => {
      setStartIndex((prevIndex) =>
        Math.min(prevIndex + 4, imagesDisplay.length - 4)
      ); // Show next 4 images
      setFade(false); // Trigger fade-in effect after changing images
    }, 300);
  };

  // Handle going back to previous set of 4 images
  const showPreviousImages = () => {
    setFade(true);
    setTimeout(() => {
      setStartIndex((prevIndex) => Math.max(prevIndex - 4, 0)); // Show previous 4 images
      setFade(false);
    }, 300);
  };

  // Get the next 4 images based on the startIndex
  const visibleImages = imagesDisplay.slice(startIndex, startIndex + 4);

  return (
    <div
      className="d-grid gallery-div"
      style={{
        height: "600px",
        background: "hsl(225, 76%, 13%)",
        placeItems: "center",
      }}
    >
      <p
        className="pt-3 text-center"
        style={{ fontFamily: "Agency FB", fontSize: "42px", color: "white" }}
      >
        {" "}
        OUR GALL <span style={{ color: "hsl(43, 80%, 32%)" }}> ERY</span>
      </p>
      <div
        className="gallery mt-0  col-md-8 p-3"
        style={{
          height: "300px",
          overflow: "hidden",
          position: "relative",
          transition: "opacity 0.3s ease-out",
          opacity: "1",
        }}
      >
        {visibleImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${startIndex + index + 1}`}
            className="pic-bright"
          />
        ))}

        <div style={{ marginTop: "10px" }}>
          {startIndex > 0 && (
            <button onClick={showPreviousImages} className="slide-lft">
              &lt;
            </button>
          )}
          {startIndex + 4 < imagesDisplay.length && (
            <button onClick={showNextImages} className="slide-btn">
              &gt;
            </button>
          )}
        </div>
      </div>

      <div>
        <Link to="/Gallery">
          <button className="btn-css"> MORE &rarr;</button>
        </Link>
      </div>
    </div>
  );
}

export default GalleryCompo;
