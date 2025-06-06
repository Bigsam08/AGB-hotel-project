import { useState } from "react";
import React from "react";
import "../styles/contact.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Contact() {
  const [guestname, setguestname] = useState("");
  const [guestemail, setguestemail] = useState("");
  const [guestmessage, setguestmessage] = useState("");

  const formMessage = {
    name: guestname,
    email: guestemail,
    message: guestmessage,
  };

  const submitmessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/mail/contact", formMessage);
      Swal.fire("success!!", "Mail sent", "success");
      console.log("Message Sent successfully to backend", response.data);
      setguestemail("");
      setguestname("");
      setguestmessage("");
    } catch (error) {
      Swal.fire("Failed!!", "Message not sent", "error");
      console.log("message not sent!!", error);
    }
  };

  return (
    <div className="" style={{ height: "fit-content" }}>
      <div className="img-div-c w-100 p-0">
        <div className="overlay"></div>
        <div className="image w-100" style={{ height: "100%" }}>
          <img src="/images/about.jpg" alt="Contact Us" />
          <h2 className="contact-us"> Contact Us</h2>
          <Link to="/">
            <p className="p-text"> Home </p>
          </Link>
        </div>
      </div>

      <div className="div-info  d-flex justify-content-center mt-4 p-3">
        <div className="info p-3">
          <b>
            <p style={{ fontSize: "18px" }}> INFORMATION </p>
          </b>
          <p> ADDRESS </p>
          <p>
            <span>
              {" "}
              <img
                src="/images/location.png"
                alt="add"
                className="inline-img"
              />
            </span>
            <b>Plot 1415 PhilipStones Street, Lekki Phase 1, Lagos Nigeria</b>
          </p>

          <p id="title"> PHONE / FAX </p>
          <b>
            <p>
              <span>
                {" "}
                <img
                  src="/images/phone.jpg"
                  alt="phone"
                  className="inline-img"
                />
              </span>
              International Calls: +234 904-381-5024
            </p>
          </b>

          <p id="title"> E-MAIL </p>
          <b>
            <p>
              <span>
                {" "}
                <img src="/images/mail.jpg" alt="mail" className="inline-img" />
              </span>
              mastersamuel2@gmail.com
            </p>
          </b>
        </div>

        <form className="submitForm d-block" onSubmit={submitmessage}>
          <p> GET IN TOUCH </p>
          <br />
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => {
              setguestemail(e.target.value);
            }}
            name="email"
            value={guestemail}
            required
          />
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={guestname}
            onChange={(e) => {
              setguestname(e.target.value);
            }}
            required
          />
          <textarea
            placeholder="send us a message today...."
            name="message"
            value={guestmessage}
            onChange={(e) => {
              setguestmessage(e.target.value);
            }}
            required
          ></textarea>
          <button type="submit"> SEND MESSAGE</button>
        </form>

        <div className="col-4 p-0 agent d-flex">
          <img src="images/contact.jpg" alt="ok" style={{ marginLeft: "0" }} />{" "}
          <p className="p">
            We are available <br />
            on all channels <span style={{ color: "goldenrod" }}> 24/7</span>
            <br /> Don't hesitate to reach us.
          </p>
        </div>
      </div>

      <div className="googlemap py-2" style={{ height: "400px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31716.498246724033!2d3.450373797659464!3d6.45019813490558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf452da3bd44b%3A0x47331fb41adc9d28!2sLekki%20Phase%201%2C%20Lekki%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1732999350256!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          referrerPolicy="no-referrer"
          title="googlemap"
        ></iframe>
      </div>
    </div>
  );
}
export default Contact;
