const nodemailer = require('nodemailer');
require('dotenv').config();

const sendConfirmedBookingMail = async(email, bookingDetails) => {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.HOTEL_EMAIL,
			pass: process.env.HOTEL_PASSWORD
		}
	});
	const mailOptions = {
		from: process.env.HOTEL_EMAIL,
		to: email,
		subject: "Booking confirmation Success",
		html: `<h1 style="color: #4CAF50; text-align: center;">Booking Confirmation</h1>
            <p>Dear ${bookingDetails.name} ${bookingDetails.lastName},
            Thank you for booking with us! Here are your booking details:</p>
            <p style="padding: 5px;"><strong>Room:</strong> &nbsp;&nbsp;${bookingDetails.room}</p>
            <p style="padding: 5px;"><strong>Arrival:</strong> &nbsp;&nbsp;${bookingDetails.arrival}</p>
            <p style="padding: 5px;"><strong>Departure:</strong> &nbsp;&nbsp;${bookingDetails.departure}</p>
            <p style="padding: 5px;"><strong>Total Amount:</strong> &nbsp;&nbsp; NGN ${bookingDetails.totalAmount}</p>
            <p style="padding: 5px;"><strong>Total Days:</strong> &nbsp;&nbsp; ${bookingDetails.totaldays}</p>
            <p style="padding: 5px;"><strong>Booking Reference:</strong> &nbsp;&nbsp; ${bookingDetails.reference}</p>
            <p>If you have any questions, feel free to reach out to us.</p>
			<p>We look forward to your arrival as we are comitted at AGB HOTELS to give you the best of services</p>
            <p  style="font-size: 16px; text-align: center; font-weight: bold;">Thank you!</p>
        `
	};

	try {
		await transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log("Email not delivered!", error);
			} else {
				console.log("Email successfully sent!!", info);
			}
		});
	} catch (error) {
		console.error("Email configuration vailed", error);
		throw new Error("Error sending email");
		
	}

};

module.exports = { sendConfirmedBookingMail };