import React from "react";

/** Testimonials card to get our customers review */
const Testimonials = [
  {
    name: "Ayobami David",
    location: "Barcelona, Spain",
    rating: "/images/stars.jpg",
    picture: "/images/david.jpg",
    review:
      "I had a great time in the city of lagos when i visited Nigeria. Picking AGB Hotels was a doubt at the beginning but when we landed, The hospitality was awesome, security was tonotch, environment was peaceful and they had so many amenities we needed. AGB Hotels will always be my home anytime i reurn to nigeria.",
  },
  {
    name: "Samuel Olu",
    location: "Lagos, Nigeria",
    rating: "/images/stars.jpg",
    picture: "/images/sam.jpg",
    review:
      "Without doubt, it may look quite expensive but this hotel will give you more than what you paid for, clean rooms, organization is top level. I will always recommend AGB Hotels & Suites anyday anytime and anywhere to anybody. This is what makes it a 5 Star Hotel.",
  },
  {
    name: "Rachel Michaels",
    location: "Abuja, Nigeria",
    rating: "/images/stars.jpg",
    picture: "/images/lady.jpg",
    review:
      "I had a great time at this hotel, the meals were awesome, i had a space to park my car, the environment was condusive, beautiful city view and it has a beach around. I must confess,i felt home far from home.",
  },
];

function TestimonialComponent() {
  return (
    <div
      className="main-div-container"
      style={{ height: "fit-content", padding: "20px 0px" }}
    >
      <div style={{ textAlign: "center" }}>
        {" "}
        <p
          style={{
            fontSize: "42px",
            fontFamily: "Agency FB",
            color: "hsl(225, 76%, 13%)",
            fontWeight: "700",
          }}
        >
          {" "}
          TESTIMO <span style={{ color: "hsl(43, 80%, 32%)" }}>NIALS</span>{" "}
        </p>
      </div>
      <div
        className="div-testimonial p-3  col-md-12  d-flex"
        style={{ justifyContent: "center" }}
      >
        {Testimonials.map((data, index) => (
          <div
            className="testimonial-card p-3 col-md-3"
            key={index}
            style={{
              margin: "10px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              borderColor: "blue",
              border: "2px",
              boxShadow: "0px 5px 15px hsla(0, 0%, 0%, 0.103)",
              position: "relative",
            }}
          >
            <img
              src={data.picture}
              alt="pp"
              style={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                padding: "10px",
                objectFit: "cover",
                position: "absolute",
                left: "80%",
                bottom: "0%",
              }}
            />
            <p style={{ fontStyle: "italic" }}> "{data.review}" </p>
            <b>
              {" "}
              <p>
                {" "}
                {data.name}, {data.location}{" "}
              </p>
            </b>
            <p>
              {" "}
              Rating:{" "}
              <img
                src={data.rating}
                alt="ratings"
                style={{ height: "60px", paddingTop: "0px" }}
              />{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialComponent;
