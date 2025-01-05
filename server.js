const express = require("express");
const db_connection = require("./db");
const bookingRoute = require('./routes/bookingRoute');
const roomsRoute = require("./routes/roomsRouter"); // room router
const contactRoute = require("./routes/contactRoute");
const app = express();

/** The main entry to the backedn server
 */

/** Connect to db */
db_connection();

/** get a json format in post method when data is sent from client side */
app.use(express.json());


app.use("/api/rooms", roomsRoute);
app.use('/api/bookings', bookingRoute);
app.use('/api/mail', contactRoute);


app.listen(5000, () => {
  console.log("Server is running on http://127.0.0.1:5000");
});
