import { useState } from "react";
import React  from "react";
import "../styles/contact.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Contact() {
  
  const [guestname, setguestname] = useState("");
  const [guestemail, setguestemail] = useState('');
  const [ guestmessage, setguestmessage] = useState("");

  const formMessage = {
    name: guestname,
    email: guestemail,
    message: guestmessage
  };
  
  const submitmessage = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/mail/contact', formMessage);
      Swal.fire("success!!", "Mail sent", "success");
      console.log('Message Sent successfully to backend', response.data)
      setguestemail('');
      setguestname("");
      setguestmessage("");
    } catch (error) {
      Swal.fire("Failed!!", "Message not sent", "error");
      console.log('message not sent!!', error);
    }
  }

  return (
    <div className="" style={{ height: "fit-content" }}>
      <div
        className="img-div w-100 p-0"
        style={{ height: "300px", position: "relative" }}
      >
        <div className="overlay"></div>
        <div className="image w-100" style={{ height: "100%" }}>
          <img
            src="/images/about.jpg"
            alt="Contact Us"
            style={{ objectFit: "cover" }}
          />
          <h2> Contact Us</h2>
          <Link to="/">
            <p> Home </p>
          </Link>
        </div>
      </div>

      <div
        className="div-info  d-flex justify-content-center mt-4 p-3"
        style={{ height: "600px", gap: "10%", position: "relative" }}
      >
        <div className="info p-3">
          <b>
            <p style={{ fontSize: "18px" }}> INFORMATION </p>
          </b>
          <br />
          <p> ADDRESS </p>
          <p>
            <span style={{ marginRight: "3px" }}>
              {" "}
              <img
                src="/images/location.png"
                alt="add"
                style={{ width: "32px", height: "32px" }}
              />
            </span>
            <b>Plot 1415 PhilipStones Street, Lekki Phase 1, Lagos Nigeria</b>
          </p>

          <p id="title"> PHONE / FAX </p>
          <b>
            <p>
              <span style={{ marginRight: "3px" }}>
                {" "}
                <img
                  src="/images/phone.jpg"
                  alt="phone"
                  style={{ width: "32px", height: "32px" }}
                />
              </span>
              International Calls: +234 904-381-5024
            </p>
          </b>

          <p id="title"> E-MAIL </p>
          <b>
            <p>
              <span style={{ marginRight: "3px" }}>
                {" "}
                <img
                  src="/images/mail.jpg"
                  alt="mail"
                  style={{ width: "32px", height: "32px" }}
                />
              </span>
              mastersamuel2@gmail.com
            </p>
          </b>
        </div>

        <form className="submitForm d-block" onSubmit={submitmessage}>
          <p> GET IN TOUCH </p>
          <br />
          <input type="email" placeholder="Enter your email" onChange={(e) => {setguestemail(e.target.value)}} name="email" value={guestemail}required/>
          <input type="text" placeholder="Enter your name" name="name" value={guestname} onChange={(e) => { setguestname(e.target.value)}} required />
          <textarea placeholder="send us a message today...." name="message" value={guestmessage} onChange={(e) => { setguestmessage(e.target.value)}} required></textarea>
          <button type="submit"> SEND MESSAGE</button>
        </form>
      </div>
      <div
        className="col-4 p-1"
        style={{
          position: "absolute",
          left: "20%",
          top: "90%",
          textAlign: "right",
        }}
      >
        {" "}
        <p style={{ fontSize: "40px", fontWeight: "bolder" }}>
          <span>
            {" "}
            <img src="images/contact.jpg" alt="ok" />
          </span>
          We are available <br />
          on all channels <span style={{ color: "goldenrod" }}> 24/7</span>
          <br /> Don't hesitate to reach us.
        </p>
      </div>

      <div className="googlemap" style={{ height: "300px" }}>
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
