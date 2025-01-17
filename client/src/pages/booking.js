import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../component/Loader";
import Error from "../component/Error";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { PaystackButton } from "react-paystack";
import Swal from "sweetalert2";
import "../styles/bookng.css";

function Booking() {
  const params = useParams();
  const roomid = params.roomid;
  const arrival = params.arrival;
  const departure = params.departure;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [room, setRoom] = useState();

  const arr = dayjs(arrival, "DD-MM-YYYY");
  const depart = dayjs(departure, "DD-MM-YYYY");
  const totaldays = Math.abs(arr.diff(depart, "day"));

  const [totalAmount, settotalAmount] = useState();

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        setLoading(true);
        const response = await axios.post("/api/rooms/getroomid", { roomid });
        settotalAmount(response.data.perNight * totaldays);
        setRoom(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
        setLoading(false);
      }
    };
    fetchRoom();
  }, []);

  const [paymentData, setPaymentData] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  const [isChecked, setIsChecked] = useState(false); // state for checkbox

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSuccess = async (reference) => {
    const bookingDetails = {
      room,
      name: paymentData.name,
      lastName: paymentData.lastName,
      email: paymentData.email,
      roomid,
      arrival,
      departure,
      totalAmount,
      totaldays,
      reference: reference.reference,
    };

    try {
      setLoading(true);
      await axios.post("/api/bookings/bookingroom", bookingDetails);
      setLoading(false);
      Swal.fire(
        "Congratulations!!",
        "Booking is successful details sent to your email",
        "success"
      ).then((result) => {
        window.location.href = "/";
      });
    } catch (error) {
      setLoading(false);
      Swal.fire("oops!!", "Booking not successful", "error");
      console.log("error sending booking details to backend", error);
      setError(
        "There was an error saving your booking details. Please try again."
      );
    }
    console.log("Payment successful!", reference);
  };

  const handleClose = () => {
    console.log("Payment closed");
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: paymentData.email,
    amount: totalAmount * 100,
    publicKey: "pk_test_2c257c6220b0ad00678cf6dded71a14600da4a28",
  };

  const handleError = (error) => {
    console.error("Payment error:", error);
    alert("Payment failed. Please try again.");
  };

  const validateForm = () => {
    // Check if all fields are filled and checkbox is checked
    return (
      paymentData.name && paymentData.lastName && paymentData.email && isChecked
    );
  };

  const handlePayment = () => {
    if (!validateForm()) {
      const missingFields = [];
      if (!paymentData.name) missingFields.push("First Name");
      if (!paymentData.lastName) missingFields.push("Last Name");
      if (!paymentData.email) missingFields.push("Email");
      if (!isChecked) missingFields.push("Acknowledgement");

      Swal.fire({
        title: "Please complete all required fields",
        text: `Missing: ${missingFields.join(", ")}`,
        icon: "warning",
      });
    }
  };

  return (
    <div className="main">
      {loading ? (
        <Loader />
      ) : room ? (
        <div className="container md-6 col-8">
          <div className="check-out">
            <Link to="/rooms">
              <p className=" back-link">
                {" "}
                &larr; <span> Check Out</span>{" "}
              </p>
            </Link>
          </div>
          <div className="contact-info md-2 h-10 col-7 p-3">
            <p className="d-block">
              {" "}
              Contact Details <span> *Required </span>
            </p>
            <br></br>
            <input
              type="text"
              placeholder="First Name *"
              name="name"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Last Name *"
              name="lastName"
              required
              onChange={handleChange}
            />
            <br />
            <input
              type="email"
              placeholder="email@gmail.com *"
              name="email"
              required
              onChange={handleChange}
            />
            <p> This is the email we will send your confirmation to.</p>
            <br />
            <div className="price-details col-8 p-3">
              <b>
                <p> Booking details </p>
              </b>
              <hr></hr>
              <div className="mt-4 booking-confirmations">
                <p>
                  {" "}
                  Arrival : <span className="float-right"> {arrival} </span>
                </p>
                <p>
                  {" "}
                  Departure: <span className="float-right">
                    {departure}
                  </span>{" "}
                </p>
                <p>
                  {" "}
                  Total nights: <span className="float-right">
                    {totaldays}
                  </span>{" "}
                </p>
                <p>
                  {" "}
                  price per Night:{" "}
                  <span className="float-right">NGN {room.perNight} </span>
                </p>
                <p>
                  {" "}
                  Tax and Fees : <span className="float-right">NGN 0.00 </span>
                </p>
                <hr />
                <p>
                  <b>
                    {" "}
                    Total :{" "}
                    <span className="float-right">NGN {totalAmount} </span>
                  </b>
                </p>
                <p>
                  {" "}
                  Including Taxes <br /> and Fees{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="policy col-7 mt-3">
            <b>
              <p> Policies</p>
            </b>
            <br></br>
            <div className="policy-content">
              <b>
                {" "}
                <p> {room.name} </p>{" "}
              </b>
              <div className="d-flex" style={{ flexDirection: "column" }}>
                <div style={{ display: "flex", gap: "20px" }}>
                  <label htmlFor="checkin">Check-in:</label>
                  <label htmlFor="checkout">Check-out:</label>
                </div>
                <div style={{ display: "flex", gap: "20px" }}>
                  <p> after 2:00pm</p>
                  <p> Before 12:00pm</p>
                </div>
              </div>
              <h5> Guarantee Policy</h5>
              <p>Reservation should be guaranteed with a credit card </p>
              <h5> Cancel Policy</h5>
              <p>
                {" "}
                Reservation can be cancelled for free before 4pm on the day of
                arrival{" "}
              </p>
            </div>
          </div>

          <div className="acknowledge col-7 ">
            <b>
              <p> Acknowledgement</p>
            </b>
            <br></br>
            <p>
              {" "}
              By completing this booking, I agree with the Booking Conditions.
            </p>
            <label>
              <input type="checkBox" required onChange={handleCheckboxChange} />{" "}
              I agree with the Privacy Terms *
            </label>
            <br />
          </div>

          <PaystackButton
            {...config}
            text="Proceed to Payment"
            onSuccess={handleSuccess}
            onClose={handleClose}
            onError={handleError}
            disabled={!validateForm()} // Disable button if form is incomplete
            onClick={handlePayment} // Handle missing fields alert
            className="paystack-button"
          />
        </div>
      ) : (
        <div style={{ height: "100vh" }}>
          <Error />
        </div>
      )}
    </div>
  );
}

export default Booking;
