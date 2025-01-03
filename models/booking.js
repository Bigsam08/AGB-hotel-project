/**
 * boking model
 */

const mongoose = require('mongoose');
const bookingSchema = mongoose.Schema({
	room : {
		type: String,
		required: true
	},
	name : {
		type: String,
		required: true
	},
	lastName : {
		type: String,
		required: true
	},
	email : {
		type: String,
		required: true
	},
	roomid : {
		type: String,
		required: true
	},
	arrival : {
		type: String,
		required: true
	},
	departure : {
		type: String,
		required: true
	},
	totaldays : {
		type: String,
		required: true
	},
	totalAmount : {
		type: Number,
		required: true
	},
	reference : {
		type: String,
		required: true
	},
	transactionId : {
		type: String,
		required: true
	},
	status : {
		type: String,
		required: true,
		default: "booked"
	}
}, {
	timestamps : true
})

const bookingModel = mongoose.model('bookings', bookingSchema) //collection name and the bookingschema
module.exports = bookingModel;
