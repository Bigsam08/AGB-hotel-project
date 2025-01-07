# AGB Hotel Booking Website

## Overview
A hotel booking platform built with React, Node.js, Express, MongoDB Atlas, and integrated with Paystack payment gateway.
The website allows users to view available rooms, make bookings, and securely process payments online and get booking confirmations via e-mails.
This is a responsive website for all screen devices

## Features
- Room Browsing: Users can browse available rooms with their details, including prices and descriptions.
- Booking System: Users can select rooms, choose booking dates, and proceed to checkout.
- Paystack Integration: A seamless and secure payment experience for users to complete bookings via Paystack.

## Tech Stack
* Frontend: React
* Backend: Node.js, Express.js
* Database: MongoDB
* Payment Gateway: Paystack
* Styling: CSS/Bootstrap framework/sweetalert2/react-loader
* Installation
* Prerequisites
 Before you begin, ensure you have the following installed:

*Node.js: Install Node.js*
*MongoDB: Install MongoDB*
*Paystack Account: Sign up for Paystack*

## Requirements:
Check the requirement.txt for all pacakges installed for this project.

## Usage

## Frontend
- **Homepage:** Also the landing page that Displays features of our Website, buttons to different routes as the user needs i.e link to available rooms page.
- **Room Details:** Users can click on rooms to see more details and proceed to booking (Booking of rooms will only display when users selects a check in checkout date).
- **Payment Process:** Secure payment flow using Paystack for booking confirmation.

## Backend

- Bookings API: API endpoints to create and retrieve bookings, update room availability.
- Payment API: Integrate Paystack for processing payments on successful bookings.
- Paystack Payment Integration
- This project uses the Paystack payment gateway for processing payments. When users book a room, they are redirected to the Paystack payment page to complete the transaction.
- Nodemailer to authenticate the contact form from the user and also use transport to send booking confirmations to the user via email

- Paystack Public Key is used on the frontend for initiating payments.
- Paystack Secret Key is used on the backend to verify successful payments.

### Testing
For testing purposes, you can use the following credentials:

Test Credit Card: 4084084084084081
Expiry Date: 12/25
CVV: 123
Deployment
You can deploy the application on cloud platforms such as:

***
## Frontend Deployment: Netlify, Vercel, or GitHub Pages.
## Backend Deployment: Heroku, AWS, DigitalOcean.
## MongoDB Database: MongoDB Atlas.
1. Set up your MongoDB Atlas cluster.
2. Set up Paystack production keys and environment variables on your hosting platform.

## Contributing
I welcome contributions to this project! To contribute:

## Fork the repository.
Create a feature branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
React
Node.js
Express.js
MongoDB
Paystack

## Author
Agbebi Oluwashola Samuel
