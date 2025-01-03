const nodemailer = require('nodemailer');

const sendConfirmedBookingMail = async(email, bookingDetails) => {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: '',
			pass: ''
		}
	});
	const mailOptions = {
		from: agbhotel,
		to: email,
		subject: "Booking confirmation Success",
		html: `<h1>Booking Confirmation</h1>
            <p>Dear ${bookingDetails.name} ${bookingDetails.lastName},</p>
            <p>Thank you for booking with us! Here are your booking details:</p>
            <p><strong>Room:</strong> ${bookingDetails.room}</p>
            <p><strong>Arrival:</strong> ${bookingDetails.arrival}</p>
            <p><strong>Departure:</strong> ${bookingDetails.departure}</p>
            <p><strong>Total Amount:</strong> NGN ${bookingDetails.totalAmount}</p>
            <p><strong>Total Days:</strong> ${bookingDetails.totaldays}</p>
            <p><strong>Booking Reference:</strong> ${bookingDetails.reference}</p>
            <p>If you have any questions, feel free to reach out to us.</p>
			 <p>We look forward to your arrival as we are comitted at AGB HOTELS to give you the best of services</p>
            <p>Thank you!</p>
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