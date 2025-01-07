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
		html: ` <div style="font-family: Arial, sans-serif; background-color: #f4f4f9; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); max-width: 600px; margin: auto;">
            <h1 style="color: #4CAF50; text-align: center; margin-bottom: 20px;">Booking Confirmation</h1>
            <p style="font-size: 16px; color: #333; line-height: 1.6;">Dear ${bookingDetails.name} ${bookingDetails.lastName},</p>
            <p style="font-size: 16px; color: #333; line-height: 1.6;">Thank you for booking with us! Here are your booking details:</p>
            
            <div style="background-color: #ffffff; border-radius: 8px; padding: 20px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); margin-top: 20px;">
				<p style="font-size: 16px; color: #333; margin: 8px 0;"><strong style="color: #4CAF50;">First Name:</strong> ${bookingDetails.name}</p>
				<p style="font-size: 16px; color: #333; margin: 8px 0;"><strong style="color: #4CAF50;">Last Name:</strong> ${bookingDetails.lastName}</p>
                <p style="font-size: 16px; color: #333; margin: 8px 0;"><strong style="color: #4CAF50;">Room:</strong> ${bookingDetails.room}</p>
                <p style="font-size: 16px; color: #333; margin: 8px 0;"><strong style="color: #4CAF50;">Arrival:</strong> ${bookingDetails.arrival}</p>
                <p style="font-size: 16px; color: #333; margin: 8px 0;"><strong style="color: #4CAF50;">Departure:</strong> ${bookingDetails.departure}</p>
                <p style="font-size: 16px; color: #333; margin: 8px 0;"><strong style="color: #4CAF50;">Total Amount:</strong> NGN ${bookingDetails.totalAmount}</p>
                <p style="font-size: 16px; color: #333; margin: 8px 0;"><strong style="color: #4CAF50;">Total Days:</strong> ${bookingDetails.totaldays}</p>
                <p style="font-size: 16px; color: #333; margin: 8px 0;"><strong style="color: #4CAF50;">Booking Reference:</strong> ${bookingDetails.reference}</p>
            </div>

            <p style="font-size: 16px; color: #333; margin-top: 20px;">If you have any questions, feel free to reach out to us.</p>
            <p style="font-size: 16px; color: #333; margin-top: 10px;">We look forward to your arrival as we are committed at AGB HOTELS to give you the best of services.</p>

            <p style="font-size: 18px; text-align: center; font-weight: bold; color: #333; margin-top: 30px;">Thank you!</p>
        </div>
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