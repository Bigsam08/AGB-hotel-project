const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require('dotenv').config();

// Transporter to send the mail
const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.HOTEL_EMAIL,
		pass: process.env.HOTEL_PASSWORD
	}
});


router.use(express.json());


router.post('/contact', (req, res) => {
	const { name, email, message } = req.body;

	/** 
	 * this is the end point to get user message from the frontend, 
	 * validate it here and use nodemailer to fill in and send the message 
	 * to our email
	 */


	const mailOptions = {
		from: email,
		to: process.env.HOTEL_EMAIL,
		subject: `Message from ${name}`,
		text: message
	};
	try {
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log("e no go", error);
				return res.status(500).send(error.toString());
			}
			console.log("mail sent to your inbox");
			res.status(200).json({message: "message delivered", success: true});
		});
		
	} catch (error) {
		console.log("didnt receievd any data from user!!!", error);
		res.status(500).json({error: "Error sending message"});
	}
});

module.exports = router;
