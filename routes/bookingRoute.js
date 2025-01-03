require("dotenv").config();
const express = require("express");
const router = express.Router();
const dayjs = require("dayjs");
const Booking = require("../models/booking");
const Room = require("../models/rooms");
const axios = require("axios");
const { sendConfirmedBookingMail } = require("../services/emailSender");

router.post("/bookingroom", async (req, res) => {
  const {
    room,
    name,
    lastName,
    email,
    roomid,
    arrival,
    departure,
    totalAmount,
    totaldays,
    reference,
  } = req.body;
  const transactionReference = reference;
  try {
    /** check with paystack secret key to confirm if the payment was successful or not before saving the booking */
    const verifyPayment = await axios.get(
      `https://api.paystack.co/transaction/verify/${transactionReference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );
    const paymentData = verifyPayment.data;

    /** conditional satatement */

    if (paymentData.status && paymentData.data.status === "success") {
      const newbooking = new Booking({
        room: room.name,
        name,
        lastName,
        email,
        roomid: room._id,
        arrival: dayjs(arrival, "DD-MM-YYYY").format("DD-MM-YYYY"),
        departure: dayjs(departure, "DD-MM-YYYY").format("DD-MM-YYYY"),
        totalAmount,
        totaldays,
        reference: paymentData.data.reference,
        transactionId: paymentData.data.id,
      });
      const booking = await newbooking.save();

      /**
       * now this user booking has been saved to database.
       *  we use the find  room searching with the room id and updated the current booking status of the room
       * */

      const currentBookingUpdate = await Room.findOne({ _id: room._id });
      currentBookingUpdate.currentBookings.push({
        bookingid: booking._id,
        arrival: dayjs(arrival, "DD-MM-YYYY").format("DD-MM-YYYY"),
        departure: dayjs(departure, "DD-MM-YYYY").format("DD-MM-YYYY"),
        status: booking.status,
      });
      await currentBookingUpdate.save();

      /** ---------- NOW BOOKING HAS BEEN SENT TO DB,
       * SEND BOOKING EMAIL CONFIRMATION TO GUEST
       */

      await sendConfirmedBookingMail(email, {
        name,
        lastName,
        room: room.name,
        arrival: dayjs(arrival, "DD-MM-YYYY").format("DD-MM-YYYY"),
        departure: dayjs(departure, "DD-MM-YYYY").format("DD-MM-YYYY"),
        totalAmount,
        totaldays,
        reference: paymentData.data.reference,
      });
      res.status(200).json("Booking successful and confirmation email sent!");
    } else {
      // verification fails
      res
        .status(400)
        .json({
          message: "Payment verification failed",
          error: paymentData.message,
        });
    }
  } catch (error) {
    console.error("Error Booking not saved", error);
    if (error.response) {
      // Error response from Paystack or other API
      res
        .status(error.response.status)
        .json({ message: error.response.data.message });
    } else {
      // Network or other errors
      res
        .status(500)
        .json({ message: "An error occurred while processing the booking." });
    }
  }
});

module.exports = router;
